import type { ReactNode } from "react";

const TONES = {
  paper: "bg-paper text-ink",
  bone: "bg-bone text-ink",
  ink: "bg-ink text-paper",
  violet: "bg-violet text-bone",
} as const;

type SectionProps = {
  tone?: keyof typeof TONES;
  id?: string;
  className?: string;
  /** Sin padding superior: para la sección que sigue pegada a un encabezado de página. */
  flushTop?: boolean;
  /** Padding superior extra para cuando la sección hace de encabezado (debajo de la navbar fija). */
  asHero?: boolean;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  children: ReactNode;
};

export function Section({ tone = "paper", id, className = "", flushTop = false, asHero = false, children, ...rest }: SectionProps) {
  const top = flushTop ? "pt-0" : asHero ? "pt-32 lg:pt-36" : "pt-24 sm:pt-32";
  return (
    <section
      id={id}
      aria-labelledby={rest["aria-labelledby"]}
      aria-label={rest["aria-label"]}
      className={`${TONES[tone]} scroll-mt-20 px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 ${top} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
