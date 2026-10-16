import { describe, expect, it } from "vitest";
import {
  CONTACT_LIMITS,
  MIN_FILL_MS,
  escapeHtml,
  parseContactBody,
  payloadFromFormData,
  validateContact,
  type ContactPayload,
} from "@/lib/contact";

const valid: ContactPayload = {
  nombre: "Ana",
  empresa: "",
  email: "ana@negocio.com",
  whatsapp: "",
  servicio: "Tienda online",
  mensaje: "",
};

/** Lo que manda el formulario: los datos más cuánto tardó la persona en completarlo. */
const body = (extra: Record<string, unknown> = {}) => ({ ...valid, t: MIN_FILL_MS + 1000, ...extra });

describe("contacto", () => {
  it("recorta espacios y completa campos faltantes con vacío", () => {
    const fd = new FormData();
    fd.set("nombre", "  Ana  ");
    fd.set("email", " ana@negocio.com ");
    expect(payloadFromFormData(fd)).toEqual({ ...valid, servicio: "" });
  });

  it("alcanza con un WhatsApp válido si no deja email", () => {
    expect(validateContact({ ...valid, email: "", whatsapp: "+54 9 11 7063-0456" })).toEqual({});
  });

  it("pide al menos un email o un WhatsApp", () => {
    expect(validateContact({ ...valid, email: "", whatsapp: "" }).email).toMatch(/email o un WhatsApp/);
  });

  it("rechaza un WhatsApp con letras o demasiado corto", () => {
    expect(validateContact({ ...valid, whatsapp: "llamame" }).whatsapp).toBeDefined();
    expect(validateContact({ ...valid, whatsapp: "1234" }).whatsapp).toBeDefined();
  });

  it("un payload completo no tiene errores", () => {
    expect(validateContact(valid)).toEqual({});
  });

  it("marca nombre, email inválido y servicio faltante", () => {
    const errors = validateContact({ ...valid, nombre: "", email: "ana@", servicio: "" });
    expect(Object.keys(errors).sort()).toEqual(["email", "nombre", "servicio"]);
  });

  it("acepta emails con subdominio y rechaza los que tienen espacios", () => {
    expect(validateContact({ ...valid, email: "ana@mail.negocio.com.ar" })).toEqual({});
    expect(validateContact({ ...valid, email: "ana @negocio.com" }).email).toBeDefined();
  });

  it("rechaza un servicio que no está en la lista y textos demasiado largos", () => {
    expect(validateContact({ ...valid, servicio: "<b>otro</b>" }).servicio).toBeDefined();
    expect(validateContact({ ...valid, nombre: "a".repeat(CONTACT_LIMITS.nombre + 1) }).nombre).toBeDefined();
    expect(validateContact({ ...valid, mensaje: "a".repeat(CONTACT_LIMITS.mensaje + 1) }).mensaje).toBeDefined();
  });

  it("escapeHtml neutraliza etiquetas, comillas y ampersands", () => {
    expect(escapeHtml(`<a href="x" onclick='y'>&</a>`)).toBe("&lt;a href=&quot;x&quot; onclick=&#39;y&#39;&gt;&amp;&lt;/a&gt;");
  });
});

describe("parseContactBody (servidor)", () => {
  it("acepta un cuerpo válido y recorta espacios", () => {
    expect(parseContactBody(body({ nombre: "  Ana " }))).toEqual({ kind: "ok", payload: valid });
  });

  it("devuelve inválido si el cuerpo no es un objeto o los campos no son texto", () => {
    expect(parseContactBody(null).kind).toBe("invalid");
    expect(parseContactBody("hola").kind).toBe("invalid");
    expect(parseContactBody(body({ nombre: 42 })).kind).toBe("invalid");
  });

  it("devuelve inválido con email mal formado", () => {
    const result = parseContactBody(body({ email: 'x"@y.com onmouseover=alert(1)' }));
    expect(result.kind).toBe("invalid");
  });

  it("marca como spam si el campo trampa viene completo", () => {
    expect(parseContactBody(body({ sitio: "https://spam.example" })).kind).toBe("spam");
  });

  it("marca como spam si se completó más rápido de lo que puede una persona, o sin medir el tiempo", () => {
    expect(parseContactBody(body({ t: 800 })).kind).toBe("spam");
    expect(parseContactBody({ ...valid }).kind).toBe("spam");
  });
});

