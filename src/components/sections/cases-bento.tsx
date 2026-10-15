import { CaseCard, type CaseCardVariant } from "@/components/sections/case-card";
import { cases, type CaseStudy } from "@/content/cases";

/** Lugar de cada caso en la grilla de 6 columnas. */
const LAYOUT: Record<CaseStudy["slug"], { variant: CaseCardVariant; className: string }> = {
  tryhardware: { variant: "feature", className: "md:col-span-4 md:row-span-2" },
  "santa-benedetta": { variant: "compact", className: "md:col-span-2" },
  g3d: { variant: "compact", className: "md:col-span-2" },
  "troncone-motors": { variant: "ink", className: "md:col-span-3" },
  motora: { variant: "compact", className: "md:col-span-3" },
};

/** `firstScreen`: el bento abre la página, así que el primer caso no espera al JS para verse. */
export function CasesBento({ firstScreen = false }: { firstScreen?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-6">
      {cases.map((item, i) => (
        <CaseCard key={item.slug} item={item} index={i % 3} rise={firstScreen && i === 0} {...LAYOUT[item.slug]} />
      ))}
    </div>
  );
}
