import type { Metadata } from "next";
import Link from "next/link";
import TryHardwareMockup from "./tryhardware-mockup";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Proyectos reales con clientes reales. TryHardware y Santa Benedetta — sistemas que funcionan todos los días.",
};

export default function CasosPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-24 pb-20 text-center"
        style={{ background: "#080612" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="hero-animate hero-animate-1 inline-block py-1 px-4 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold tracking-widest mb-6 uppercase">
            Nuestro Trabajo
          </span>
          <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-white max-w-4xl mx-auto">
            No vendemos demos.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#7C3AED]">
              Entregamos sistemas que funcionan.
            </span>
          </h1>
          <p className="hero-animate hero-animate-3 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Cada proyecto acá tiene un cliente real, un problema concreto y una
            solución que trabaja todos los días.
          </p>

          {/* Stats glassmorphism row */}
          <div
            className="grid grid-cols-3 divide-x divide-white/10 mx-auto mt-12 max-w-xl rounded-2xl border border-white/10 reveal"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="text-center px-4 py-6">
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">3</p>
              <p className="text-xs sm:text-sm text-slate-400">proyectos entregados</p>
            </div>
            <div className="text-center px-4 py-6">
              <p className="text-3xl sm:text-4xl font-black text-[#A78BFA] mb-1">100%</p>
              <p className="text-xs sm:text-sm text-slate-400">satisfacción de clientes</p>
            </div>
            <div className="text-center px-4 py-6">
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">0</p>
              <p className="text-xs sm:text-sm text-slate-400">caídas en producción</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 1: TRYHARDWARE */}
      <section
        className="border-t border-white/10 py-24"
        style={{ background: "#0F0A20" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content left */}
            <div className="space-y-6 reveal">
              <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase">
                Tienda Online + Panel Interno
              </span>
              <h2 className="text-4xl font-black text-white">TryHardware</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Dos sistemas para el mismo negocio: una tienda WooCommerce
                rediseñada mobile-first con pagos reales (MercadoPago + Payway)
                y envíos integrados, y un panel interno que automatiza precios
                de 13 proveedores, sincroniza stock cada 15 minutos y libera
                más de 5 horas diarias con IA.
              </p>
              <blockquote
                className="border-l-4 border-[#7C3AED] pl-5 rounded-r-xl p-5"
                style={{ background: "#1A1232" }}
              >
                <p className="text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;La tienda la mejoré por los clientes. El panel lo hice
                  por mí — y fue la mejor decisión que tomé para el negocio.&rdquo;
                </p>
                <cite className="text-slate-500 text-sm not-italic">
                  — Iván, dueño TryHardware
                </cite>
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {[
                  "WooCommerce",
                  "Next.js",
                  "TypeScript",
                  "MercadoPago",
                  "Gemini AI",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs text-slate-300 font-medium border border-white/10"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/casos/tryhardware"
                className="inline-flex items-center gap-2 text-[#A78BFA] hover:text-white font-semibold text-sm transition-colors"
              >
                Ver caso completo
                <span className="material-symbols-outlined text-base leading-none">arrow_forward</span>
              </Link>
            </div>

            {/* Browser mockup right — imágenes reales con scroll */}
            <TryHardwareMockup />
          </div>
        </div>
      </section>

      {/* CASO 2: SANTA BENEDETTA */}
      <section
        className="border-t border-white/10 py-24"
        style={{ background: "#080612" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Browser mockup left */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
              style={{ background: "#1A1232" }}
            >
              {/* Chrome bar */}
              <div
                className="border-b border-white/10 px-4 py-3 flex items-center gap-3"
                style={{ background: "#080612" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div
                  className="flex-1 rounded-md px-3 py-1 text-xs text-slate-400 text-center"
                  style={{ background: "#1A1232" }}
                >
                  santabenedetta.com.ar
                </div>
              </div>

              {/* Warm header */}
              <div className="bg-[#2d1a0a] border-b border-amber-900/30 px-4 py-3 flex items-center justify-between">
                <span className="font-serif text-amber-300 text-sm tracking-wide">
                  Santa Benedetta
                </span>
                <div className="flex items-center gap-3 text-xs text-amber-200/60">
                  <span>Catálogo</span>
                  <span>Envíos</span>
                  <span className="material-symbols-outlined text-lg leading-none">
                    shopping_cart
                  </span>
                </div>
              </div>

              {/* Amber gradient banner */}
              <div className="bg-gradient-to-r from-[#3d2008] to-[#5c3010] px-4 py-6 text-center">
                <p className="text-amber-100 text-xs uppercase tracking-widest mb-1">
                  Fiambres &amp; Quesos Artesanales
                </p>
                <h3 className="text-amber-300 font-bold text-base mb-3">
                  Productos de calidad,
                  <br />
                  directos a tu mesa
                </h3>
                <button className="bg-amber-400 text-[#2d1a0a] text-xs font-bold px-4 py-1.5 rounded-full">
                  Ver catálogo
                </button>
              </div>

              {/* 2-col product grid */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-[#1a1008]">
                {[
                  {
                    icon: "restaurant",
                    name: "Jamón Serrano",
                    price: "$4.800/kg",
                  },
                  {
                    icon: "lunch_dining",
                    name: "Queso Reggianito",
                    price: "$3.200/kg",
                  },
                ].map((product) => (
                  <div
                    key={product.name}
                    className="bg-[#2d1a0a] rounded-xl border border-amber-900/20 p-3"
                  >
                    <div className="bg-amber-900/20 rounded-lg h-14 flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-amber-600/60">
                        {product.icon}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-amber-100">
                      {product.name}
                    </p>
                    <p className="text-sm font-bold text-amber-400 mt-1">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content right */}
            <div className="space-y-6 order-1 lg:order-2 reveal">
              <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase">
                Tienda + Sistema de Gestión
              </span>
              <h2 className="text-4xl font-black text-white">
                Santa Benedetta
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Vinos, quesos y sabores artesanales premium. Pasaron de gestionar
                todo por Instagram DM y WhatsApp a tener una tienda online con
                stock en tiempo real, combos personalizables y dashboard financiero.
              </p>
              <blockquote
                className="border-l-4 border-[#F59E0B] pl-5 rounded-r-xl p-5"
                style={{ background: "#1A1232" }}
              >
                <p className="text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;Siempre supimos que el producto era bueno — el problema
                  era que no teníamos cómo mostrarlo bien.&rdquo;
                </p>
                <cite className="text-slate-500 text-sm not-italic">
                  — Fernando & Marilina, Santa Benedetta
                </cite>
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {["Next.js 15", "TypeScript", "Prisma", "MercadoPago", "Cloudinary"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs text-slate-300 font-medium border border-white/10"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/casos/santa-benedetta"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-200 font-semibold text-sm transition-colors"
              >
                Ver caso completo
                <span className="material-symbols-outlined text-base leading-none">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 3: TRONCONE MOTORS */}
      <section
        className="border-t border-white/10 py-24"
        style={{ background: "#0F0A20" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content left */}
            <div className="space-y-6 reveal">
              <span className="inline-block bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase">
                Sitio Web Corporativo
              </span>
              <h2 className="text-4xl font-black text-white">Troncone Motors</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Concesionaria familiar en Burzaco sin presencia digital. Construimos
                la web completa — catálogo de vehículos, financiamiento BNA+ hasta el
                100%, gestoría propia y múltiples canales de contacto. De no existir
                en internet a tener una presencia profesional.
              </p>
              <blockquote
                className="border-l-4 border-red-500 pl-5 rounded-r-xl p-5"
                style={{ background: "#1A1232" }}
              >
                <p className="text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;Pasamos de no existir en internet a tener una web donde los
                  clientes pueden ver todo lo que hacemos antes de llamarnos.&rdquo;
                </p>
                <cite className="text-slate-500 text-sm not-italic">
                  — Troncone Motors, Burzaco
                </cite>
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Vercel"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs text-slate-300 font-medium border border-white/10"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/casos/troncone-motors"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-200 font-semibold text-sm transition-colors"
              >
                Ver caso completo
                <span className="material-symbols-outlined text-base leading-none">arrow_forward</span>
              </Link>
            </div>

            {/* Browser mockup right */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl order-first lg:order-last reveal"
              style={{ background: "#1a1a1a", transitionDelay: "0.1s" }}
            >
              <div
                className="border-b border-white/10 px-4 py-3 flex items-center gap-3"
                style={{ background: "#0d0d0d" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div
                  className="flex-1 rounded-md px-3 py-1 text-xs text-slate-400 text-center"
                  style={{ background: "#1a1a1a" }}
                >
                  tronconemotors.com
                </div>
              </div>
              <div className="border-b border-white/10 px-4 py-2.5 flex items-center justify-between bg-[#1a1a1a]">
                <span className="font-bold text-white text-sm">TRONCONE <span className="text-red-500">MOTORS</span></span>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>Autos</span>
                  <span>Servicios</span>
                  <span>Contacto</span>
                </div>
              </div>
              <div
                className="px-5 py-5 text-center border-b border-white/[0.06]"
                style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d1a1a 100%)" }}
              >
                <p className="text-red-400 text-xs uppercase tracking-widest mb-1 font-semibold">Concesionaria en Burzaco</p>
                <h3 className="text-white font-black text-base mb-1">Tu próximo auto, a tu alcance</h3>
                <p className="text-slate-400 text-xs mb-3">Financiamiento hasta el 100% con BNA+</p>
                <div className="flex gap-2 justify-center">
                  <button className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg">Ver autos</button>
                  <button className="border border-white/20 text-slate-300 text-xs font-semibold px-4 py-1.5 rounded-lg">Contactar</button>
                </div>
              </div>
              <div className="p-4 grid grid-cols-4 gap-2 bg-[#111]">
                {["directions_car", "account_balance", "swap_horiz", "handshake"].map((icon, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.06] p-3 text-center" style={{ background: "#1a1a1a" }}>
                    <span className="material-symbols-outlined text-slate-500 text-xl block mb-1">{icon}</span>
                    <p className="text-[9px] text-slate-600">Servicio</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: PRÓXIMO CLIENTE */}
      <section
        className="border-t border-white/10 py-24"
        style={{ background: "#080612" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center">
          <div
            className="max-w-2xl w-full border-2 border-dashed border-[#7C3AED]/40 rounded-2xl p-12 text-center reveal"
            style={{ background: "#080612" }}
          >
            <span className="material-symbols-outlined text-[#7C3AED]/40 block mb-6 leading-none select-none" style={{ fontSize: "6rem" }}>
              add_circle
            </span>
            <h2 className="text-3xl font-black text-white mb-4">
              ¿Tu empresa puede ser la próxima?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Estamos abiertos a nuevos proyectos. Si tenés un problema
              operativo que resolver, hablemos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-[#7C3AED]/25"
            >
              Contanos tu proyecto
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
