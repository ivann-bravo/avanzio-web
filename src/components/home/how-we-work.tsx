import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TeamStrip } from "@/components/sections/team-strip";
import { Section } from "@/components/ui/section";

export function HowWeWork() {
  return (
    <Section tone="ink" id="proceso" aria-labelledby="proceso-title">
      <h2 id="proceso-title" className="reveal max-w-[15ch] text-title text-display-lg">
        Sin vueltas, <span className="text-accent text-violet-tint">y sin desaparecer.</span>
      </h2>
      <ProcessTimeline className="mt-16" />
      <TeamStrip className="mt-20" />
    </Section>
  );
}
