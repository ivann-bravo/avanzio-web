import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import type { FaqItem } from "@/content/faq";

export function FaqSection({
  items,
  title = (
    <>
      Lo que nos preguntan <span className="text-accent text-violet">siempre.</span>
    </>
  ),
}: {
  items: readonly FaqItem[];
  title?: ReactNode;
}) {
  return (
    <Section tone="paper" id="preguntas" aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <h2 id="faq-title" className="reveal max-w-[12ch] text-title text-display-lg">
          {title}
        </h2>
        <div className="reveal border-t border-ink">
          {items.map((item) => (
            <details key={item.id} className="group border-b border-sand">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <Icon name="plus" className="size-5 shrink-0 transition-transform duration-200 ease-out group-open:rotate-45" />
              </summary>
              <p className="max-w-[60ch] pb-7 text-lg leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
