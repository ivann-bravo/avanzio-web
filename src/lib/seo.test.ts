import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { faqFor } from "@/content/faq";
import {
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  pageMetadata,
  serializeJsonLd,
} from "@/lib/seo";

describe("SEO", () => {
  it("cada página declara su URL canónica y la usa al compartir", () => {
    const meta = pageMetadata({ title: "Servicios", description: "Algo", path: "/servicios" });
    expect(meta.alternates?.canonical).toBe("/servicios");
    expect(meta.openGraph).toMatchObject({ url: "/servicios", title: "Servicios", description: "Algo" });
  });

  it("sin imagen propia, al compartir conserva la imagen general, el nombre del sitio y el idioma", () => {
    const meta = pageMetadata({ title: "Servicios", description: "Algo", path: "/servicios" });
    expect(meta.openGraph).toMatchObject({ siteName: "Avanzio", locale: "es_AR", type: "website" });
    expect(meta.openGraph?.images).toEqual([expect.objectContaining({ url: "/og-image.png" })]);
  });

  it("una imagen propia para compartir reemplaza a la general", () => {
    const meta = pageMetadata({ title: "X", description: "Y", path: "/casos/x", image: "/og/x.jpg" });
    expect(meta.openGraph?.images).toEqual([{ url: "/og/x.jpg", width: 1200, height: 630, alt: "X" }]);
  });

  it("el sitemap lista las páginas públicas con su URL completa y deja afuera /marca", () => {
    const urls = sitemap().map((e) => e.url);
    for (const path of ["", "/servicios", "/casos", "/casos/tryhardware", "/casos/santa-benedetta", "/casos/troncone-motors", "/nosotros", "/contacto"]) {
      expect(urls).toContain(`${SITE_URL}${path}`);
    }
    expect(urls.some((u) => u.includes("/marca"))).toBe(false);
  });

  it("robots deja indexar todo menos la API y /marca, y apunta al sitemap", () => {
    const r = robots();
    const rule = Array.isArray(r.rules) ? r.rules[0] : r.rules;
    expect(rule.disallow).toEqual(expect.arrayContaining(["/api/", "/marca"]));
    expect(r.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });

  it("la organización trae nombre, web, contacto y zona de trabajo", () => {
    const org = organizationSchema();
    expect(org).toMatchObject({ "@type": "ProfessionalService", name: "Avanzio", url: SITE_URL, email: "hola@avanzio.ar" });
    expect(org.telephone).toMatch(/^\+54/);
    expect(JSON.stringify(org.areaServed)).toContain("Argentina");
  });

  it("la organización enlaza los perfiles de Instagram y LinkedIn", () => {
    expect(organizationSchema().sameAs).toEqual([
      "https://www.instagram.com/avanzio.ar/",
      "https://www.linkedin.com/company/avanzioar/",
    ]);
  });

  it("las preguntas frecuentes se publican como FAQPage con las mismas respuestas", () => {
    const items = faqFor("home");
    const schema = faqSchema(items);
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(items.length);
    expect(schema.mainEntity[0]).toMatchObject({ "@type": "Question", name: items[0].question, acceptedAnswer: { text: items[0].answer } });
  });

  it("las migas de pan usan URLs completas y posiciones en orden", () => {
    const schema = breadcrumbSchema([
      { name: "Casos", path: "/casos" },
      { name: "TryHardware", path: "/casos/tryhardware" },
    ]);
    expect(schema.itemListElement[1]).toMatchObject({ position: 2, item: `${SITE_URL}/casos/tryhardware` });
  });

  it("el JSON-LD no puede cerrar el <script> aunque un texto traiga etiquetas", () => {
    expect(serializeJsonLd({ name: "</script><script>alert(1)</script>" })).not.toContain("</script>");
  });
});
