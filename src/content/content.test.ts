import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { cases } from "@/content/cases";
import { faqFor } from "@/content/faq";
import { services } from "@/content/services";
import { signals } from "@/content/signals";
import { afterItems, beforeItems, pairs } from "@/content/transformation";

const root = process.cwd();
const publicFile = (src: string) => existsSync(join(root, "public", src));

describe("contenido", () => {
  it("los casos con página de detalle tienen su ruta", () => {
    for (const c of cases.filter((c) => c.detailPage)) {
      expect(existsSync(join(root, "src/app/casos", c.slug, "page.tsx")), c.slug).toBe(true);
    }
  });

  it("los proyectos que no están en producción no prometen página de detalle", () => {
    for (const c of cases.filter((c) => c.status !== "live")) {
      expect(c.detailPage, c.slug).toBe(false);
    }
  });

  it("todas las imágenes referenciadas existen en public", () => {
    const srcs = [
      ...cases.flatMap((c) => (c.image ? [c.image.src] : [])),
      ...services.flatMap((s) => s.images.map((i) => i.src)),
      ...beforeItems.flatMap((i) => (i.kind === "image" ? [i.src] : [])),
      ...afterItems.map((i) => i.src),
    ];
    for (const src of srcs) expect(publicFile(src), src).toBe(true);
  });

  it("ningún testimonio está a medio cargar", () => {
    for (const c of cases) {
      if (c.testimonial) {
        expect(c.testimonial.quote.length).toBeGreaterThan(10);
        expect(c.testimonial.author.length).toBeGreaterThan(1);
      }
    }
  });

  it("ids únicos en servicios, señales y casos", () => {
    for (const ids of [services.map((s) => s.id), signals.map((s) => s.id), cases.map((c) => c.slug)]) {
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("señales cortas y cerradas con punto (sirven de post)", () => {
    expect(signals.length).toBeGreaterThanOrEqual(5);
    for (const s of signals) {
      expect(s.text.endsWith(".")).toBe(true);
      expect(s.text.length).toBeLessThanOrEqual(90);
    }
  });

  it("el Home muestra 7 preguntas (incluye pago, costo mensual y propiedad) y Servicios todas", () => {
    expect(faqFor("home")).toHaveLength(7);
    expect(faqFor("home").map((f) => f.id)).toEqual(expect.arrayContaining(["pago", "costo-mensual", "propiedad"]));
    expect(faqFor("servicios").length).toBeGreaterThan(faqFor("home").length);
  });

  it("la transformación tiene los 4 pares del brief", () => {
    expect(pairs).toHaveLength(4);
  });

  it("ningún texto visible usa raya larga", () => {
    const texts = [
      ...cases.flatMap((c) => [c.name, c.kind, c.summary, c.highlight ?? ""]),
      ...services.flatMap((s) => [s.title, s.outcome, s.before, s.after, ...s.includes]),
      ...signals.map((s) => s.text),
      ...faqFor("servicios").flatMap((f) => [f.question, f.answer]),
      ...pairs.flatMap((p) => [p.before, p.after]),
    ];
    for (const t of texts) expect(t, t).not.toMatch(/[—–]/);
  });
});
