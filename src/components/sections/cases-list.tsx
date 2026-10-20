import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { STATUS_LABEL, cases, type CaseStudy } from "@/content/cases";
import { waLinkWithText } from "@/lib/whatsapp";

function CaseShot({ item }: { item: CaseStudy }) {
  if (!item.image) return null;
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-sand bg-ink">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className={`object-cover ${item.image.anchor === "left" ? "object-left-top" : "object-top"} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
      />
    </div>
  );
}

function CaseRow({ item, index }: { item: CaseStudy; index: number }) {
  const shot = <CaseShot item={item} />;
  return (
    <article
      className={`${index === 0 ? "hero-rise" : "reveal"} grid gap-8 border-t border-sand pt-12 first:border-t-0 first:pt-0 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14`}
    >
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        {item.detailPage ? (
          <Link href={`/casos/${item.slug}`} tabIndex={-1} aria-hidden="true" className="group block">
            {shot}
          </Link>
        ) : (
          shot
        )}
      </div>

      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-ink-muted">
          {item.sector}
          <span
            className={`rounded-full px-3 py-1 font-semibold ${
              item.status === "live" ? "border border-sand bg-paper text-ink" : "bg-violet-tint text-violet-deep"
            }`}
          >
            {STATUS_LABEL[item.status]}
          </span>
        </p>
        <h2 className="mt-3 text-title text-display-md">{item.name}</h2>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-sm font-semibold text-ink-muted">Antes</dt>
            <dd className="mt-1 text-lg leading-relaxed text-ink-soft">{item.before}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-violet">Hoy</dt>
            <dd className="mt-1 text-lg font-semibold leading-relaxed">{item.after}</dd>
          </div>
        </dl>

        <ul aria-label="Qué construimos" className="mt-6 flex flex-wrap gap-2">
          {item.built.map((b) => (
            <li key={b} className="rounded-full border border-sand bg-paper px-3 py-1.5 text-sm font-medium">
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {item.detailPage ? (
            <Link
              href={`/casos/${item.slug}`}
              className="group inline-flex items-center gap-2 text-lg font-semibold underline decoration-sand underline-offset-[6px] transition-colors duration-200 hover:decoration-ink"
            >
              Ver el caso
              <Icon name="arrow-right" className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          ) : (
            <ButtonLink
              href={waLinkWithText(`Hola Avanzio, vi el caso de ${item.name} en el sitio y quiero algo parecido para mi negocio.`)}
              icon="whatsapp"
              variant="secondary"
            >
              Escribinos por WhatsApp
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}

/** El listado completo de casos: una fila por proyecto, con más detalle que la grilla de la Home. */
export function CasesList() {
  return (
    <div className="grid gap-12">
      {cases.map((item, i) => (
        <CaseRow key={item.slug} item={item} index={i} />
      ))}
    </div>
  );
}
