import type { CSSProperties, ReactNode } from "react";

/** Encabezado de las páginas interiores: titular de impacto y bajada corta, sobre papel. */
export function PageHeader({ title, intro, children }: { title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <h1 className="hero-rise max-w-[16ch] text-impact text-display-xl" style={{ "--d": "60ms" } as CSSProperties}>
          {title}
        </h1>
        {intro ? (
          <p className="hero-in mt-7 max-w-[44ch] text-[1.2rem] leading-relaxed text-ink-soft" style={{ "--d": "160ms" } as CSSProperties}>
            {intro}
          </p>
        ) : null}
        {children ? (
          <div className="hero-in mt-9" style={{ "--d": "240ms" } as CSSProperties}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
