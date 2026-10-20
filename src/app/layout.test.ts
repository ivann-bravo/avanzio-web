import { describe, expect, it, vi } from "vitest";

// next/font solo funciona dentro del build de Next: en los tests alcanza con que devuelva los nombres de variable.
vi.mock("next/font/google", () => {
  const font = () => ({ variable: "font", className: "font" });
  return { Bricolage_Grotesque: font, Instrument_Serif: font, JetBrains_Mono: font };
});

import { metadata } from "@/app/layout";

describe("metadatos del sitio", () => {
  it("usa avanzio.ar, el dominio principal (avanzio.com.ar redirige ahí)", () => {
    expect(metadata.metadataBase?.toString()).toBe("https://avanzio.ar/");
  });
});
