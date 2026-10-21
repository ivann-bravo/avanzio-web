import { describe, expect, it } from "vitest";
import type { ContactPayload } from "@/lib/contact";
import { contactEmailHtml } from "@/lib/contact-email";

const base: ContactPayload = {
  nombre: "Ana Pérez",
  empresa: "Almacén Don Pepe",
  email: "ana@donpepe.com",
  whatsapp: "11 2345 6789",
  servicio: "Tienda online",
  mensaje: "Hoy vendemos por Instagram.\nQueremos una tienda propia.",
};
// 20/10/2026 15:30 UTC = 12:30 en Buenos Aires.
const at = new Date("2026-10-20T15:30:00Z");

describe("mail interno de contacto", () => {
  it("trae un texto de vista previa con el nombre y lo que le interesa", () => {
    const html = contactEmailHtml(base, at);
    expect(html).toMatch(/<div style="display:none[^"]*">Ana Pérez · Tienda online/);
  });

  it("muestra cuándo llegó, en hora de Buenos Aires", () => {
    expect(contactEmailHtml(base, at)).toContain("20/10/2026, 12:30");
  });

  it("muestra el logo desde el sitio publicado", () => {
    expect(contactEmailHtml(base, at)).toContain('src="https://avanzio.ar/icon-192.png"');
  });

  it("con WhatsApp ofrece escribirle con un saludo ya escrito, y también responder por mail", () => {
    const html = contactEmailHtml(base, at);
    expect(html).toContain("Escribirle por WhatsApp");
    expect(html).toContain(`https://wa.me/5491123456789?text=${encodeURIComponent("Hola Ana, te escribimos de Avanzio por tu consulta en la web.")}`);
    expect(html).toContain("Responderle por mail");
  });

  it("sin WhatsApp solo ofrece responder por mail", () => {
    const html = contactEmailHtml({ ...base, whatsapp: "" }, at);
    expect(html).not.toContain("Escribirle por WhatsApp");
    expect(html).toContain("Responderle por mail");
  });

  it("sin email solo ofrece WhatsApp", () => {
    const html = contactEmailHtml({ ...base, email: "" }, at);
    expect(html).toContain("Escribirle por WhatsApp");
    expect(html).not.toContain("Responderle por mail");
  });

  it("respeta los saltos de línea del mensaje", () => {
    expect(contactEmailHtml(base, at)).toMatch(/white-space:pre-wrap[^>]*>Hoy vendemos por Instagram\.\nQueremos/);
  });
});
