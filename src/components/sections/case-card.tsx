import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { STATUS_LABEL, type CaseStudy } from "@/content/cases";
import { Icon } from "@/components/ui/icon";

export type CaseCardVariant = "feature" | "compact" | "ink";

function CaseImage({ item, variant }: { item: CaseStudy; variant: CaseCardVariant }) {
  if (!item.image) return null;
  if (item.image.device === "mobile") {
    return (
      <div className="flex h-[220px] items-start justify-center overflow-hidden bg-before-card pt-6">
        <div className="relative aspect-[375/560] w-[46%] max-w-[200px] overflow-hidden rounded-t-xl border border-sand shadow-[0_-10px_24px_-16px_rgba(22,19,15,0.5)] transition-transform duration-700 ease-out group-hover:-translate-y-1">
          <Image src={item.image.src} alt={item.image.alt} fill sizes="200px" className="object-cover object-top" />
        </div>
      </div>
    );
  }
  const height = variant === "feature" ? "aspect-[16/10]" : "h-[200px]";
  return (
    <div className={`relative overflow-hidden ${height} ${variant === "feature" ? "bg-ink" : ""}`}>
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes={variant === "feature" ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    </div>
  );
}

export function CaseCard({
  item,
  variant = "compact",
  className = "",
  index = 0,
  rise = false,
}: {
  item: CaseStudy;
  variant?: CaseCardVariant;
  className?: string;
  index?: number;
  /** Entra con `hero-rise` (sin esperar al JS) cuando la tarjeta está en la primera pantalla. */
  rise?: boolean;
}) {
  const dark = variant === "ink";
  const body: ReactNode = (
    <>
      <CaseImage item={item} variant={variant} />
      <div className={`flex flex-1 flex-col ${variant === "compact" ? "p-6" : "p-7"}`}>
        {item.status !== "live" ? (
          <p className="mb-3 inline-flex self-start rounded-full bg-violet-tint px-3 py-1 text-sm font-semibold text-violet-deep">
            {STATUS_LABEL[item.status]}
          </p>
        ) : null}
        {variant === "feature" ? <p className="text-sm font-medium text-ink-muted">{item.kind}</p> : null}
        <h3
          className={
            variant === "compact"
              ? "text-title text-2xl"
              : `mt-2 text-impact ${variant === "feature" ? "text-[clamp(2.4rem,5vw,3.6rem)]" : "text-[clamp(2.2rem,4vw,3rem)]"}`
          }
        >
          {item.name}
        </h3>
        <p className={`${variant === "compact" ? "mt-2" : "mt-4"} max-w-[52ch] ${dark ? "text-bone-on-ink" : "text-ink-soft"}`}>
          {item.summary}
          {item.highlight ? <span className="font-semibold text-ink"> {item.highlight}</span> : null}
        </p>
        {item.detailPage && variant !== "compact" ? (
          <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold">
            Ver el caso
            <Icon name="arrow-right" className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </>
  );

  const classes = `${rise ? "hero-rise" : "reveal"} group flex flex-col overflow-hidden rounded-[var(--radius-card)] ${
    dark ? "bg-ink text-paper" : "border border-sand bg-paper"
  } ${className}`;
  const style = { "--reveal-delay": `${index * 80}ms` } as CSSProperties;

  if (item.detailPage) {
    return (
      <Link href={`/casos/${item.slug}`} className={classes} style={style}>
        {body}
      </Link>
    );
  }
  return (
    <article className={classes} style={style}>
      {body}
    </article>
  );
}
