import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros — Avanzio",
  description:
    "Somos Iván y Magalí — dos desarrolladores de Buenos Aires que construyen software a medida para PyMEs argentinas con proyección LATAM.",
};

const stackItems = [
  { abbr: "TS", color: "text-blue-400", name: "TypeScript", role: "Lenguaje principal" },
  { abbr: "N↗", color: "text-slate-100", name: "Next.js", role: "Frontend / SSR" },
  { abbr: "NJ", color: "text-green-400", name: "Node.js", role: "Backend / APIs" },
  { abbr: "WP", color: "text-blue-600", name: "WordPress", role: "CMS / E-commerce" },
  { abbr: "PG", color: "text-purple-400", name: "PostgreSQL", role: "Base de datos" },
  { abbr: "TW", color: "text-cyan-400", name: "Tailwind CSS", role: "Estilos" },
  { abbr: "▲", color: "text-orange-400", name: "Vercel", role: "Deploy / Hosting" },
  { abbr: "MP", color: "text-yellow-400", name: "MercadoPago", role: "Pagos Argentina" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="pt-24 pb-20" style={{ backgroundColor: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="hero-animate hero-animate-1 inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-bold tracking-widest mb-6">
            QUIÉNES SOMOS
          </span>
          <h1 className="hero-animate hero-animate-2 text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
            <span className="text-white block">Somos Iván y Magalí.</span>
            <span className="text-[#8B5CF6] block">Dos desarrolladores de Buenos Aires.</span>
          </h1>
          <p className="hero-animate hero-animate-3 text-xl text-slate-400 max-w-2xl leading-relaxed">
            No somos una agencia. Cuando contratás Avanzio, trabajás directamente
            con nosotros — desde la primera reunión hasta el soporte post-lanzamiento.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HISTORIA */}
      <section
        className="py-24 border-t border-white/10"
        style={{ backgroundColor: "#0F0A20" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: story text */}
            <div className="space-y-6 reveal">
              <span className="text-[#7C3AED] uppercase tracking-widest text-sm font-bold">
                NUESTRA HISTORIA
              </span>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Empezamos resolviendo nuestros propios problemas
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Antes de tener clientes, teníamos TryHardware — nuestra propia tienda de
                hardware en Buenos Aires. Cuando los sistemas genéricos no alcanzaban, los
                construimos nosotros.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Ahí entendimos algo que la mayoría de las &ldquo;agencias&rdquo; no entiende:
                un sistema tiene que vivir dentro del negocio, no ser una solución de escritorio
                que nadie termina usando.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Hoy acompañamos a PyMEs argentinas con esa misma mentalidad: primero entendemos
                el negocio, después escribimos código.
              </p>
            </div>

            {/* Right: vertical timeline */}
            <div className="space-y-0">
              {/* Timeline item 1 */}
              <div className="flex gap-4 reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#7C3AED] text-sm">store</span>
                  </div>
                  <div className="w-px flex-1 bg-white/10 mt-2" />
                </div>
                <div className="pb-8">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">
                    El comienzo
                  </p>
                  <h3 className="font-bold text-white mb-1">TryHardware</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Construimos nuestra primera tienda y panel interno. Aprendimos que los
                    sistemas tienen que funcionar todos los días, sin excusas.
                  </p>
                </div>
              </div>

              {/* Timeline item 2 */}
              <div className="flex gap-4 reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-amber-400 text-sm">handshake</span>
                  </div>
                  <div className="w-px flex-1 bg-white/10 mt-2" />
                </div>
                <div className="pb-8">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">
                    Primer cliente externo
                  </p>
                  <h3 className="font-bold text-white mb-1">Santa Benedetta</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    El dueño de una fiambrería de barrio nos confió su tienda online.
                    Lo tratamos como si fuera la nuestra.
                  </p>
                </div>
              </div>

              {/* Timeline item 3 — no connector below */}
              <div className="flex gap-4 reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-emerald-400 text-sm">rocket_launch</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">
                    Hoy
                  </p>
                  <h3 className="font-bold text-white mb-1">Avanzio</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Abiertos a nuevos proyectos. Creciendo junto a las PyMEs del país con
                    tecnología que resuelve problemas concretos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — EL EQUIPO */}
      <section
        className="py-24 border-t border-white/10"
        style={{ backgroundColor: "#080612" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block py-1 px-3 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20 text-sm font-bold tracking-widest mb-4">
              EL EQUIPO
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">Quiénes están detrás</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Iván */}
            <div
              className="bg-[#1A1232] rounded-2xl p-8 text-center reveal"
              style={{ border: "1px solid rgba(124,58,237,0.3)", transitionDelay: '0.1s' }}
            >
              <div className="w-20 h-20 rounded-full bg-[#7C3AED]/20 border-2 border-[#7C3AED]/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#8B5CF6] font-black text-xl">IV</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Iván</h3>
              <p className="text-[#8B5CF6] text-sm font-semibold mb-4">
                Co-fundador · Backend &amp; Fullstack
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Estudiante avanzado de Sistemas. Foco en backend, integraciones y arquitectura.
                Constructor de TryHardware desde cero.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Node.js", "TypeScript", "PHP", "WordPress"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#080612] border border-white/10 rounded-full px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Magalí */}
            <div
              className="bg-[#1A1232] rounded-2xl p-8 text-center reveal"
              style={{ border: "1px solid rgba(245,158,11,0.3)", transitionDelay: '0.2s' }}
            >
              <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 font-black text-xl">MA</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Magalí</h3>
              <p className="text-amber-400 text-sm font-semibold mb-4">
                Co-fundadora · Frontend &amp; UX
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Estudiante avanzada de Sistemas. Foco en interfaces, experiencia de usuario y
                relación con el cliente. Cara visible de Avanzio.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Next.js", "Tailwind", "Figma"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#080612] border border-white/10 rounded-full px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — VALORES */}
      <section
        className="py-24 border-t border-white/10"
        style={{ backgroundColor: "#0F0A20" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block py-1 px-3 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20 text-sm font-bold tracking-widest mb-4">
              VALORES
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">Lo que nos define</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cercanía real */}
            <div
              className="bg-[#1A1232] rounded-2xl p-8 reveal"
              style={{ border: "1px solid rgba(255,255,255,0.08)", transitionDelay: '0.05s' }}
            >
              <span className="material-symbols-outlined text-[#8B5CF6] text-4xl mb-4 block">
                handshake
              </span>
              <h3 className="text-xl font-bold text-white mb-3">Cercanía real</h3>
              <p className="text-slate-400 leading-relaxed">
                No somos un ticket de soporte. Sos parte de nuestro trabajo y te tratamos como
                tal. Respuesta directa, sin intermediarios.
              </p>
            </div>

            {/* Código que funciona */}
            <div
              className="bg-[#1A1232] rounded-2xl p-8 reveal"
              style={{ border: "1px solid rgba(255,255,255,0.08)", transitionDelay: '0.15s' }}
            >
              <span className="material-symbols-outlined text-emerald-400 text-4xl mb-4 block">
                verified
              </span>
              <h3 className="text-xl font-bold text-white mb-3">Código que funciona</h3>
              <p className="text-slate-400 leading-relaxed">
                No entregamos demos bonitas. Entregamos sistemas que tu equipo puede usar desde
                el día uno, sin depender de nosotros para todo.
              </p>
            </div>

            {/* Foco en el negocio */}
            <div
              className="bg-[#1A1232] rounded-2xl p-8 reveal"
              style={{ border: "1px solid rgba(255,255,255,0.08)", transitionDelay: '0.25s' }}
            >
              <span className="material-symbols-outlined text-amber-400 text-4xl mb-4 block">
                trending_up
              </span>
              <h3 className="text-xl font-bold text-white mb-3">Foco en el negocio</h3>
              <p className="text-slate-400 leading-relaxed">
                Primero entendemos cómo ganás plata, después escribimos código. La tecnología
                es el medio, no el fin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — STACK */}
      <section
        className="py-24 border-t border-white/10"
        style={{ backgroundColor: "#080612" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block py-1 px-3 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20 text-sm font-bold tracking-widest mb-4">
              TECNOLOGÍAS
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">
              Las herramientas con las que trabajamos
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal" style={{ transitionDelay: '0.1s' }}>
            {stackItems.map((item) => (
              <div
                key={item.name}
                className="bg-[#1A1232] rounded-xl p-4 text-center"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#080612" }}
                >
                  <span className={`${item.color} font-black text-sm`}>{item.abbr}</span>
                </div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-500 mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section
        className="py-24 border-t border-white/10"
        style={{
          backgroundColor: "#0F0A20",
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, #0F0A20 70%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center reveal">
          <h2 className="text-4xl font-extrabold text-white mb-6">¿Trabajamos juntos?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Somos un equipo chico, y eso es una ventaja: cuando trabajás con Avanzio, trabajás
            directamente con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escribinos por WhatsApp
            </a>
            <Link
              href="/casos"
              className="inline-flex items-center justify-center gap-2 border border-[#7C3AED]/50 bg-transparent hover:bg-[#7C3AED]/10 text-[#A78BFA] px-8 py-4 rounded-xl font-bold transition-all"
            >
              <span className="material-symbols-outlined">folder_open</span>
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
