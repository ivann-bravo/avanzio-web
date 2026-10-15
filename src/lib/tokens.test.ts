import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { palette, type PaletteToken } from "@/lib/tokens";
import { contrastRatio } from "@/lib/contrast";

const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");

describe("tokens", () => {
  it("globals.css declara cada color de la paleta con el mismo valor", () => {
    for (const [name, hex] of Object.entries(palette)) {
      expect(css).toContain(`--color-${name}: ${hex};`);
    }
  });

  it("contrastRatio calcula valores WCAG conocidos", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 0);
    expect(contrastRatio("#FFFFFF", "#FFFFFF")).toBeCloseTo(1, 5);
  });

  const pairs: Array<[PaletteToken, PaletteToken, number]> = [
    ["ink", "paper", 4.5],
    ["ink-soft", "paper", 4.5],
    ["ink-muted", "paper", 4.5],
    ["ink-muted", "bone", 4.5],
    ["ink-muted", "before-card", 4.5],
    ["ink-soft", "before-card", 4.5],
    ["violet", "paper", 4.5],
    ["violet", "bone", 4.5],
    ["bone", "violet", 4.5],
    ["violet-tint", "violet", 4.5],
    ["violet-tint", "violet-deep", 4.5],
    ["violet-deep", "violet-tint", 4.5],
    ["ink", "mustard", 4.5],
    ["bone-on-ink", "ink", 4.5],
    ["paper", "ink", 4.5],
    ["danger", "bone", 4.5],
    ["mustard", "violet", 3],
  ];

  it.each(pairs)("%s sobre %s cumple %s:1", (fg, bg, min) => {
    expect(contrastRatio(palette[fg], palette[bg])).toBeGreaterThanOrEqual(min);
  });

  it("las utilidades usan las variables de next/font (las de @theme inline no existen en runtime)", () => {
    expect(css).toMatch(/@utility text-accent \{[^}]*font-family: var\(--font-instrument\)/);
    expect(css).not.toMatch(/font-family: var\(--font-(serif|sans|mono)\)/);
  });

  it("el elemento principal (LCP) nunca arranca invisible", () => {
    for (const name of ["hero-rise", "panel-rise"]) {
      const block = css.match(new RegExp(`@keyframes ${name} \\{[^}]*\\}`))?.[0] ?? "";
      expect(block, name).not.toBe("");
      expect(block, name).not.toMatch(/opacity/);
    }
  });

  it("los reveal quedan visibles sin JS y con movimiento reducido", () => {
    expect(css).toMatch(/@media \(scripting: none\)\s*\{\s*\.reveal\s*\{\s*opacity: 1;/);
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)/);
  });

  it("al imprimir se ve todo, aunque no se haya scrolleado", () => {
    expect(css).toMatch(/@media print\s*\{\s*\.reveal\s*\{\s*opacity: 1;/);
  });
});
