"use client";

import { useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { signals } from "@/content/signals";
import { signalsMessage, waLinkWithText } from "@/lib/whatsapp";

function countLabel(n: number): string {
  if (n === 0) return "Ninguna marcada todavía.";
  if (n === 1) return "Marcaste una. ¿Alguna más?";
  return `Marcaste ${n}. Hablemos.`;
}

export function Signals() {
  const [checked, setChecked] = useState<ReadonlySet<string>>(new Set());

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const selected = signals.filter((s) => checked.has(s.id)).map((s) => s.text);
  const ready = selected.length >= 2;

  return (
    <Section tone="bone" aria-labelledby="senales-title">
      <h2 id="senales-title" className="reveal max-w-[16ch] text-title text-display-lg">
        ¿Cuántas de estas <span className="text-accent text-violet">te pasan?</span>
      </h2>
      <p className="reveal mt-5 max-w-[46ch] text-lg text-ink-soft" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
        Tocá las que te suenan. Con dos ya vale la pena una charla.
      </p>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {signals.map((signal, i) => {
          const on = checked.has(signal.id);
          return (
            <li key={signal.id} className="reveal" style={{ "--reveal-delay": `${i * 60}ms` } as CSSProperties}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(signal.id)}
                className={`flex h-full w-full items-start gap-4 rounded-[var(--radius-card)] border p-6 text-left text-[1.15rem] font-medium leading-snug transition-[background-color,color,border-color,transform] duration-200 ease-out active:scale-[0.98] ${
                  on ? "border-violet bg-violet text-bone" : "border-sand bg-paper text-ink hover:border-ink-muted"
                }`}
              >
                <span
                  className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${
                    on ? "border-bone bg-bone text-violet" : "border-ink-muted text-transparent"
                  }`}
                >
                  <Icon name="check" className="size-4" />
                </span>
                <span>{signal.text}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex min-h-16 flex-col items-start gap-4 sm:flex-row sm:items-center">
        <p className="text-lg font-medium text-ink-soft" aria-live="polite">
          {countLabel(selected.length)}
        </p>
        <div
          className={`transition-[opacity,transform] duration-300 ease-out ${
            ready ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={!ready}
        >
          <ButtonLink href={waLinkWithText(signalsMessage(selected))} icon="whatsapp" size="lg" className={ready ? "" : "invisible"}>
            Escribinos por WhatsApp
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
