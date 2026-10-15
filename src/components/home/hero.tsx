import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Sticker } from "@/components/ui/sticker";
import { waLink } from "@/lib/whatsapp";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="overflow-hidden px-4 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1fr_1.12fr] lg:gap-6">
        <div className="pb-6 lg:pb-24">
          <h1 className="hero-in text-impact text-display-xl" style={delay(60)}>
            Tu negocio <br className="hidden sm:block" />
            ya no entra en un <span className="text-accent text-violet">Excel.</span>
          </h1>
          <p className="hero-in mt-7 max-w-[30ch] text-[1.2rem] leading-relaxed text-ink-soft" style={delay(160)}>
            Hacemos el sistema que tu PyME necesita. Lo construimos con vos y nos quedamos.
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={delay(260)}>
            <ButtonLink href={waLink("home")} icon="whatsapp" size="lg">
              Escribinos por WhatsApp
            </ButtonLink>
            <ButtonLink href="/casos" variant="secondary" size="lg">
              Ver casos reales
            </ButtonLink>
          </div>
        </div>

        {/* Antes: la planilla real de TryHardware. Después: su panel real. */}
        <div aria-hidden="true" className="relative">
          <div className="relative rounded-t-[32px] bg-violet px-5 pt-36 sm:px-10 sm:pt-44 lg:pt-48">
            <div className="sheet-settle absolute -left-3 top-8 w-[62%] overflow-hidden rounded-lg border border-sand bg-bone shadow-[0_18px_40px_-20px_rgba(22,19,15,0.55)] sm:-left-14">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/casos/tryhardware/before-excel.png"
                  alt=""
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 340px, 60vw"
                  className="object-cover object-left-top"
                />
              </div>
            </div>
            <Sticker animated rotate={-12} className="absolute -top-8 right-6 z-10">
              Hecho
              <br />
              con vos
            </Sticker>
            <div className="panel-rise relative aspect-[4/3] overflow-hidden rounded-t-2xl border border-violet-deep/30 bg-bone shadow-[0_-12px_40px_-18px_rgba(42,21,128,0.75)]">
              <div className="absolute inset-y-0 left-0 w-[150%]">
                <Image
                  src="/casos/tryhardware/panel-dashboard.png"
                  alt=""
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 860px, 140vw"
                  className="object-cover object-left-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
