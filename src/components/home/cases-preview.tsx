import { CasesBento } from "@/components/sections/cases-bento";
import { Section } from "@/components/ui/section";
import { TestimonialBlock } from "@/components/ui/testimonial-block";
import { cases } from "@/content/cases";

export function CasesPreview() {
  const quote = cases.find((c) => c.testimonial !== null)?.testimonial ?? null;
  return (
    <Section tone="bone" id="casos" aria-labelledby="casos-title">
      <h2 id="casos-title" className="reveal max-w-[16ch] text-title text-display-lg">
        Negocios que ya <span className="text-accent text-violet">dejaron la planilla.</span>
      </h2>
      <div className="mt-14">
        <CasesBento />
      </div>
      {quote ? (
        <div className="mt-16">
          <TestimonialBlock testimonial={quote} />
        </div>
      ) : null}
    </Section>
  );
}
