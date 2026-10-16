import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contanos qué te frena. La primera charla es gratis y sin compromiso. Escribinos por WhatsApp o por mail.",
};

/** Lo que pasa después de escribir. Los tiempos salen del flujo comercial (docs/clientes/flujo-comercial.md). */
const nextSteps = [
  { title: "Te respondemos en el día", text: "En días hábiles, siempre una persona del equipo." },
  { title: "Charlamos 20 a 30 minutos", text: "Gratis, para entender tu negocio y ver si podemos ayudarte." },
  { title: "Te pasamos la propuesta por escrito", text: "Qué hacemos, cuánto sale y para cuándo, antes de arrancar." },
] as const;

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Contanos <span className="text-accent text-violet">qué te frena.</span>
          </>
        }
        intro="La primera charla es gratis y sin compromiso."
      />
      <Section tone="paper" aria-label="Formas de contacto" flushTop>
        {/* En celular: canales, formulario y después los pasos. En escritorio el formulario ocupa la columna derecha entera. */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[auto_1fr]">
          <div className="grid min-w-0 content-start gap-4">
            <div className="rounded-[var(--radius-card)] bg-violet p-6 text-bone sm:p-8">
              <p className="font-semibold text-violet-tint">La forma más rápida</p>
              <p className="mt-3 text-impact text-[clamp(2.6rem,6vw,3.8rem)]">WhatsApp</p>
              <p className="mt-2 text-lg text-violet-tint">{site.whatsappDisplay}</p>
              <ButtonLink href={waLink("contacto")} variant="on-violet" icon="whatsapp" size="lg" className="mt-8">
                Escribinos por WhatsApp
              </ButtonLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${site.email}`}
                className="rounded-[var(--radius-card)] border border-sand bg-bone p-6 transition-colors duration-200 hover:border-ink"
              >
                <p className="text-sm font-semibold text-ink-muted">Email</p>
                <p className="mt-2 break-all font-semibold">{site.email}</p>
              </a>
              <div className="rounded-[var(--radius-card)] border border-sand bg-bone p-6">
                <p className="text-sm font-semibold text-ink-muted">Horarios</p>
                {site.hours.map((h) => (
                  <p key={h} className="mt-2 font-semibold">
                    {h}
                  </p>
                ))}
                <p className="mt-3 text-sm text-ink-soft">¿Una urgencia fuera de horario? Escribinos igual.</p>
              </div>
            </div>
          </div>
          <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <ContactForm />
          </div>
          <div className="min-w-0 self-start rounded-[var(--radius-card)] border border-sand bg-bone p-6 sm:p-8 lg:col-start-1">
              <h2 className="text-title text-2xl">Qué pasa después de escribirnos</h2>
              <ol className="mt-6 space-y-5">
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
        </div>
      </Section>
    </>
  );
}
