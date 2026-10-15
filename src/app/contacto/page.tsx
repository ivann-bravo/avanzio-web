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
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
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
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
