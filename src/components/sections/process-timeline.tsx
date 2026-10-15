import type { CSSProperties } from "react";
import { processSteps } from "@/content/process";

/** Los 4 pasos de trabajo. Pensado para ir sobre la sección tinta. */
export function ProcessTimeline({ className = "" }: { className?: string }) {
  return (
    <ol className={`relative grid gap-10 md:grid-cols-4 md:gap-6 ${className}`}>
      <span aria-hidden="true" className="absolute inset-x-0 top-[22px] hidden h-px bg-bone-on-ink/30 md:block" />
      {processSteps.map((step, i) => {
        const last = i === processSteps.length - 1;
        return (
          <li key={step.title} className="reveal relative" style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}>
            <span
              className={`relative grid size-11 place-items-center rounded-full font-bold ${last ? "bg-violet text-bone" : "bg-paper text-ink"}`}
            >
              {i + 1}
            </span>
            <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-bone-on-ink">{step.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
