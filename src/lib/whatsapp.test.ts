import { describe, expect, it } from "vitest";
import { WHATSAPP_PHONE, signalsMessage, waLink, waLinkWithText, type WaContext } from "@/lib/whatsapp";

const contexts: WaContext[] = ["generic", "home", "servicios", "nosotros", "contacto", "casos", "gestion", "tienda", "automatizacion"];

function decode(url: string): string {
  return new URL(url).searchParams.get("text") ?? "";
}

describe("whatsapp", () => {
  it.each(contexts)("el contexto %s arma un link válido a wa.me", (ctx) => {
    const url = waLink(ctx);
    expect(url.startsWith(`https://wa.me/${WHATSAPP_PHONE}?text=`)).toBe(true);
    expect(url).not.toMatch(/\s/);
    expect(decode(url).startsWith("Hola Avanzio")).toBe(true);
  });

  it("conserva acentos, ñ, ¿ y saltos de línea", () => {
    const text = "¿Señales? Sí:\n- Excel con año 2024";
    expect(decode(waLinkWithText(text))).toBe(text);
  });

  it("arma el mensaje de señales con viñetas", () => {
    expect(signalsMessage(["Uno.", "Dos."])).toBe(
      "Hola Avanzio, vi el sitio y me pasa esto:\n- Uno.\n- Dos.\n¿Podemos hablar?",
    );
  });
});
