import Link from "next/link";
import { TerminalHero } from "@/components/terminal-hero";
import { TechTicker } from "@/components/tech-ticker";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left column: text */}
            <div>
              {/* Badge */}
              <div className="hero-animate hero-animate-1 mb-7">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Disponibles para nuevos proyectos
                </span>
              </div>

              {/* H1 */}
              <h1 className="hero-animate hero-animate-2 text-[clamp(2.4rem,4.5vw,4.5rem)] font-black tracking-tight leading-[0.95] text-white mb-6">
                Tu negocio no debería<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-indigo-400 to-emerald-400">
                  depender de un Excel.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="hero-animate hero-animate-3 text-lg text-slate-400 mb-10 leading-relaxed">
                Somos <span className="text-white font-semibold">Iván y Magalí</span>, dos desarrolladores de Banfield que construyen sistemas a medida para PyMEs argentinas. Cuando nos escribís,{" "}
                <span className="text-slate-300">respondemos nosotros.</span>
              </p>

              {/* CTAs */}
              <div className="hero-animate hero-animate-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-green-500/20 cursor-pointer whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-xl">chat</span>
                  Escribinos por WhatsApp
                </a>
                <Link
                  href="/casos"
                  className="inline-flex items-center justify-center gap-2 border border-[#334155] hover:border-[#4f46e5]/40 hover:bg-[#4f46e5]/5 text-white px-8 py-4 rounded-xl font-bold text-base transition-all cursor-pointer whitespace-nowrap"
                >
                  Ver lo que construimos
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right column: terminal */}
            <div className="hero-animate hero-animate-5">
              <TerminalHero />
            </div>

          </div>
        </div>
      </section>

      {/* ===== TECH TICKER ===== */}
      <TechTicker />

      {/* ===== SERVICIOS — Bento Grid ===== */}
      <section className="py-28 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm font-bold text-[#4f46e5] uppercase tracking-widest mb-3">Qué hacemos</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white max-w-2xl">
              Tres formas de transformar tu negocio
            </h2>
          </div>

          {/* Bento grid: 1 featured + 2 small */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">

            {/* FEATURED: Sistema a medida */}
            <div className="relative bg-[#1e293b] border border-[#334155] rounded-2xl p-8 sm:p-10 flex flex-col group hover:border-[#4f46e5]/50 transition-colors overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4f46e5]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-[#4f46e5]/15 border border-[#4f46e5]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4f46e5] text-3xl">code</span>
                  </div>
                  <span className="text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 border border-[#4f46e5]/20 rounded-full px-3 py-1">
                    MÁS SOLICITADO
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4">Sistema a medida</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
                  El sistema que tu empresa necesita, construido desde cero para vos. Analizamos cada proceso, automatizamos lo que te saca tiempo y te entregamos algo que realmente usás.
                </p>

                {/* Feature list */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Análisis de procesos incluido",
                    "Entregas incrementales",
                    "Capacitación al equipo",
                    "Soporte post-lanzamiento",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Code snippet */}
                <div className="bg-[#0f172a] rounded-xl border border-[#334155] p-4 font-mono text-xs text-slate-400 mb-8">
                  <span className="text-emerald-400">const</span>{" "}
                  <span className="text-blue-400">reporte</span>{" "}
                  <span className="text-white">= await db.ventas</span>
                  <br />
                  <span className="text-white ml-4">.groupBy</span>
                  <span className="text-amber-400">("producto")</span>
                  <br />
                  <span className="text-white ml-4">.sum</span>
                  <span className="text-amber-400">("monto")</span>
                  <br />
                  <span className="text-slate-600">// Tu dashboard, en tiempo real</span>
                </div>

                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 text-[#4f46e5] font-bold hover:gap-3 transition-all cursor-pointer"
                >
                  Saber más
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right column: 2 smaller cards */}
            <div className="flex flex-col gap-5">
              {/* Tienda Online */}
              <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-7 flex flex-col group hover:border-amber-500/30 transition-colors flex-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-amber-400 text-2xl">storefront</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Tienda Online</h3>
                  <p className="text-slate-400 leading-relaxed mb-5 flex-grow text-sm">
                    E-commerce con MercadoPago, ARCA y logística local. Todo lo que necesita un negocio argentino para vender online desde el día uno.
                  </p>
                  <Link
                    href="/servicios"
                    className="inline-flex items-center gap-1 text-amber-400 font-bold text-sm hover:gap-2 transition-all cursor-pointer"
                  >
                    Ver detalles
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Panel de Gestión */}
              <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-7 flex flex-col group hover:border-emerald-500/30 transition-colors flex-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-emerald-400 text-2xl">dashboard_customize</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Panel de Gestión</h3>
                  <p className="text-slate-400 leading-relaxed mb-5 flex-grow text-sm">
                    Dashboards que te muestran exactamente qué está pasando en tu negocio: ventas, stock, pedidos. En tiempo real, sin complicaciones.
                  </p>
                  <Link
                    href="/servicios"
                    className="inline-flex items-center gap-1 text-emerald-400 font-bold text-sm hover:gap-2 transition-all cursor-pointer"
                  >
                    Ver detalles
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASOS ===== */}
      <section className="py-28 border-t border-[#334155] bg-[#080e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header with integrated stats */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <p className="text-sm font-bold text-[#4f46e5] uppercase tracking-widest mb-3">Proyectos reales</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Dos sistemas en producción<br className="hidden sm:block" /> hoy mismo.
              </h2>
              <p className="text-slate-400 text-lg">No demos, no mocks. Sistemas que usan negocios reales, todos los días.</p>
            </div>
            {/* Inline stats */}
            <div className="flex gap-8 shrink-0">
              <div>
                <p className="text-3xl font-black text-white">2</p>
                <p className="text-xs text-slate-500 mt-1">sistemas activos</p>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-400">100%</p>
                <p className="text-xs text-slate-500 mt-1">satisfacción</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">0</p>
                <p className="text-xs text-slate-500 mt-1">caídas en producción</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* TryHardware */}
            <div className="flex flex-col lg:flex-row rounded-2xl bg-[#1e293b] border border-[#334155] overflow-hidden group hover:border-[#4f46e5]/30 transition-colors">
              <div className="lg:w-2/5 h-64 lg:h-auto bg-[#0f172a] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-full max-w-xs bg-[#1e293b] rounded-xl border border-[#334155] shadow-2xl overflow-hidden">
                    <div className="bg-[#0f172a] px-3 py-2 flex items-center gap-1.5 border-b border-[#334155]">
                      <span className="w-2 h-2 rounded-full bg-red-500 block" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500 block" />
                      <span className="w-2 h-2 rounded-full bg-green-500 block" />
                      <span className="text-xs text-slate-500 ml-2 font-mono">tryhardware.com.ar</span>
                    </div>
                    <div className="p-3 grid grid-cols-2 gap-2">
                      {["RAM DDR5 32GB", "RTX 4070 Ti", "SSD NVMe 1TB", "CPU i9-14900K"].map((p) => (
                        <div key={p} className="bg-[#0f172a] rounded-lg p-2 border border-[#334155]">
                          <div className="h-8 bg-[#334155] rounded mb-2" />
                          <p className="text-[10px] text-slate-400 truncate">{p}</p>
                          <p className="text-[10px] font-bold text-[#4f46e5]">Ver precio</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tienda online + panel interno</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">TryHardware</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Tienda de hardware informático en Banfield con WooCommerce personalizado + panel de gestión interno + plugin TH Slider Builder. Un sistema que usamos nosotros mismos todos los días.
                </p>
                <blockquote className="border-l-2 border-[#4f46e5] pl-4 mb-6">
                  <p className="text-slate-300 italic text-sm">"No solo creamos sistemas para otros, los usamos todos los días. Sabemos lo que es depender de tu propio código."</p>
                  <footer className="text-slate-500 text-xs mt-2">— Iván, co-fundador Avanzio</footer>
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  {["WooCommerce", "PHP", "JavaScript", "Node.js", "TypeScript"].map((t) => (
                    <span key={t} className="rounded-full bg-[#334155] px-3 py-1 text-xs font-medium text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Santa Benedetta */}
            <div className="flex flex-col lg:flex-row-reverse rounded-2xl bg-[#1e293b] border border-[#334155] overflow-hidden group hover:border-amber-500/20 transition-colors">
              <div className="lg:w-2/5 h-64 lg:h-auto bg-[#0f172a] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-full max-w-xs bg-[#1e293b] rounded-xl border border-[#334155] shadow-2xl overflow-hidden">
                    <div className="bg-[#0f172a] px-3 py-2 flex items-center gap-1.5 border-b border-[#334155]">
                      <span className="w-2 h-2 rounded-full bg-red-500 block" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500 block" />
                      <span className="w-2 h-2 rounded-full bg-green-500 block" />
                      <span className="text-xs text-slate-500 ml-2 font-mono">santabenedetta.com.ar</span>
                    </div>
                    <div className="p-3">
                      <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/20 rounded-lg p-3 mb-2 border border-amber-900/30">
                        <p className="text-[10px] text-amber-300 font-bold mb-0.5">Fiambres & Quesos Artesanales</p>
                        <p className="text-xs text-white font-semibold">Productos de calidad</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["Jamón Serrano\n$4.800/kg", "Queso Reggianito\n$3.200/kg"].map((p) => (
                          <div key={p} className="bg-[#0f172a] rounded-lg p-2 border border-[#334155]">
                            <div className="h-6 bg-amber-900/30 rounded mb-1" />
                            <p className="text-[10px] text-slate-400 whitespace-pre-line">{p}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">E-commerce</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">Santa Benedetta</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Tienda online completa para fiambrería artesanal. Catálogo, envío local y pasarela de pago argentina. El primer cliente externo de Avanzio.
                </p>
                <blockquote className="border-l-2 border-amber-500 pl-4 mb-6">
                  <p className="text-slate-300 italic text-sm">"Trabajamos codo a codo con el dueño para que la tienda refleje la identidad de su negocio."</p>
                  <footer className="text-slate-500 text-xs mt-2">— Magalí, co-fundadora Avanzio</footer>
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  {["E-commerce", "MercadoPago", "WordPress", "WooCommerce"].map((t) => (
                    <span key={t} className="rounded-full bg-[#334155] px-3 py-1 text-xs font-medium text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 border border-[#334155] hover:border-[#4f46e5]/40 hover:bg-[#4f46e5]/5 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer"
            >
              Ver los proyectos completos
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL STATEMENT — "Somos 2 personas" ===== */}
      <section className="py-28 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
            {/* Main statement */}
            <div>
              <p className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-8">Por qué elegirnos</p>
              <blockquote>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-0">
                  "Somos dos personas.
                </p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-emerald-400">No una agencia.</span>
                </p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1]">
                  Sin intermediarios."
                </p>
              </blockquote>
              <p className="text-slate-400 text-lg mt-8 max-w-xl leading-relaxed">
                Cuando nos escribís, hablás con quien va a desarrollar tu sistema. Sin cuentas de soporte, sin project managers que no saben nada. Trato directo, respuesta real.
              </p>
            </div>

            {/* Facts column */}
            <div className="flex flex-col gap-0 lg:min-w-[280px]">
              {[
                {
                  icon: "handshake",
                  title: "Trato directo",
                  desc: "Hablás con el dev",
                  color: "text-[#4f46e5]",
                },
                {
                  icon: "verified",
                  title: "Usamos lo que construimos",
                  desc: "TryHardware corre en nuestro código",
                  color: "text-emerald-400",
                },
                {
                  icon: "support_agent",
                  title: "No desaparecemos",
                  desc: "Soporte real post-lanzamiento",
                  color: "text-amber-400",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`py-6 ${i > 0 ? "border-t border-[#334155]" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`material-symbols-outlined ${item.color} mt-0.5`}>{item.icon}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-28 bg-[#060d1b] border-t border-[#334155]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-6">Empezamos cuando quieras</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4">
            La primera reunión es gratis.
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-emerald-400">
              El código que escribimos, no.
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Contanos qué necesitás y te respondemos antes de las 24 horas hábiles. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-lg shadow-green-500/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              Escribinos por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#334155] hover:border-[#4f46e5]/60 hover:bg-[#4f46e5]/5 text-white px-10 py-5 rounded-xl font-black text-lg transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">mail</span>
              Ir a Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
