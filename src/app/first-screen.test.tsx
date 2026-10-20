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

  it("Casos: cada proyecto es una fila y el primero entra con hero-rise", () => {
    const html = renderToStaticMarkup(<CasosPage />);
    const rows = html.match(/<article[^>]*>/g) ?? [];
    expect(rows).toHaveLength(5);
    expect(rows[0]).toContain("hero-rise");
    expect(rows[1]).toContain("reveal");
    expect(html).toMatch(/<h2[^>]*>TryHardware<\/h2>/);
  });

  it("Casos: cada fila dice el rubro, el estado, el antes y el hoy, y qué construimos", () => {
    const html = renderToStaticMarkup(<CasosPage />);
    for (const text of ["Funcionando", "En lanzamiento", "Antes", "Hoy", "Tienda online", "Panel de gestión"]) {
      expect(html).toContain(text);
    }
  });

  it("Casos: los que tienen página llevan a verla y los demás abren WhatsApp nombrando el proyecto", () => {
    const html = renderToStaticMarkup(<CasosPage />);
    for (const slug of ["tryhardware", "santa-benedetta", "troncone-motors"]) {
      expect(html).toMatch(new RegExp(`<a href="/casos/${slug}"[^>]*>[\\s\\S]*?Ver el caso`));
    }
    expect(html).toContain(encodeURIComponent("el caso de G3D"));
    expect(html).toContain(encodeURIComponent("el caso de Motora"));
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
