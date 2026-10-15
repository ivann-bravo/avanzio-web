import AvanzioLogo from "@/components/avanzio-logo";
import { Sticker } from "@/components/ui/sticker";

type SocialPostProps = {
  variant: "paper" | "violet";
  ratio: "1:1" | "4:5";
  series: string;
  lead: string;
  accent: string;
  sticker?: string;
};

/** Plantilla de post para redes con las mismas piezas que la web. Escala con su ancho. */
export function SocialPost({ variant, ratio, series, lead, accent, sticker }: SocialPostProps) {
  const violet = variant === "violet";
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-md p-[7%] [container-type:inline-size] ${
        ratio === "1:1" ? "aspect-square" : "aspect-[4/5]"
      } ${violet ? "bg-violet text-bone" : "border border-sand bg-paper text-ink"}`}
    >
      <p className={`text-[3.4cqw] font-semibold ${violet ? "text-violet-tint" : "text-ink-muted"}`}>{series}</p>
      {sticker ? (
        <Sticker rotate={-10} className="absolute right-[7%] top-[6%]">
          {sticker}
        </Sticker>
      ) : null}
      <p className="mt-auto text-impact text-[12cqw]">
        {lead} <span className={`text-accent ${violet ? "text-violet-tint" : "text-violet"}`}>{accent}</span>
      </p>
      <div className={`mt-[6%] flex items-center justify-between text-[3cqw] ${violet ? "text-violet-tint" : "text-ink-muted"}`}>
        <span>Deslizá</span>
        <AvanzioLogo width={84} className={violet ? "fill-bone" : "fill-ink"} />
      </div>
    </div>
  );
}
