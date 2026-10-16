import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/sections/page-header";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServiceMedia } from "@/components/sections/service-media";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { faqFor } from "@/content/faq";
import { services } from "@/content/services";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Sistemas de gestión, tiendas online y automatizaciones para PyMEs. Stock, precios y pedidos en un solo lugar.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Lo que construimos <span className="text-accent text-violet">para tu negocio.</span>
          </>
        }
        intro="No vendemos tecnología: resolvemos lo que hoy te come horas. Elegí por dónde empezar."
      >
        <nav aria-label="Servicios" className="flex flex-wrap gap-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-sand bg-bone px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-ink"
            >
              {s.shortName}
            </a>
          ))}
        </nav>
      </PageHeader>

      {services.map((service, i) => (
        <Section key={service.id} id={service.id} tone={i % 2 === 0 ? "bone" : "paper"} aria-labelledby={`${service.id}-title`}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <div className={i === 0 ? "hero-rise" : "reveal"}>
              <h2 id={`${service.id}-title`} className="text-title text-display-lg">
                {service.title}
              </h2>
              <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-ink-soft">{service.outcome}</p>
              <ul className="mt-8 space-y-3">
                {service.includes.map((line) => (
                  <li key={line} className="flex gap-3 text-lg">
                    <Icon name="check" className="mt-1 size-5 shrink-0 text-violet" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-[40ch] text-lg font-semibold">{service.prompt}</p>
              <ButtonLink href={waLink(service.wa)} icon="whatsapp" className="mt-4">
                Escribinos por WhatsApp
              </ButtonLink>
            </div>
            <div className={`${i === 0 ? "hero-rise" : "reveal"} grid gap-4`}>
              <ServiceMedia service={service} />
              <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-sand sm:grid-cols-2">
                <div className="bg-before-card p-6">
                  <dt className="font-semibold text-ink-muted">Antes</dt>
                  <dd className="mt-2 text-ink-soft">{service.before}</dd>
                </div>
                <div className="bg-violet p-6 text-bone">
                  <dt className="font-semibold text-violet-tint">Con Avanzio</dt>
                  <dd className="mt-2 font-semibold">{service.after}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="ink" aria-labelledby="proceso-title">
        <h2 id="proceso-title" className="reveal max-w-[15ch] text-title text-display-lg">
          Cuatro pasos, <span className="text-accent text-violet-tint">cero sorpresas.</span>
        </h2>
        <ProcessTimeline className="mt-16" />
      </Section>

      <FaqSection items={faqFor("servicios")} />
      <FinalCta context="servicios" />
    </>
  );
}
