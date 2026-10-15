import type { AnchorHTMLAttributes } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
}));

import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { TestimonialBlock } from "@/components/ui/testimonial-block";

describe("ButtonLink", () => {
  it("los links externos abren en pestaña nueva y sin opener", () => {
    const html = renderToStaticMarkup(<ButtonLink href="https://wa.me/1?text=hola">WhatsApp</ButtonLink>);
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it("los links internos no abren pestaña nueva", () => {
    const html = renderToStaticMarkup(<ButtonLink href="/casos">Casos</ButtonLink>);
    expect(html).not.toContain("target=");
    expect(html).toContain('href="/casos"');
  });
});

describe("Icon", () => {
  it("renderiza un svg decorativo oculto para lectores de pantalla", () => {
    const html = renderToStaticMarkup(<Icon name="whatsapp" />);
    expect(html).toContain("<svg");
    expect(html).toContain('aria-hidden="true"');
  });
});

describe("Section", () => {
  it("aplica el fondo del tono", () => {
    expect(renderToStaticMarkup(<Section tone="violet">x</Section>)).toContain("bg-violet");
    expect(renderToStaticMarkup(<Section>x</Section>)).toContain("bg-paper");
  });

  it("propaga aria-label y flushTop quita el padding superior", () => {
    const html = renderToStaticMarkup(
      <Section aria-label="Listado" flushTop>
        x
      </Section>,
    );
    expect(html).toContain('aria-label="Listado"');
    expect(html).toContain("pt-0");
    expect(html).not.toContain("pt-24");
  });
});

describe("TestimonialBlock", () => {
  it("no renderiza nada sin testimonio real", () => {
    expect(renderToStaticMarkup(<TestimonialBlock testimonial={null} />)).toBe("");
  });

  it("renderiza autor y cita cuando existe", () => {
    const html = renderToStaticMarkup(
      <TestimonialBlock testimonial={{ quote: "Cambió cómo trabajamos", author: "Ana", role: "Dueña" }} />,
    );
    expect(html).toContain("Cambió cómo trabajamos");
    expect(html).toContain("Ana");
  });
});
