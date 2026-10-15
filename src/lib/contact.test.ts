import { describe, expect, it } from "vitest";
import {
  CONTACT_LIMITS,
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
  servicio: "Tienda online",
  mensaje: "",
};

describe("contacto", () => {
  it("recorta espacios y completa campos faltantes con vacío", () => {
    const fd = new FormData();
    fd.set("nombre", "  Ana  ");
    fd.set("email", " ana@negocio.com ");
    expect(payloadFromFormData(fd)).toEqual({ ...valid, servicio: "" });
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
    expect(parseContactBody({ ...valid, nombre: "  Ana " })).toEqual({ kind: "ok", payload: valid });
  });

  it("devuelve inválido si el cuerpo no es un objeto o los campos no son texto", () => {
    expect(parseContactBody(null).kind).toBe("invalid");
    expect(parseContactBody("hola").kind).toBe("invalid");
    expect(parseContactBody({ ...valid, nombre: 42 }).kind).toBe("invalid");
  });

  it("devuelve inválido con email mal formado", () => {
    const result = parseContactBody({ ...valid, email: 'x"@y.com onmouseover=alert(1)' });
    expect(result.kind).toBe("invalid");
  });

  it("marca como spam si el campo trampa viene completo", () => {
    expect(parseContactBody({ ...valid, sitio: "https://spam.example" }).kind).toBe("spam");
  });
});

