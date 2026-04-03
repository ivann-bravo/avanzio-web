import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Santa Benedetta — Caso de Éxito | Avanzio",
  description:
    "Cómo transformamos el caos de pedidos por WhatsApp e Instagram en una tienda online con gestión de stock, combos armables y control de finanzas en tiempo real.",
};

const stack = [
  { name: "Next.js 15", color: "text-slate-100" },
  { name: "TypeScript", color: "text-blue-300" },
  { name: "Tailwind CSS", color: "text-sky-400" },
  { name: "Prisma ORM", color: "text-teal-400" },
  { name: "PostgreSQL", color: "text-blue-400" },
  { name: "NextAuth v5", color: "text-purple-300" },
  { name: "Cloudinary", color: "text-orange-400" },
  { name: "MercadoPago", color: "text-[#009EE3]" },
  { name: "Zustand", color: "text-amber-300" },
  { name: "Resend", color: "text-slate-200" },
];

const painPoints = [
  {
    icon: "chat_bubble",
    label: "Pedidos dispersos",
    desc: "Llegaban por Instagram DM, WhatsApp y hasta en persona. Sin un lugar centralizado, nada se coordinaba.",
  },
  {
    icon: "inventory_2",
    label: "Stock a ciegas",
    desc: "Vendían el mismo producto dos veces sin saberlo. No había registro de qué estaba reservado ni qué había llegado.",
  },
  {
    icon: "sell",
    label: "Precios desactualizados",
    desc: "Subían una historia con precio X. Si el precio subía al día siguiente, no podían cobrar más al cliente que ya había visto la historia.",
  },
  {
    icon: "groups",
    label: "Solo vendían a conocidos",
    desc: "A pesar de tener muy buenas reseñas, no lograban escalar. Sin presencia profesional, el boca a boca tenía techo.",
  },
];

const features = [
  {
    icon: "storefront",
    color: "text-amber-400",
    bg: "rgba(245,158,11,0.10)",
    title: "Tienda online propia",
    desc: "Catálogo completo con precios actualizados en tiempo real. Cuando el precio cambia en el panel, cambia en la tienda automáticamente.",
    delay: "0.05s",
  },
  {
    icon: "tune",
    color: "text-emerald-400",
    bg: "rgba(16,185,129,0.10)",
    title: "Combos personalizables",
    desc: "La clave del negocio: el cliente puede armar su propia caja eligiendo qué productos lleva, con límites definidos por Fernando y Marilina.",
    delay: "0.15s",
  },
  {
    icon: "inventory",
    color: "text-sky-400",
    bg: "rgba(14,165,233,0.10)",
    title: "Gestión de stock integrada",
    desc: "Cada venta descuenta stock automáticamente. El sistema avisa cuando un producto está agotado y bloquea la venta antes de comprometerse.",
    delay: "0.25s",
  },
  {
    icon: "analytics",
    color: "text-violet-400",
    bg: "rgba(124,58,237,0.10)",
    title: "Dashboard financiero",
    desc: "Pedidos del mes, ganancias, ticket promedio, productos más vendidos, gastos vs ingresos. Todo en una pantalla, sin planillas.",
    delay: "0.35s",
  },
  {
    icon: "people",
    color: "text-rose-400",
    bg: "rgba(244,63,94,0.10)",
    title: "Gestión de clientes",
    desc: "Historial de pedidos por cliente, datos de contacto centralizados, sin buscar entre chats de WhatsApp.",
    delay: "0.45s",
  },
  {
    icon: "payments",
    color: "text-[#009EE3]",
    bg: "rgba(0,158,227,0.10)",
    title: "MercadoPago integrado",
    desc: "Cobros online con todos los métodos del ecosistema argentino: tarjeta, cuotas, transferencia bancaria.",
    delay: "0.55s",
  },
];

const results = [
  {
    label: "MVP lanzado en",
    value: "1 mes",
    sub: "desde el primer commit",
  },
  {
    label: "Errores de stock",
    value: "0",
    sub: "el sistema bloquea doble venta",
  },
  {
    label: "Herramientas reemplazadas",
    value: "4+",
    sub: "Excel, DMs, notas, llamadas",
  },
  {
    label: "Dolor principal",
    value: "Resuelto",
    sub: "todo centralizado en un sistema",
  },
];

export default function SantaBenedettaPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-20" style={{ background: "#080612" }}>
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
            <span className="text-slate-400 text-sm">Santa Benedetta</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="hero-animate hero-animate-1 inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase mb-6">
                Tienda + Sistema de Gestión
              </span>
              <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Santa Benedetta
              </h1>
              <p className="hero-animate hero-animate-3 text-xl text-slate-300 leading-relaxed mb-8">
                Vinos, quesos y sabores artesanales de primera calidad — con el caos de
                Instagram DMs y Excel. Lo transformamos en una tienda profesional con
                gestión de stock, combos armables y control de finanzas.
              </p>
              <div className="hero-animate hero-animate-4 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#2d1a0a] px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Quiero algo similar
                </Link>
                <Link
                  href="/casos"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-500/50 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Ver más casos
                </Link>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div
              className="hero-animate hero-animate-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ background: "#1A1232" }}
            >
              {/* Browser bar */}
              <div
                className="border-b border-white/10 px-4 py-3 flex items-center gap-3"
                style={{ background: "#080612" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div
                  className="flex-1 rounded-md px-3 py-1 text-xs text-slate-400 text-center"
                  style={{ background: "#0F0A20" }}
                >
                  santabenedetta.com.ar
                </div>
              </div>

              {/* Nav */}
              <div className="border-b border-amber-900/20 px-4 py-2.5 flex items-center justify-between bg-[#120B1E]">
                <span className="font-semibold text-amber-300 text-sm tracking-wide">Santa Benedetta</span>
                <div className="flex items-center gap-3 text-xs text-amber-200/50">
                  <span>Tienda</span>
                  <span>Combos</span>
                  <span>Nosotros</span>
                  <span className="material-symbols-outlined text-base leading-none text-amber-400">shopping_bag</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-white/5 border-b border-white/5">
                {[
                  { label: "Pedidos este mes", value: "24" },
                  { label: "Productos activos", value: "38" },
                  { label: "Ticket promedio", value: "$18.400" },
                ].map((stat) => (
                  <div key={stat.label} className="px-4 py-3 text-center">
                    <p className="text-amber-400 font-bold text-base">{stat.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Product grid */}
              <div className="p-4 grid grid-cols-2 gap-3">
                {[
                  { icon: "wine_bar", name: "Malbec Reserva 750ml", price: "$9.200", stock: "12 u.", tag: "Vino" },
                  { icon: "lunch_dining", name: "Combo Premium Selección", price: "$24.500", stock: "Armable", tag: "Combo" },
                  { icon: "bakery_dining", name: "Salame Artesanal 200g", price: "$4.800", stock: "8 u.", tag: "Fiambre" },
                  { icon: "cake", name: "Caja Degustación Custom", price: "Desde $15.000", stock: "Ilimitado", tag: "Combo" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl border border-white/[0.06] p-3"
                    style={{ background: "#0F0A20" }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-amber-600/70 text-sm">{p.icon}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-amber-400/70 bg-amber-500/10 rounded-full px-2 py-0.5">{p.tag}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-200 leading-tight mb-1">{p.name}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-amber-400">{p.price}</p>
                      <p className="text-[10px] text-slate-500">{p.stock}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL CLIENTE */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
                El cliente
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Sabores artesanales que no encontrás en el super
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-5">
                Santa Benedetta es un emprendimiento especializado en vinos, quesos,
                dulces, salamines y sabores artesanales seleccionados. Su propuesta no
                es vender lo que hay en cualquier góndola — es armar cajas y combos
                premium con productos de verdad.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                Fernando y Marilina arrancaron hace poco, con dos personas y mucha
                energía. Los elogios no faltaban — la calidad del producto hablaba sola.
                Pero la organización era otro tema.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Querían crecer. Querían vender más allá de conocidos. Querían que el
                negocio se vea tan bien como lo que ofrecen. Para eso necesitaban un
                sistema que los acompañe, no uno más que los frene.
              </p>
            </div>

            {/* Pain points */}
            <div className="space-y-4 reveal" style={{ transitionDelay: "0.15s" }}>
              {painPoints.map((pain) => (
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
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16 reveal">
            <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
              La solución
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Un sistema que hace todo lo que hacían a mano
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Construimos una tienda online que también funciona como sistema de gestión
              interno — stock, pedidos, clientes y finanzas, todo en un solo lugar.
              Con un diferenciador clave: los combos personalizables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-[#1A1232] rounded-2xl p-7 border border-white/[0.08] reveal card-hover cursor-default"
                style={{ transitionDelay: item.delay }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: item.bg }}
                >
                  <span className={`material-symbols-outlined ${item.color} text-2xl`}>{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETALLE: COMBOS */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
                La pieza clave
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Combos que el cliente arma a su gusto
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-5">
                Santa Benedetta no vende productos genéricos — vende experiencias.
                Por eso el sistema permite dos tipos de combos: los que Fernando y
                Marilina arman con su selección, y los que el cliente personaliza
                eligiendo qué productos llevar.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Esto no estaba disponible en ninguna plataforma estándar. Era imposible
                de implementar por Instagram o por WhatsApp. Necesitaban algo hecho a medida
                — y eso es exactamente lo que construimos.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "El cliente elige la cantidad de cada producto dentro del combo",
                  "El stock se valida en tiempo real al armar la caja",
                  "Fernando y Marilina configuran qué productos van disponibles",
                  "El precio se calcula automáticamente según la selección",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-400 text-base mt-0.5 flex-shrink-0">check_circle</span>
                    <p className="text-slate-300 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Combo builder mockup */}
            <div
              className="reveal rounded-2xl border border-white/[0.08] overflow-hidden"
              style={{ background: "#1A1232", transitionDelay: "0.15s" }}
            >
              <div className="px-5 py-4 border-b border-white/[0.06]">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Armar mi caja</p>
                <h4 className="text-white font-bold">Caja Degustación — Custom</h4>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { name: "Malbec Reserva 750ml", cat: "Vino", qty: 1, max: 3 },
                  { name: "Queso de Cabra 200g", cat: "Queso", qty: 2, max: 4 },
                  { name: "Salame Artesanal 200g", cat: "Fiambre", qty: 1, max: 3 },
                  { name: "Dulce de Leche Artesanal", cat: "Dulce", qty: 0, max: 2 },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05]"
                    style={{ background: "#0F0A20" }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.cat}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 text-xs font-bold">−</button>
                      <span className="text-white font-bold text-sm w-4 text-center">{item.qty}</span>
                      <button className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">+</button>
                    </div>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Total de la caja</p>
                    <p className="text-xl font-black text-amber-400">$24.800</p>
                  </div>
                  <button className="bg-amber-500 text-[#2d1a0a] font-bold text-sm px-5 py-2.5 rounded-xl">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              De la confusión al control
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal" style={{ transitionDelay: "0.1s" }}>
            {results.map((r) => (
              <div
                key={r.label}
                className="bg-[#1A1232] rounded-2xl p-6 text-center border border-white/[0.08]"
              >
                <p className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">{r.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{r.label}</p>
                <p className="text-xs text-slate-500">{r.sub}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl p-6 border border-amber-500/10 reveal"
            style={{ background: "rgba(245,158,11,0.05)", transitionDelay: "0.2s" }}
          >
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-amber-400 text-2xl flex-shrink-0 mt-0.5">info</span>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-white">Proyecto en etapa de mejoras.</strong> El MVP se lanzó en un mes
                y está en uso activo. A medida que Fernando y Marilina incorporen su catálogo
                real y empiecen a operar, vamos a sumar métricas concretas de ventas y crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <blockquote
            className="reveal border-l-4 border-amber-500 pl-8 rounded-r-2xl p-8"
            style={{ background: "#1A1232" }}
          >
            <p className="text-xl text-slate-200 italic leading-relaxed mb-6">
              &ldquo;Siempre supimos que el producto era bueno — el problema era que no teníamos cómo
              mostrarlo bien. Ahora tenemos algo que representa al negocio como se merece. Ya no
              perdemos ventas por falta de organización.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-black text-sm">FM</span>
              </div>
              <div>
                <cite className="text-white font-semibold not-italic block">Fernando & Marilina</cite>
                <span className="text-slate-500 text-sm">Co-fundadores, Santa Benedetta</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* STACK */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
              Tecnologías
            </span>
            <h2 className="text-3xl font-bold text-white">Stack utilizado</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center reveal" style={{ transitionDelay: "0.1s" }}>
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
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/casos/tryhardware"
              className="group reveal bg-[#1A1232] border border-white/[0.08] hover:border-[#7C3AED]/30 rounded-2xl p-8 transition-colors"
            >
              <span className="text-[#A78BFA] text-xs font-bold uppercase tracking-wider block mb-3">Ver otro caso</span>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                ← TryHardware
              </h3>
              <p className="text-slate-400 text-sm">Tienda online + panel de gestión para negocio de hardware informático.</p>
            </Link>

            <Link
              href="/contacto"
              className="reveal bg-[#7C3AED] hover:bg-[#6D28D9] rounded-2xl p-8 transition-colors"
              style={{ transitionDelay: "0.1s" }}
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
