import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Santa Benedetta — Caso de Éxito | Avanzio",
  description:
    "Cómo construimos la tienda online de Santa Benedetta — fiambrería artesanal en Buenos Aires. E-commerce con MercadoPago, catálogo completo y envío local.",
};

const stack = [
  { name: "WordPress", color: "text-blue-400" },
  { name: "WooCommerce", color: "text-[#9B59B6]" },
  { name: "MercadoPago", color: "text-[#009EE3]" },
  { name: "PHP", color: "text-blue-300" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "CSS3", color: "text-blue-500" },
];

const results = [
  { label: "Tiempo hasta el lanzamiento", value: "—", sub: "por completar" },
  { label: "Productos en catálogo", value: "—", sub: "por completar" },
  { label: "Integraciones de pago", value: "1", sub: "MercadoPago activo" },
  { label: "Satisfacción del cliente", value: "100%", sub: "primer cliente externo" },
];

export default function SantaBenedettaPage() {
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
            <span className="text-slate-400 text-sm">Santa Benedetta</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="hero-animate hero-animate-1 inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase mb-6">
                E-Commerce
              </span>
              <h1 className="hero-animate hero-animate-2 text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Santa Benedetta
              </h1>
              <p className="hero-animate hero-animate-3 text-xl text-slate-300 leading-relaxed mb-8">
                El primer cliente externo de Avanzio. Una fiambrería artesanal de barrio que
                necesitaba vender online con la identidad de su negocio.
              </p>
              <div className="hero-animate hero-animate-4 flex flex-wrap gap-3">
                <a
                  href="https://santabenedetta.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#2d1a0a] px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-base leading-none">open_in_new</span>
                  Ver sitio
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-500/50 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
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
                  santabenedetta.com.ar
                </div>
              </div>
              <div className="bg-[#2d1a0a] border-b border-amber-900/30 px-4 py-3 flex items-center justify-between">
                <span className="font-serif text-amber-300 text-sm tracking-wide">Santa Benedetta</span>
                <div className="flex items-center gap-3 text-xs text-amber-200/60">
                  <span>Catálogo</span>
                  <span>Envíos</span>
                  <span className="material-symbols-outlined text-lg leading-none">shopping_cart</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#3d2008] to-[#5c3010] px-4 py-6 text-center">
                <p className="text-amber-100 text-xs uppercase tracking-widest mb-1">Fiambres &amp; Quesos Artesanales</p>
                <h3 className="text-amber-300 font-bold text-base mb-3">
                  Productos de calidad,<br />directos a tu mesa
                </h3>
                <button className="bg-amber-400 text-[#2d1a0a] text-xs font-bold px-4 py-1.5 rounded-full">Ver catálogo</button>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 bg-[#1a1008]">
                {[
                  { icon: "restaurant", name: "Jamón Serrano", price: "$4.800/kg" },
                  { icon: "lunch_dining", name: "Queso Reggianito", price: "$3.200/kg" },
                ].map((product) => (
                  <div key={product.name} className="bg-[#2d1a0a] rounded-xl border border-amber-900/20 p-3">
                    <div className="bg-amber-900/20 rounded-lg h-14 flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-amber-600/60">{product.icon}</span>
                    </div>
                    <p className="text-xs font-semibold text-amber-100">{product.name}</p>
                    <p className="text-sm font-bold text-amber-400 mt-1">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL CLIENTE */}
      <section className="py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
                El cliente
              </span>
              <h2 className="text-4xl font-bold text-white leading-tight mb-6">
                Una fiambrería de barrio con ganas de crecer
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                {/* TODO: Completar con historia real del cliente */}
                [Placeholder] Santa Benedetta es una fiambrería artesanal ubicada en Buenos
                Aires, conocida por sus productos de calidad y su trato personalizado.
              </p>
              <p className="text-slate-400 leading-relaxed">
                {/* TODO: Completar con detalles reales */}
                [Placeholder] El dueño quería expandir sus ventas más allá del local físico
                pero no tenía presencia online. Llegó a Avanzio buscando una solución que
                reflejara la identidad cálida de su negocio.
              </p>
            </div>

            {/* Pain points */}
            <div className="space-y-4 reveal" style={{ transitionDelay: '0.15s' }}>
              {[
                { icon: "storefront", label: "Solo venta presencial", desc: "Sin canal online, perdían ventas fuera del horario del local." },
                { icon: "payments", label: "Sin cobro digital", desc: "Solo efectivo. MercadoPago era una oportunidad sin explotar." },
                { icon: "photo_library", label: "Catálogo en papel", desc: "Lista de productos impresa, imposible de mantener actualizada." },
                { icon: "delivery_dining", label: "Envíos sin sistema", desc: "Los pedidos a domicilio se gestionaban por llamado telefónico." },
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
            <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
              La solución
            </span>
            <h2 className="text-4xl font-bold text-white">
              Una tienda que habla el idioma del negocio
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              {/* TODO: Completar con descripción real */}
              [Placeholder] Diseñamos e implementamos una tienda WooCommerce con la identidad
              visual de Santa Benedetta — cálida, artesanal, de confianza.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "palette",
                color: "text-amber-400",
                bg: "rgba(245,158,11,0.10)",
                title: "Identidad visual propia",
                desc: "[Placeholder] Diseño personalizado que refleja la calidez y artesanalidad del negocio. Nada de templates genéricos.",
                delay: '0.05s',
              },
              {
                icon: "payments",
                color: "text-[#009EE3]",
                bg: "rgba(0,158,227,0.10)",
                title: "MercadoPago integrado",
                desc: "[Placeholder] Cobros online con todos los métodos del ecosistema argentino: tarjeta, cuotas, transferencia.",
                delay: '0.15s',
              },
              {
                icon: "local_shipping",
                color: "text-emerald-400",
                bg: "rgba(16,185,129,0.10)",
                title: "Envío local",
                desc: "[Placeholder] Sistema de zonas de envío y retiro en local. El cliente elige cómo quiere recibir su pedido.",
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
            <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
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
                <p className="text-3xl font-black text-amber-400 mb-1">{r.value}</p>
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
            className="reveal border-l-4 border-amber-500 pl-8 rounded-r-2xl p-8"
            style={{ background: "#1A1232" }}
          >
            <p className="text-xl text-slate-200 italic leading-relaxed mb-6">
              {/* TODO: Reemplazar con quote real del cliente o de Magalí */}
              &ldquo;Trabajamos codo a codo con el dueño para que la tienda refleje la identidad
              de su negocio. No es un template — es un sistema hecho a su medida.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-black text-sm">MA</span>
              </div>
              <div>
                <cite className="text-white font-semibold not-italic block">Magalí</cite>
                <span className="text-slate-500 text-sm">Co-fundadora, Avanzio</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* STACK */}
      <section className="py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-amber-400 uppercase tracking-widest text-sm font-bold mb-4">
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
