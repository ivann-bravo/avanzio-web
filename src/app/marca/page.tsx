import type { Metadata } from "next";
import AvanzioLogo, { AvanzioMark } from "@/components/avanzio-logo";
import { PageHeader } from "@/components/sections/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { SocialPost } from "@/components/ui/social-post";
import { Sticker } from "@/components/ui/sticker";
import { palette } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Marca",
  robots: { index: false, follow: false },
};

const ROLES: Partial<Record<keyof typeof palette, string>> = {
  paper: "Base de casi todas las secciones",
  bone: "Fondo alterno y tarjetas",
  sand: "Bordes y divisores",
  "before-card": "Lo que queda atrás",
  ink: "Texto, sección oscura y footer",
  violet: "El después y la acción",
  "violet-deep": "Superficies sobre violeta",
  mustard: "Stickers: uno por pantalla",
};

export default function MarcaPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Taller <span className="text-accent text-violet">×</span> Bloque
          </>
        }
        intro="Papel para leer con calma. Violeta para el después y la acción. Mostaza, una sola chispa por pantalla."
      />

      <Section tone="bone" aria-labelledby="paleta" flushTop className="pt-16 sm:pt-20">
        <h2 id="paleta" className="text-title text-display-md">
          Paleta
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
          {Object.entries(palette).map(([name, hex]) => (
            <li key={name}>
              <div className="h-20 rounded-xl border border-sand" style={{ backgroundColor: hex }} />
              <p className="mt-2 font-semibold">{name}</p>
              <p className="font-mono text-xs text-ink-muted">{hex}</p>
              {ROLES[name as keyof typeof palette] ? (
                <p className="mt-1 text-sm text-ink-soft">{ROLES[name as keyof typeof palette]}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" aria-labelledby="tipografia">
        <h2 id="tipografia" className="text-title text-display-md">
          Tipografía
        </h2>
        <div className="mt-10 space-y-10">
          <div>
            <p className="text-impact text-display-lg">Impacto</p>
            <p className="mt-2 text-ink-soft">Bricolage Grotesque condensada, mayúsculas. Hero, transformación, cierre y posts.</p>
          </div>
          <div>
            <p className="text-title text-display-lg">Títulos de sección</p>
            <p className="mt-2 text-ink-soft">Bricolage Grotesque 800.</p>
          </div>
          <div>
            <p className="text-title text-display-lg">
              La palabra que <span className="text-accent text-violet">importa.</span>
            </p>
            <p className="mt-2 text-ink-soft">Instrument Serif itálica, una sola por titular.</p>
          </div>
        </div>
      </Section>

      <Section tone="bone" aria-labelledby="componentes">
        <h2 id="componentes" className="text-title text-display-md">
          Piezas
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink href="/marca" icon="whatsapp">
            Botón principal
          </ButtonLink>
          <ButtonLink href="/marca" variant="secondary">
            Secundario
          </ButtonLink>
          <Sticker>
            Hecho
            <br />
            con vos
          </Sticker>
          <AvanzioLogo width={140} className="fill-ink" />
          <span className="grid size-16 place-items-center rounded-full bg-ink">
            <AvanzioMark size={28} className="fill-bone" />
          </span>
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="posts">
        <h2 id="posts" className="text-title text-display-md">
          Posts para redes
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg text-ink-soft">
          Serie inicial “Señales”: una señal de la home por post, en papel o violeta, con el logo abajo.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <SocialPost variant="paper" ratio="1:1" series="Señales #1" lead="¿Tu stock vive en un" accent="cuaderno?" />
          <SocialPost variant="violet" ratio="4:5" series="Avanzio" lead="Tu negocio ya no entra en un" accent="Excel." sticker="Hecho con vos" />
          <SocialPost variant="paper" ratio="4:5" series="Señales #2" lead="Respondés el mismo precio" accent="30 veces por día." />
        </div>
      </Section>

      <Section tone="bone" aria-labelledby="og">
        <h2 id="og" className="text-title text-display-md">
          Imagen para compartir
        </h2>
        <div className="mt-8 overflow-x-auto">
          <div id="og-frame" className="relative flex h-[630px] w-[1200px] shrink-0 flex-col justify-between overflow-hidden bg-paper p-16">
            <AvanzioLogo width={220} className="fill-ink" />
            <p className="relative z-10 max-w-[760px] text-impact text-[112px]">
              Tu negocio ya no entra en un <span className="text-accent text-violet">Excel.</span>
            </p>
            <div className="absolute -bottom-10 right-16 h-[340px] w-[330px] rounded-t-[32px] bg-violet" />
            <span className="absolute bottom-[250px] right-10 z-10 grid size-[120px] rotate-12 place-items-center rounded-full bg-mustard text-center text-impact text-[20px] leading-[0.95] text-ink">
              Hecho
              <br />
              con vos
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
