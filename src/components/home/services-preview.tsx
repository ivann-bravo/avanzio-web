import Link from "next/link";
import { ServiceMedia } from "@/components/sections/service-media";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { services } from "@/content/services";

export function ServicesPreview() {
  return (
    <Section tone="paper" id="servicios" aria-labelledby="servicios-title">
      <h2 id="servicios-title" className="reveal max-w-[18ch] text-title text-display-lg">
        Tres formas de <span className="text-accent text-violet">sacarte trabajo de encima.</span>
      </h2>

      <div className="mt-16 border-t border-ink">
        {services.map((service, i) => (
          <article
            key={service.id}
            className={`reveal group grid gap-8 py-10 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-14 lg:py-14 ${
              i < services.length - 1 ? "border-b border-sand" : ""
            }`}
          >
            <div>
              <h3 className="text-title text-display-md">{service.title}</h3>
              <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink-soft">{service.outcome}</p>
              <Link href={`/servicios#${service.id}`} className="mt-6 inline-flex items-center gap-2 font-semibold">
                Ver cómo funciona
                <Icon name="arrow-right" className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
            <ServiceMedia service={service} />
          </article>
        ))}
      </div>
    </Section>
  );
}
