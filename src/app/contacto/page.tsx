import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { waLink, waMessage } from "@/lib/whatsapp";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contacto: escribinos por WhatsApp",
  description:
    "Contanos qué te frena. Te respondemos el mismo día hábil y la primera charla es gratis. WhatsApp +54 9 11 7063-0456 o hola@avanzio.ar.",
  path: "/contacto",
});

/** Lo que pasa después de escribir. Los tiempos salen del flujo comercial (docs/clientes/flujo-comercial.md). */
const nextSteps = [
  { title: "Te respondemos en el día", text: "En días hábiles, siempre una persona del equipo." },
  { title: "Charlamos 20 a 30 minutos", text: "Gratis, para entender tu negocio y ver si podemos ayudarte." },
  { title: "Te pasamos la propuesta por escrito", text: "Qué hacemos, cuánto sale y para cuándo, antes de arrancar." },
] as const;

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", path: "" }, { name: "Contacto", path: "/contacto" }])} />
      <PageHeader
        title={
          <>
            Contanos <span className="text-accent text-violet">qué te frena.</span>
          </>
        }
        intro="La primera charla es gratis y sin compromiso."
      />
      <Section tone="paper" aria-label="Formas de contacto" flushTop>
        {/* Dos columnas de la misma altura: canales a la izquierda (el bloque de WhatsApp crece) y el formulario a la derecha. */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex min-w-0 flex-col gap-6">
            <div className="flex flex-col rounded-[var(--radius-card)] bg-violet p-6 text-bone sm:p-8 lg:flex-1">
              <p className="font-semibold text-violet-tint">La forma más rápida</p>
              <p className="mt-3 text-impact text-[clamp(2.6rem,6vw,3.8rem)]">WhatsApp</p>
              <p className="mt-2 text-lg text-violet-tint">{site.whatsappDisplay}</p>
              <figure className="mt-8 hidden max-w-[34ch] lg:block">
                <figcaption className="text-sm text-violet-tint">El mensaje ya va escrito, solo tenés que completarlo:</figcaption>
                <p className="mt-3 rounded-2xl rounded-tl-sm bg-bone px-4 py-3 text-ink">{waMessage("contacto")}</p>
              </figure>
              <ButtonLink href={waLink("contacto")} variant="on-violet" icon="whatsapp" size="lg" className="mt-8 self-start lg:mt-auto">
                Escribinos por WhatsApp
              </ButtonLink>
            </div>
            <dl className="grid gap-6 rounded-[var(--radius-card)] border border-sand bg-bone p-6 sm:grid-cols-2 sm:p-8">
              <div>
                <dt className="text-sm font-semibold text-ink-muted">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all font-semibold underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ink"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink-muted">Horarios</dt>
                {site.hours.map((h) => (
                  <dd key={h} className="mt-2 font-semibold">
                    {h}
                  </dd>
                ))}
                <dd className="mt-3 text-sm text-ink-soft">¿Una urgencia fuera de horario? Escribinos igual.</dd>
              </div>
            </dl>
          </div>
          <div className="min-w-0">
            <ContactForm />
          </div>
        </div>

        <div className="mt-6 rounded-[var(--radius-card)] border border-sand bg-bone p-6 sm:p-8">
          <h2 className="text-title text-2xl">Qué pasa después de escribirnos</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-ink font-mono text-sm text-bone">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="mt-0.5 text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
