import type { AnchorHTMLAttributes } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
}));

import CasosPage from "@/app/casos/page";
import NosotrosPage from "@/app/nosotros/page";
import ServiciosPage from "@/app/servicios/page";

/**
 * Lo primero que se ve debajo del encabezado en un celular no puede esperar al JavaScript
 * (`.reveal` arranca invisible): si no, Chrome mide el LCP recién después de hidratar.
 */
describe("primera pantalla sin depender de JS", () => {
  it("Servicios: el primer servicio entra con hero-rise", () => {
    const html = renderToStaticMarkup(<ServiciosPage />);
    expect(html).toMatch(/<div class="hero-rise">\s*<h2 id="gestion-title"/);
  });

  it("Nosotros: la historia entra con hero-rise", () => {
    const html = renderToStaticMarkup(<NosotrosPage />);
    expect(html).toMatch(/<h2 id="historia-title" class="hero-rise /);
  });

  it("Casos: el primer caso entra con hero-rise y el resto sigue con reveal", () => {
    const html = renderToStaticMarkup(<CasosPage />);
    expect(html).toMatch(/<a href="\/casos\/tryhardware" class="hero-rise /);
    expect(html).toMatch(/<a href="\/casos\/santa-benedetta" class="reveal /);
  });

  it("Casos: el listado tiene un h2 para que los títulos no salten de h1 a h3", () => {
    const html = renderToStaticMarkup(<CasosPage />);
    expect(html).toMatch(/<section aria-labelledby="listado-title"[^>]*>[\s\S]*<h2 id="listado-title" class="sr-only">/);
  });

  it("Servicios: los botones de arriba usan etiquetas cortas y cada servicio tiene su frase antes del botón", () => {
    const html = renderToStaticMarkup(<ServiciosPage />);
    for (const label of ["Gestión", "Tienda online", "Automatización"]) {
      expect(html).toMatch(new RegExp(`<a href="#[a-z]+"[^>]*>${label}</a>`));
    }
    expect(html).toContain("¿Tu stock vive en una planilla?");
    expect(html).toContain("¿Hoy vendés por mensaje?");
    expect(html).toContain("¿Qué tarea repetís todos los días?");
  });
});
