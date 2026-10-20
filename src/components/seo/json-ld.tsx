import { serializeJsonLd } from "@/lib/seo";

/** Datos estructurados para Google (schema.org). El contenido sale de datos propios y se escapa en serializeJsonLd. */
export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
