import Image from "next/image";
import type { CSSProperties } from "react";
import { AvanzioMark } from "@/components/avanzio-logo";
import { afterItems, beforeItems, pairs, type BeforeItem } from "@/content/transformation";

function BeforeCard({ item }: { item: BeforeItem }) {
  if (item.kind === "message") {
    return (
      <div className="flex h-[190px] w-[230px] shrink-0 rotate-[1.5deg] flex-col justify-end rounded-xl bg-before-card p-5 text-ink-soft">
        <p className="text-xl font-semibold leading-snug text-ink">{item.text}</p>
        <p className="mt-1 font-mono text-[13px]">{item.detail}</p>
      </div>
    );
  }
  return (
    <div className="relative h-[190px] shrink-0 -rotate-[1.5deg] overflow-hidden rounded-xl opacity-80 grayscale" style={{ width: item.width }}>
      <Image
        src={item.src}
        alt=""
        fill
        sizes={`${item.width}px`}
        className={`object-cover ${{ top: "object-top", "right-top": "object-right-top", center: "object-center" }[item.position]}`}
      />
    </div>
  );
}

export function Transformation() {
  // Cada carril se duplica para que el loop no tenga corte.
  const before = [...beforeItems, ...beforeItems];
  const after = [...afterItems, ...afterItems];

  return (
    <section aria-labelledby="transformacion-title" className="overflow-hidden bg-violet py-24 text-bone sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="transformacion-title" className="reveal max-w-[17ch] text-impact text-[clamp(2.8rem,7vw,5.6rem)]">
          Lo que hacés hoy, <span className="text-accent text-violet-tint">sin sufrirlo.</span>
        </h2>
      </div>

      <div aria-hidden="true" className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-2">
        <div className="lane-before overflow-hidden py-4">
          <div className="marquee-x gap-5 pr-5">
            {before.map((item, i) => (
              <BeforeCard key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="relative mx-auto grid size-28 place-items-center">
          <span className="portal-ring absolute inset-0 rounded-full border-2 border-dashed border-violet-tint/50" />
          <span className="grid size-[76px] place-items-center rounded-full bg-ink">
            <AvanzioMark size={34} className="fill-bone" />
          </span>
        </div>
        <div className="lane-after overflow-hidden py-4">
          <div className="marquee-x gap-5 pr-5">
            {after.map((item, i) => (
              <div key={i} className="relative h-[190px] shrink-0 overflow-hidden rounded-xl bg-bone" style={{ width: item.width }}>
                <Image src={item.src} alt="" fill sizes={`${item.width}px`} className="object-cover object-left-top" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-violet-tint/25 sm:grid-cols-2">
          {pairs.map((pair, i) => (
            <div key={pair.before} className="reveal bg-violet-deep p-7" style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}>
              <dt className="text-violet-tint line-through decoration-1">{pair.before}</dt>
              <dd className="mt-2 text-2xl font-bold">{pair.after}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
