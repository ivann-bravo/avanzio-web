import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Sticker } from "@/components/ui/sticker";
import { waLink, type WaContext } from "@/lib/whatsapp";

export function FinalCta({ context = "home" }: { context?: WaContext }) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-violet px-4 py-28 text-bone sm:px-6 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Sticker size="lg" rotate={12} className="absolute right-[8%] top-16 hidden lg:grid">
          La primera
          <br />
          charla es
          <br />
          gratis
        </Sticker>
        <h2 id="cta-title" className="reveal max-w-[11ch] text-impact text-[clamp(3.4rem,10vw,8rem)]">
          Contanos qué te <span className="text-accent text-violet-tint">frena.</span>
        </h2>
        <p className="reveal mt-7 max-w-[40ch] text-xl text-violet-tint" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
          Te contestamos nosotros, no un bot.
        </p>
        <div className="reveal mt-10" style={{ "--reveal-delay": "160ms" } as CSSProperties}>
          <ButtonLink href={waLink(context)} variant="on-violet" icon="whatsapp" size="lg">
            Escribinos por WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
