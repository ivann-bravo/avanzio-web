import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Somos Iván y Magalí — dos estudiantes avanzados de Sistemas que construyen software real para negocios reales, desde Banfield, Buenos Aires.",
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
      {/* HERO */}
      <section className="pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-bold tracking-widest mb-6">
            QUIÉNES SOMOS
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6 text-white max-w-4xl">
            Somos Iván y Magalí.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#4f46e5]">
              Dos desarrolladores de Banfield.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            No somos una agencia. Cuando contratás a Avanzio, trabajás directamente
            con nosotros — desde la primera reunión hasta el soporte post-lanzamiento.
          </p>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="py-24 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#4f46e5] uppercase tracking-widest text-sm font-bold">NUESTRA HISTORIA</span>
              <h2 className="text-4xl font-bold text-white">
                Empezamos resolviendo<br />nuestros propios problemas
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Antes de tener clientes, teníamos TryHardware — nuestra propia tienda de hardware en Banfield. Cuando los sistemas genéricos no alcanzaban, los construimos nosotros.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Ahí entendimos algo que la mayoría de las &ldquo;agencias&rdquo; no entiende: un sistema tiene que vivir dentro del negocio, no ser una solución de escritorio que nadie termina usando.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Hoy acompañamos a PyMEs argentinas con esa misma mentalidad: primero entendemos el negocio, después escribimos código.
              </p>
            </div>
            {/* Timeline */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4f46e5]/20 border border-[#4f46e5] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#4f46e5] text-sm">store</span>
                  </div>
                  <div className="w-px flex-1 bg-[#334155] mt-2" />
                </div>
                <div className="pb-6">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">El comienzo</p>
                  <h3 className="font-bold text-white mb-1">TryHardware</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Construimos nuestra primera tienda y panel interno. Aprendimos que los sistemas tienen que funcionar todos los días, sin excusas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-amber-400 text-sm">handshake</span>
                  </div>
                  <div className="w-px flex-1 bg-[#334155] mt-2" />
                </div>
                <div className="pb-6">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">Primer cliente externo</p>
                  <h3 className="font-bold text-white mb-1">Santa Benedetta</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    El dueño de una fiambrería de barrio nos confió su tienda online. Lo tratamos como si fuera la nuestra.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-emerald-400 text-sm">rocket_launch</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">Hoy</p>
                  <h3 className="font-bold text-white mb-1">Avanzio</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Abiertos a nuevos proyectos. Creciendo junto a las PyMEs del país con tecnología que resuelve problemas concretos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL EQUIPO */}
      <section className="py-24 bg-[#1e293b]/20 border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#4f46e5] uppercase tracking-widest text-sm font-bold">EL EQUIPO</span>
            <h2 className="text-4xl font-bold text-white mt-3">Las personas detrás del código</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Iván */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-[#4f46e5]/20 border-2 border-[#4f46e5]/40 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[#4f46e5] text-4xl">person</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Iván</h3>
              <p className="text-[#4f46e5] text-sm font-semibold mb-4">Co-fundador · Backend &amp; Fullstack</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Estudiante avanzado de Sistemas. Foco en backend, integraciones y arquitectura. Constructor de TryHardware desde cero.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Node.js", "TypeScript", "PHP", "WordPress"].map((tag) => (
                  <span key={tag} className="bg-[#0f172a] border border-[#334155] rounded-full px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Magalí */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-amber-400 text-4xl">person</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Magalí</h3>
              <p className="text-amber-400 text-sm font-semibold mb-4">Co-fundadora · Frontend &amp; UX</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Estudiante avanzada de Sistemas. Foco en interfaces, experiencia de usuario y relación con el cliente. Cara visible de Avanzio.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Next.js", "Tailwind", "Figma"].map((tag) => (
                  <span key={tag} className="bg-[#0f172a] border border-[#334155] rounded-full px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#4f46e5] uppercase tracking-widest text-sm font-bold">NUESTROS VALORES</span>
            <h2 className="text-4xl font-bold text-white mt-3">Cómo pensamos el trabajo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
              <span className="material-symbols-outlined text-[#4f46e5] text-4xl mb-4 block">handshake</span>
              <h3 className="text-xl font-bold text-white mb-3">Cercanía real</h3>
              <p className="text-slate-400 leading-relaxed">
                No somos un ticket de soporte. Sos parte de nuestro trabajo y te tratamos como tal. Respuesta directa, sin intermediarios.
              </p>
            </div>
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
              <span className="material-symbols-outlined text-emerald-400 text-4xl mb-4 block">verified</span>
              <h3 className="text-xl font-bold text-white mb-3">Código que funciona</h3>
              <p className="text-slate-400 leading-relaxed">
                No entregamos demos bonitas. Entregamos sistemas que tu equipo puede usar desde el día uno, sin depender de nosotros para todo.
              </p>
            </div>
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
              <span className="material-symbols-outlined text-amber-400 text-4xl mb-4 block">trending_up</span>
              <h3 className="text-xl font-bold text-white mb-3">Foco en el negocio</h3>
              <p className="text-slate-400 leading-relaxed">
                Primero entendemos cómo ganás plata, después escribimos código. La tecnología es el medio, no el fin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STACK TECNOLÓGICO */}
      <section className="py-24 bg-[#1e293b]/20 border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#4f46e5] uppercase tracking-widest text-sm font-bold">TECNOLOGÍAS</span>
            <h2 className="text-3xl font-bold text-white mt-3">Nuestro stack</h2>
            <p className="text-slate-400 mt-2">Herramientas modernas, probadas en producción real.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stackItems.map((item) => (
              <div key={item.name} className="bg-[#1e293b] border border-[#334155] rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className={`${item.color} font-black text-sm`}>{item.abbr}</span>
                </div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-500 mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-24 bg-[#0f172a] border-t border-[#334155]"
        style={{ background: "radial-gradient(ellipse at center, rgba(79,70,229,0.15) 0%, #0f172a 70%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">¿Trabajamos juntos?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Somos un equipo chico, y eso es una ventaja: cuando trabajás con Avanzio, trabajás directamente con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20"
            >
              <span className="material-symbols-outlined">chat</span>
              Escribinos por WhatsApp
            </a>
            <Link
              href="/casos"
              className="inline-flex items-center justify-center gap-2 border border-[#334155] bg-[#1e293b] hover:bg-[#334155] text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              <span className="material-symbols-outlined">cases</span>
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
