import type { CSSProperties } from "react";
import type { Metadata } from "next";
import AvanzioLogo from "@/components/avanzio-logo";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Somos tres desarrolladores de Buenos Aires que construyen software a medida para PyMEs argentinas con proyección LATAM.",
};

/** Compromisos concretos: salen de las condiciones comerciales y del flujo de trabajo definidos por el equipo. */
const commitments = [
  { title: "Precio y alcance por escrito", text: "Antes de arrancar sabés qué vamos a hacer, cuánto sale y para cuándo está." },
  { title: "Avances cada semana", text: "Te mostramos el sistema funcionando en una demo semanal, no recién al final." },
  { title: "Todo a tu nombre", text: "El sistema, los datos y las cuentas quedan a nombre de tu negocio." },
  { title: "Te enseñamos a usarlo", text: "Lo dejamos andando, lo aprendés con nosotros y seguimos disponibles después." },
] as const;

const values = [
  { title: "Cercanía real", text: "Hablás con nosotros, no con un ticket. Te contestamos rápido y sin vueltas." },
  { title: "Código que funciona", text: "Sistemas probados, rápidos y seguros, que siguen andando cuando nadie los está mirando." },
  { title: "Foco en el negocio", text: "Primero entendemos cómo vendés y cómo operás. La tecnología viene después." },
] as const;

const stagger = (i: number) => ({ "--reveal-delay": `${i * 80}ms` }) as CSSProperties;

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Tres desarrolladores, <span className="text-accent text-violet">una sola idea.</span>
          </>
        }
      />

      <Section tone="paper" aria-labelledby="historia-title" flushTop>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="historia-title" className="hero-rise text-title text-display-md">
            Por qué existe{" "}
            <AvanzioLogo className="inline-block h-[0.74em] w-auto fill-current align-baseline text-violet" />
          </h2>
          <div className="hero-rise max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Avanzio nació viendo de cerca cómo trabaja una PyME: precios en planillas, pedidos en chats y horas que se van en
              tareas que un sistema puede hacer solo.
            </p>
            <p>
              Empezamos resolviendo esos problemas en negocios reales y aprendimos algo: el problema casi nunca es la tecnología. Es
              que nadie se sienta a entender cómo funciona tu negocio.
            </p>
            <p>Por eso trabajamos cerca. Hablás con quienes programan, ves el sistema crecer y nos quedamos después de la entrega.</p>
          </div>
        </div>
      </Section>

      <Section tone="bone" aria-labelledby="equipo-title">
        <h2 id="equipo-title" className="reveal text-title text-display-lg">
          Quiénes están <span className="text-accent text-violet">detrás.</span>
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {team.map((m, i) => (
            <li key={m.name} className="reveal rounded-[var(--radius-card)] border border-sand bg-paper p-7" style={stagger(i)}>
              <span aria-hidden="true" className="grid size-16 place-items-center rounded-full bg-ink text-lg font-bold text-paper">
                {m.initials}
              </span>
              <h3 className="mt-6 text-title text-2xl">{m.name}</h3>
              <p className="mt-1 text-ink-soft">{m.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" aria-labelledby="valores-title">
        <h2 id="valores-title" className="reveal text-title text-display-lg">
          Lo que nos <span className="text-accent text-violet">define.</span>
        </h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title} className="reveal border-t border-ink pt-6" style={stagger(i)}>
              <h3 className="text-title text-2xl">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink" aria-labelledby="compromisos-title">
        <h2 id="compromisos-title" className="reveal max-w-[16ch] text-title text-display-lg">
          Trabajar con nosotros, <span className="text-accent text-violet-tint">en concreto.</span>
        </h2>
        <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <li key={c.title} className="reveal border-t border-bone-on-ink/40 pt-6" style={stagger(i)}>
              <h3 className="text-title text-2xl text-paper">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-bone-on-ink">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta context="nosotros" />
    </>
  );
}
