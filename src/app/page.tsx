'use client'
import Link from "next/link";
import { TerminalHero } from "@/components/terminal-hero";
import { TechTicker } from "@/components/tech-ticker";
import { TransformationSection } from "@/components/transformation-section";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 50%, #1A0A3A 0%, #080612 70%)",
        }}
      >
        {/* Ambient glow orb */}
        <div
          className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left column: text */}
            <div>
              {/* Badge */}
              <div className="hero-animate hero-animate-1 mb-8">
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-1.5"
                  style={{
                    color: "#A78BFA",
                    border: "1px solid rgba(124,58,237,0.35)",
                    background: "rgba(124,58,237,0.1)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  Software a medida para PyMEs argentinas
                </span>
              </div>

              {/* H1 */}
              <h1 className="hero-animate hero-animate-2 text-[clamp(2.6rem,4.8vw,3.9rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
                <span className="text-white">Tu socio tecnológico,</span>
                <br />
                <span className="text-[#8B5CF6]">no un proveedor más.</span>
              </h1>

              {/* Subheadline */}
              <p className="hero-animate hero-animate-3 text-[1.19rem] text-slate-400 mb-10 leading-relaxed">
                Diseñamos software que hace crecer tu negocio.<br />
                Sin vueltas, con resultados reales.
              </p>

              {/* CTAs */}
              <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all cursor-pointer whitespace-nowrap"
                  style={{ boxShadow: "0 8px 32px rgba(124,58,237,0.38)" }}
                >
                  Hablemos de tu proyecto
                </Link>
                <Link
                  href="/casos"
                  className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white px-8 py-4 rounded-xl font-medium text-base transition-all cursor-pointer whitespace-nowrap"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Ver casos de éxito →
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

      {/* ===== TRANSFORMACIÓN ===== */}
      <TransformationSection />

      {/* ===== SERVICIOS — 3 cards iguales ===== */}
      <section className="py-28 bg-[#080612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-sm font-bold text-[#8B5CF6] uppercase tracking-widest mb-4">Servicios</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Lo que construimos para vos
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Soluciones concretas para los problemas reales de tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Sistema a medida */}
            <div
              className="rounded-2xl flex flex-col overflow-hidden reveal card-hover cursor-pointer"
              style={{ background: "#1A1232", border: "1px solid rgba(255,255,255,0.08)", transitionDelay: '0.05s' }}
            >
              {/* Mockup preview */}
              <div
                className="relative overflow-hidden"
                style={{ background: "#0A0A18", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", margin: "16px 16px 0", height: "180px" }}
              >
                <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: "#13132A", borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="p-3 space-y-2">
                  {[
                    { color: "#7C3AED", w: "60%" },
                    { color: "#8B5CF6", w: "40%" },
                    { color: "#4B4B6A", w: "75%" },
                    { color: "#4B4B6A", w: "50%" },
                    { color: "#7C3AED", w: "35%" },
                  ].map((l, i) => (
                    <div key={i} className="h-2.5 rounded-full opacity-70" style={{ width: l.w, background: l.color }} />
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
                  <span className="material-symbols-outlined text-[#A78BFA] text-2xl">code</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sistema a medida</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-grow mb-6">
                  Desarrollamos el software que tu negocio necesita. Desde cero, pensado para vos, sin plantillas genéricas.
                </p>
                <Link href="/servicios" className="text-[#8B5CF6] font-semibold text-sm hover:text-[#A78BFA] transition-colors">
                  Saber más →
                </Link>
              </div>
            </div>

            {/* Card 2: Tienda Online — featured */}
            <div
              className="rounded-2xl flex flex-col overflow-hidden reveal card-hover cursor-pointer"
              style={{
                background: "#1A1232",
                border: "1.5px solid rgba(139,92,246,0.4)",
                boxShadow: "0 0 40px rgba(124,58,237,0.2)",
                transitionDelay: '0.15s',
              }}
            >
              {/* Mockup preview */}
              <div
                className="relative overflow-hidden"
                style={{ background: "#0D0820", border: "1px solid rgba(139,92,246,0.25)", borderRadius: "8px", margin: "16px 16px 0", height: "180px" }}
              >
                <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: "#160D2E", borderColor: "rgba(139,92,246,0.15)" }}>
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="p-3 grid grid-cols-3 gap-2">
                  {[
                    { price: "$2.499", bg: "#7C3AED" },
                    { price: "$1.890", bg: "#8B5CF6" },
                    { price: "$3.200", bg: "#6D28D9" },
                  ].map((p, i) => (
                    <div key={i} className="rounded-lg overflow-hidden" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.15)" }}>
                      <div className="h-14 rounded-t" style={{ background: `${p.bg}40` }} />
                      <div className="p-1 text-center">
                        <span className="text-[10px] font-bold text-[#A78BFA]">{p.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
                    <span className="material-symbols-outlined text-[#A78BFA] text-2xl">storefront</span>
                  </div>
                  <span className="text-xs font-bold rounded-full px-3 py-1" style={{ color: "#A78BFA", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
                    Más pedido
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tienda online</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-grow mb-6">
                  Tu negocio vende 24/7. E-commerce con catálogo, carrito, pagos y gestión de pedidos integrados.
                </p>
                <Link href="/servicios" className="text-[#8B5CF6] font-semibold text-sm hover:text-[#A78BFA] transition-colors">
                  Saber más →
                </Link>
              </div>
            </div>

            {/* Card 3: Panel de gestión */}
            <div
              className="rounded-2xl flex flex-col overflow-hidden reveal card-hover cursor-pointer"
              style={{ background: "#1A1232", border: "1px solid rgba(255,255,255,0.08)", transitionDelay: '0.25s' }}
            >
              {/* Mockup preview — bar chart */}
              <div
                className="relative overflow-hidden"
                style={{ background: "#0A0A18", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", margin: "16px 16px 0", height: "180px" }}
              >
                <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: "#13132A", borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-end gap-2 px-4 pt-3 pb-2 h-24">
                  {[30, 50, 40, 65, 55, 80, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 6 ? "linear-gradient(to top, #7C3AED, #A78BFA)" : "rgba(124,58,237,0.35)",
                        boxShadow: i === 6 ? "0 0 8px rgba(167,139,250,0.5)" : "none",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between px-4 gap-2">
                  {[
                    { label: "$48k", color: "#A78BFA" },
                    { label: "312", color: "#06B6D4" },
                    { label: "99%", color: "#10B981" },
                  ].map((s) => (
                    <div key={s.label} className="flex-1 rounded-lg p-1.5 text-center" style={{ background: "rgba(124,58,237,0.1)" }}>
                      <span className="text-xs font-bold" style={{ color: s.color }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
                  <span className="material-symbols-outlined text-[#A78BFA] text-2xl">dashboard_customize</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Panel de gestión</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-grow mb-6">
                  Control total de tu negocio en un solo lugar. Stock, ventas, clientes y reportes en tiempo real.
                </p>
                <Link href="/servicios" className="text-[#8B5CF6] font-semibold text-sm hover:text-[#A78BFA] transition-colors">
                  Saber más →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ROW ===== */}
      <section
        style={{
          background: "linear-gradient(90deg, #1E0D45 0%, #2D1B69 50%, #1E0D45 100%)",
          borderTop: "1px solid rgba(124,58,237,0.3)",
          borderBottom: "1px solid rgba(124,58,237,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-3 divide-x divide-white/10">
          <div className="text-center px-2 sm:px-4 py-2">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1">15+</p>
            <p className="text-[11px] sm:text-sm text-slate-400">Proyectos entregados</p>
          </div>
          <div className="text-center px-2 sm:px-4 py-2">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#A78BFA] mb-1">100%</p>
            <p className="text-[11px] sm:text-sm text-slate-400">Clientes satisfechos</p>
          </div>
          <div className="text-center px-2 sm:px-4 py-2">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1">24hs</p>
            <p className="text-[11px] sm:text-sm text-slate-400">Tiempo de respuesta</p>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section
        className="py-28"
        style={{
          background: "radial-gradient(ellipse 100% 120% at 50% 50%, #2D1B69 0%, #080612 70%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.1] mb-6">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
            Contanos qué necesitás y en 24hs te respondemos con una propuesta concreta.
            Sin rodeos, sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-10 py-4 rounded-xl font-bold text-base transition-all shadow-lg cursor-pointer"
              style={{ boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Hablemos por WhatsApp
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/5 text-white px-10 py-4 rounded-xl font-bold text-base transition-all cursor-pointer"
            >
              Ver todos los servicios
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
