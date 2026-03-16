import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TryHardware — Caso de Éxito | Avanzio",
  description:
    "Cómo construimos la tienda online y el panel de gestión de TryHardware — hardware informático en Buenos Aires. Un sistema que usamos nosotros mismos todos los días.",
};

const stack = [
  { name: "WooCommerce", color: "text-[#9B59B6]" },
  { name: "PHP", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "TypeScript", color: "text-blue-300" },
  { name: "MySQL", color: "text-orange-400" },
  { name: "WordPress", color: "text-blue-500" },
  { name: "Vercel", color: "text-slate-100" },
];

const results = [
  { label: "Pedidos procesados", value: "—", sub: "por completar" },
  { label: "Uptime en producción", value: "99.9%", sub: "sin caídas" },
  { label: "Años en operación", value: "—", sub: "por completar" },
  { label: "Satisfacción del equipo", value: "100%", sub: "lo usamos a diario" },
];

export default function TryHardwarePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 hero-animate hero-animate-1">
            <Link
              href="/casos"
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-base leading-none">arrow_back</span>
              Casos de éxito
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-400 text-sm">TryHardware</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="hero-animate hero-animate-1 inline-block bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase mb-6">
                Tienda Online + Panel Interno
              </span>
              <h1 className="hero-animate hero-animate-2 text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                TryHardware
              </h1>
              <p className="hero-animate hero-animate-3 text-xl text-slate-300 leading-relaxed mb-8">
                Nuestra propia tienda de hardware informático en Buenos Aires. El primer sistema
                que construimos — y el que usamos todos los días.
              </p>
              <div className="hero-animate hero-animate-4 flex flex-wrap gap-3">
                <a
                  href="https://tryhardware.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-base leading-none">open_in_new</span>
                  Ver sitio
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[#7C3AED]/50 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Quiero algo similar
                </Link>
              </div>
            </div>

            {/* Browser mockup */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl hero-animate hero-animate-4"
              style={{ background: "#1A1232" }}
            >
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
                  tryhardware.com.ar
                </div>
              </div>
              <div
                className="border-b border-white/10 px-4 py-3 flex items-center justify-between"
                style={{ background: "#080612" }}
              >
                <span className="font-black text-[#F97316] text-lg leading-none">
                  TH <span className="text-white font-normal text-sm">Hardware</span>
                </span>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>Tienda</span>
                  <span>Marcas</span>
                  <span>Ofertas</span>
                  <div className="relative">
                    <span className="material-symbols-outlined text-lg leading-none">shopping_cart</span>
                    <span className="absolute -top-1 -right-1 bg-[#F97316] text-[#080612] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4">
                {[
                  { icon: "memory", name: "RAM DDR5 32GB", price: "$45.000" },
                  { icon: "developer_board", name: "RTX 4070 Ti", price: "$890.000" },
                  { icon: "storage", name: "SSD NVMe 1TB", price: "$62.000" },
                ].map((product) => (
                  <div
                    key={product.name}
                    className="rounded-xl border border-white/10 p-3"
                    style={{ background: "#080612" }}
                  >
                    <div className="bg-white/5 rounded-lg h-16 flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-slate-400">{product.icon}</span>
                    </div>
                    <p className="text-xs font-semibold text-white truncate">{product.name}</p>
                    <p className="text-sm font-bold text-green-400 mt-1">{product.price}</p>
                    <button className="mt-2 w-full bg-[#F97316] text-[#080612] text-xs font-bold py-1 rounded">Ver</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
                El problema
              </span>
              <h2 className="text-4xl font-bold text-white leading-tight mb-6">
                Vender hardware con herramientas que no estaban a la altura
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                {/* TODO: Completar con la historia real */}
                [Placeholder] Antes de construir el sistema, el negocio dependía de herramientas
                genéricas que no se adaptaban al volumen ni a la dinámica de precios del mercado
                de hardware argentino.
              </p>
              <p className="text-slate-400 leading-relaxed">
                {/* TODO: Completar con detalles reales */}
                [Placeholder] Los precios cambiaban con el dólar, el stock era manual, y la
                gestión de proveedores se hacía en planillas que nadie mantenía actualizado.
              </p>
            </div>

            {/* Pain points */}
            <div className="space-y-4 reveal" style={{ transitionDelay: '0.15s' }}>
              {[
                { icon: "table_chart", label: "Gestión de precios manual", desc: "Planillas Excel que se desactualizaban con cada cambio de cotización." },
                { icon: "inventory", label: "Stock sin control", desc: "Sin sistema de alertas, los errores de inventario eran frecuentes." },
                { icon: "chat", label: "Pedidos por WhatsApp", desc: "Sin sistema de pedidos, todo dependía de mensajes que se perdían." },
                { icon: "trending_down", label: "Sin métricas reales", desc: "Imposible medir ventas, clientes o rendimiento por categoría." },
              ].map((pain) => (
                <div
                  key={pain.label}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-red-500/10"
                  style={{ background: "rgba(239,68,68,0.04)" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-red-400 text-xl">{pain.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{pain.label}</p>
                    <p className="text-slate-400 text-sm">{pain.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LA SOLUCIÓN */}
      <section className="py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
              La solución
            </span>
            <h2 className="text-4xl font-bold text-white">
              Un sistema pensado para el negocio, no al revés
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              {/* TODO: Completar con descripción real */}
              [Placeholder] Diseñamos e implementamos un ecosistema completo: tienda online con
              WooCommerce personalizado, plugin de gestión de precios y un panel interno.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "storefront",
                color: "text-[#A78BFA]",
                bg: "rgba(124,58,237,0.10)",
                title: "Tienda WooCommerce",
                desc: "[Placeholder] E-commerce completo con catálogo de hardware, filtros por categoría, carrito y checkout optimizado.",
                delay: '0.05s',
              },
              {
                icon: "tune",
                color: "text-amber-400",
                bg: "rgba(245,158,11,0.10)",
                title: "TH Slider Builder",
                desc: "[Placeholder] Plugin custom para gestión de banners y sliders con control total desde el panel, sin código.",
                delay: '0.15s',
              },
              {
                icon: "dashboard",
                color: "text-emerald-400",
                bg: "rgba(16,185,129,0.10)",
                title: "Panel de gestión",
                desc: "[Placeholder] Dashboard interno para control de precios, stock, pedidos y métricas de negocio en tiempo real.",
                delay: '0.25s',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1A1232] rounded-2xl p-8 border border-white/[0.08] reveal card-hover cursor-default"
                style={{ transitionDelay: item.delay }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: item.bg }}
                >
                  <span className={`material-symbols-outlined ${item.color} text-3xl`}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
              Resultados
            </span>
            <h2 className="text-4xl font-bold text-white">Números reales</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal" style={{ transitionDelay: '0.1s' }}>
            {results.map((r) => (
              <div
                key={r.label}
                className="bg-[#1A1232] rounded-2xl p-6 text-center border border-white/[0.08]"
              >
                <p className="text-3xl font-black text-[#A78BFA] mb-1">{r.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{r.label}</p>
                <p className="text-xs text-slate-500">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <blockquote
            className="reveal border-l-4 border-[#7C3AED] pl-8 rounded-r-2xl p-8"
            style={{ background: "#1A1232" }}
          >
            <p className="text-xl text-slate-200 italic leading-relaxed mb-6">
              {/* TODO: Reemplazar con quote real de Iván */}
              &ldquo;No solo creamos sistemas para otros, los usamos todos los días. TryHardware
              fue nuestra primera prueba real de que podíamos construir algo que funciona en
              producción, sin excusas.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center flex-shrink-0">
                <span className="text-[#8B5CF6] font-black text-sm">IV</span>
              </div>
              <div>
                <cite className="text-white font-semibold not-italic block">Iván</cite>
                <span className="text-slate-500 text-sm">Co-fundador, Avanzio</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* STACK */}
      <section className="py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
              Tecnologías
            </span>
            <h2 className="text-3xl font-bold text-white">Stack utilizado</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center reveal" style={{ transitionDelay: '0.1s' }}>
            {stack.map((tech) => (
              <span
                key={tech.name}
                className={`rounded-full px-4 py-2 text-sm font-semibold border border-white/10 ${tech.color}`}
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/casos/santa-benedetta"
              className="group reveal bg-[#1A1232] border border-white/[0.08] hover:border-amber-500/30 rounded-2xl p-8 transition-colors"
            >
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-3">Siguiente caso</span>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Santa Benedetta →
              </h3>
              <p className="text-slate-400 text-sm">Tienda online para fiambrería artesanal con MercadoPago y envío local.</p>
            </Link>

            <Link
              href="/contacto"
              className="reveal bg-[#7C3AED] hover:bg-[#6D28D9] rounded-2xl p-8 transition-colors"
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="text-[#A78BFA] text-xs font-bold uppercase tracking-wider block mb-3">¿Te interesa?</span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Hablemos de tu proyecto →
              </h3>
              <p className="text-white/70 text-sm">Primera reunión sin cargo. Te respondemos en menos de 24 horas.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
