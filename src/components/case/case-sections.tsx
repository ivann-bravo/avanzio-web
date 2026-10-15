import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { waLink } from "@/lib/whatsapp";

const stagger = (i: number) => ({ "--reveal-delay": `${i * 70}ms` }) as CSSProperties;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

type CaseImage = { src: string; alt: string };

export function CaseHero({ kind, name, intro, url, image }: { kind: string; name: string; intro: string; url?: string; image?: CaseImage }) {
  return (
    <section className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link href="/casos" className="hero-in inline-flex items-center gap-2 text-ink-soft transition-colors duration-200 hover:text-ink">
          <Icon name="arrow-right" className="size-4 rotate-180" />
          Casos
        </Link>
        <div className={`mt-8 grid gap-12 ${image ? "lg:grid-cols-[1fr_1.15fr] lg:items-center" : ""}`}>
          <div>
            <p className="hero-in font-semibold text-violet" style={delay(40)}>
              {kind}
            </p>
            <h1 className="hero-in mt-3 text-impact text-display-xl" style={delay(80)}>
              {name}
            </h1>
            <p className="hero-in mt-6 max-w-[44ch] text-[1.2rem] leading-relaxed text-ink-soft" style={delay(160)}>
              {intro}
            </p>
            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={delay(240)}>
              <ButtonLink href={waLink("casos")} icon="whatsapp" size="lg">
                Escribinos por WhatsApp
              </ButtonLink>
              {url ? (
                <ButtonLink href={url} icon="arrow-up-right" variant="secondary" size="lg">
                  Ver el sitio
                </ButtonLink>
              ) : null}
            </div>
          </div>
          {image ? (
            <div className="hero-in relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-sand bg-ink" style={delay(200)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CaseProse({
  title,
  paragraphs,
  bullets,
  tone = "paper",
  aside,
}: {
  title: ReactNode;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  tone?: "paper" | "bone";
  aside?: ReactNode;
}) {
  return (
    <Section tone={tone}>
      <div className={`grid gap-12 ${aside ? "lg:grid-cols-[1.1fr_1fr] lg:items-center" : "lg:grid-cols-[1fr_1.4fr]"}`}>
        <div className={aside ? "" : "contents"}>
          <h2 className="reveal max-w-[18ch] text-title text-display-lg">{title}</h2>
          <div className={`reveal max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-soft ${aside ? "mt-8" : ""}`}>
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {bullets ? (
              <ul className="space-y-3 pt-2 text-ink">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Icon name="check" className="mt-1 size-5 shrink-0 text-violet" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        {aside ? <div className="reveal">{aside}</div> : null}
      </div>
    </Section>
  );
}

/** Capturas de celular sobre el fondo del "antes", para acompañar un bloque de texto. */
export function PhoneShot({ image }: { image: CaseImage }) {
  return (
    <figure className="flex justify-center overflow-hidden rounded-[var(--radius-card)] bg-before-card px-6 pt-8">
      <div className="relative aspect-[390/700] w-[56%] max-w-[260px] overflow-hidden rounded-t-2xl border border-sand shadow-[0_-12px_30px_-18px_rgba(22,19,15,0.5)]">
        <Image src={image.src} alt={image.alt} fill sizes="260px" className="object-cover object-top" />
      </div>
    </figure>
  );
}

export function PainGrid({ title, items }: { title: ReactNode; items: readonly { label: string; desc: string }[] }) {
  return (
    <Section tone="bone">
      <h2 className="reveal max-w-[18ch] text-title text-display-lg">{title}</h2>
      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.label} className="reveal rounded-[var(--radius-card)] bg-before-card p-6" style={stagger(i)}>
            <h3 className="text-xl font-bold">{item.label}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{item.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function FeatureGrid({
  title,
  intro,
  items,
  tone = "paper",
}: {
  title: ReactNode;
  intro?: string;
  items: readonly { title: string; desc: string }[];
  tone?: "paper" | "bone";
}) {
  return (
    <Section tone={tone}>
      <h2 className="reveal max-w-[18ch] text-title text-display-lg">{title}</h2>
      {intro ? <p className="reveal mt-6 max-w-[60ch] text-lg leading-relaxed text-ink-soft">{intro}</p> : null}
      <ul className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.title} className="reveal border-t border-ink pt-6" style={stagger(i)}>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{item.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ResultsBlock({
  title,
  items,
  note,
}: {
  title: ReactNode;
  items: readonly { label: string; value: string; sub: string }[];
  note?: ReactNode;
}) {
  return (
    <section className="overflow-hidden bg-violet px-4 py-24 text-bone sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal max-w-[14ch] text-impact text-[clamp(2.6rem,6.5vw,5rem)]">{title}</h2>
        <dl className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-violet-tint/25 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={item.label} className="reveal flex flex-col bg-violet-deep p-6" style={stagger(i)}>
              <dt className="order-2 mt-3 font-semibold">{item.label}</dt>
              <dd className="order-1 text-impact text-[clamp(2.4rem,4.5vw,3.4rem)]">{item.value}</dd>
              <dd className="order-3 mt-1 text-sm text-violet-tint">{item.sub}</dd>
            </div>
          ))}
        </dl>
        {note ? <p className="reveal mt-10 max-w-[62ch] text-lg leading-relaxed text-violet-tint">{note}</p> : null}
      </div>
    </section>
  );
}

export function StackList({ items }: { items: readonly { name: string }[] }) {
  return (
    <Section tone="ink" aria-label="Stack utilizado">
      <h2 className="reveal text-title text-display-md">Con qué lo construimos</h2>
      <ul className="reveal mt-8 flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s.name} className="rounded-full border border-bone-on-ink/30 px-4 py-2 font-mono text-sm text-paper">
            {s.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
