import type { Metadata } from "next";
import type { FaqItem } from "@/content/faq";
import { site } from "@/content/site";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";

/** Dominio principal: avanzio.com.ar y www redirigen acá. */
export const SITE_URL = "https://avanzio.ar";

export const SITE_DESCRIPTION =
  "Software a medida para PyMEs de Argentina: sistemas de gestión, tiendas online y automatizaciones. Hecho en Buenos Aires por un equipo que te atiende directo.";

/** Páginas públicas, en el orden del sitemap. `/marca` queda afuera a propósito (es una guía interna). */
export const PUBLIC_ROUTES = [
  { path: "", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/casos", priority: 0.8 },
  { path: "/casos/tryhardware", priority: 0.7 },
  { path: "/casos/santa-benedetta", priority: 0.7 },
  { path: "/casos/troncone-motors", priority: 0.7 },
  { path: "/nosotros", priority: 0.6 },
  { path: "/contacto", priority: 0.8 },
] as const;

/** Base de lo que se ve al compartir. Next reemplaza el openGraph del layout en vez de combinarlo, así que cada página la repite. */
export const OPEN_GRAPH_BASE: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "es_AR",
  siteName: "Avanzio",
  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Avanzio. Tu negocio ya no entra en un Excel." }],
};

/** Metadatos de una página: título, descripción, URL canónica y cómo se ve al compartirla. */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...OPEN_GRAPH_BASE,
      title,
      description,
      url: path,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organizacion`,
    name: "Avanzio",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og-image.png`,
    description: SITE_DESCRIPTION,
    email: site.email,
    telephone: `+${WHATSAPP_PHONE}`,
    address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressRegion: "Buenos Aires", addressCountry: "AR" },
    areaServed: [{ "@type": "Country", name: "Argentina" }],
    founder: ["Iván", "Magalí", "Julián"].map((name) => ({ "@type": "Person", name })),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
    ],
    knowsLanguage: "es",
    sameAs: site.social.flatMap((s) => (s.url ? [s.url] : [])),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#sitio`,
    name: "Avanzio",
    url: SITE_URL,
    inLanguage: "es-AR",
    publisher: { "@id": `${SITE_URL}/#organizacion` },
  };
}

export function faqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** JSON para un <script type="application/ld+json">: escapa "<" para que ningún texto pueda cerrar la etiqueta. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
