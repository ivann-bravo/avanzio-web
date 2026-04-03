import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Troncone Motors — Caso de Éxito | Avanzio",
  description:
    "Cómo construimos la web de Troncone Motors — concesionaria familiar en Burzaco con catálogo de vehículos online, financiamiento y gestión integral.",
};

const stack = [
  { name: "Next.js", color: "text-slate-100" },
  { name: "TypeScript", color: "text-blue-300" },
  { name: "Tailwind CSS", color: "text-sky-400" },
  { name: "React", color: "text-cyan-300" },
  { name: "Google Maps API", color: "text-green-400" },
  { name: "Vercel", color: "text-slate-200" },
];

const painPoints = [
  {
    icon: "search_off",
    label: "Sin presencia digital",
    desc: "No tenían web. Las unidades disponibles solo se podían ver en el local o preguntando por Instagram.",
  },
  {
    icon: "inventory_2",
    label: "Catálogo invisible",
    desc: "El stock de autos no existía online. Clientes potenciales no llegaban porque no había nada que mostrar.",
  },
  {
    icon: "forum",
    label: "Consultas solo por WhatsApp",
    desc: "Todo el proceso de consulta dependía de responder mensajes uno por uno, sin info previa del cliente.",
  },
  {
    icon: "payments",
    label: "Financiamiento sin comunicar",
    desc: "Ofrecían hasta 100% de financiamiento con BNA+ pero nadie lo sabía porque no había dónde comunicarlo.",
  },
];

const features = [
  {
    icon: "directions_car",
    color: "text-red-400",
    bg: "rgba(239,68,68,0.10)",
    title: "Catálogo de vehículos",
    desc: "Listado de unidades disponibles con fotos, especificaciones, año, kilómetros y precio. Actualizable sin necesidad de programadores.",
    delay: "0.05s",
  },
  {
    icon: "account_balance",
    color: "text-emerald-400",
    bg: "rgba(16,185,129,0.10)",
    title: "Financiamiento BNA+",
    desc: "Comunicación clara del financiamiento hasta el 100% disponible. Una de las principales razones por las que llegan clientes nuevos.",
    delay: "0.15s",
  },
  {
    icon: "swap_horiz",
    color: "text-amber-400",
    bg: "rgba(245,158,11,0.10)",
    title: "Servicios completos",
    desc: "Permuta, transferencias, gestoría propia, seguros, detailing y asesoramiento. Todo comunicado de forma clara para el cliente.",
    delay: "0.25s",
  },
  {
    icon: "contact_phone",
    color: "text-sky-400",
    bg: "rgba(14,165,233,0.10)",
    title: "Formulario de contacto",
    desc: "El cliente llega con su consulta estructurada. Menos mensajes genéricos, más conversaciones con intención real de compra.",
    delay: "0.35s",
  },
  {
    icon: "map",
    color: "text-violet-400",
    bg: "rgba(124,58,237,0.10)",
    title: "Mapa y ubicación",
    desc: "Google Maps integrado. El cliente sabe exactamente dónde están antes de llamar o ir hasta el local en Burzaco.",
    delay: "0.45s",
  },
  {
    icon: "article",
    color: "text-slate-300",
    bg: "rgba(255,255,255,0.06)",
    title: "Blog integrado",
    desc: "Sección de novedades para publicar contenido, promociones y novedades del mercado automotor.",
    delay: "0.55s",
  },
];

const results = [
  {
    label: "Presencia online",
    value: "✓",
    sub: "de cero a web profesional",
  },
  {
    label: "Servicios comunicados",
    value: "8",
    sub: "visibles desde el primer click",
  },
  {
    label: "Canales de contacto",
    value: "3",
    sub: "web, WhatsApp y Maps",
  },
  {
    label: "Financiamiento visible",
    value: "100%",
    sub: "BNA+ comunicado en la home",
  },
];

export default function TronconeMotorsPage() {
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
            <span className="text-slate-400 text-sm">Troncone Motors</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="hero-animate hero-animate-1 inline-block bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase mb-6">
                Sitio Web Corporativo
              </span>
              <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Troncone Motors
              </h1>
              <p className="hero-animate hero-animate-3 text-xl text-slate-300 leading-relaxed mb-8">
                Concesionaria familiar en Burzaco sin presencia online.
                Construimos la web completa — catálogo de vehículos, financiamiento,
                servicios y múltiples canales de contacto.
              </p>
              <div className="hero-animate hero-animate-4 flex flex-wrap gap-3">
                <a
                  href="https://www.tronconemotors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-base leading-none">open_in_new</span>
                  Ver sitio
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-red-500/50 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Quiero algo similar
                </Link>
              </div>
            </div>

            {/* Website mockup */}
            <div
              className="hero-animate hero-animate-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ background: "#1a1a1a" }}
            >
              {/* Browser bar */}
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

              {/* Nav */}
              <div className="border-b border-white/10 px-4 py-2.5 flex items-center justify-between bg-[#1a1a1a]">
                <span className="font-bold text-white text-sm tracking-wide">TRONCONE <span className="text-red-500">MOTORS</span></span>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>Autos</span>
                  <span>Servicios</span>
                  <span>Nosotros</span>
                  <span>Contacto</span>
                </div>
              </div>

              {/* Hero section */}
              <div
                className="px-5 py-6 text-center border-b border-white/[0.06]"
                style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d1a1a 100%)" }}
              >
                <p className="text-red-400 text-xs uppercase tracking-widest mb-2 font-semibold">Concesionaria en Burzaco</p>
                <h3 className="text-white font-black text-lg mb-1">Tu próximo auto, a tu alcance</h3>
                <p className="text-slate-400 text-xs mb-4">Financiamiento hasta el 100% con BNA+</p>
                <div className="flex gap-2 justify-center">
                  <button className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg">Ver autos</button>
                  <button className="border border-white/20 text-slate-300 text-xs font-semibold px-4 py-1.5 rounded-lg">Contactar</button>
                </div>
              </div>

              {/* Car listing */}
              <div className="p-4 grid grid-cols-2 gap-3 bg-[#111]">
                {[
                  { name: "Toyota Hilux 2021", km: "45.000 km", price: "Consultar" },
                  { name: "Chevrolet Onix 2022", km: "28.000 km", price: "Consultar" },
                  { name: "Ford Ranger 2020", km: "62.000 km", price: "Consultar" },
                  { name: "VW Polo 2023", km: "12.000 km", price: "Consultar" },
                ].map((car) => (
                  <div
                    key={car.name}
                    className="rounded-xl border border-white/[0.06] p-3"
                    style={{ background: "#1a1a1a" }}
                  >
                    <div className="w-full h-10 rounded-lg bg-white/5 flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-slate-600 text-lg">directions_car</span>
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight">{car.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{car.km}</p>
                    <p className="text-xs font-bold text-red-400 mt-1">{car.price}</p>
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
              <span className="inline-block text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
                El cliente
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Una concesionaria familiar con años de trayectoria y cero presencia online
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-5">
                Troncone Motors es una concesionaria familiar ubicada en Burzaco,
                Buenos Aires. Venden autos nuevos y usados, ofrecen financiamiento
                a través de BNA+, gestoría propia, seguros y una cartera de servicios
                completa para el comprador.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                Con años en el rubro y una operación sólida, el negocio funcionaba
                —pero todo el potencial de crecimiento quedaba limitado porque no
                había manera de que un cliente los encontrara online, viera las
                unidades disponibles, o entendiera qué servicios ofrecían antes de
                llamar.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Necesitaban una presencia digital que estuviera a la altura de su
                trayectoria y que convirtiera a los visitantes en consultas reales.
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
            <span className="inline-block text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
              La solución
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Una web que trabaja como vendedor las 24 horas
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Construimos el sitio completo desde cero — diseño, desarrollo y
              configuración. Desde el catálogo de vehículos hasta la comunicación
              del financiamiento y los servicios.
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

      {/* RESULTADOS */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              De invisible a presente
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal" style={{ transitionDelay: "0.1s" }}>
            {results.map((r) => (
              <div
                key={r.label}
                className="bg-[#1A1232] rounded-2xl p-6 text-center border border-white/[0.08]"
              >
                <p className="text-2xl sm:text-3xl font-black text-red-400 mb-1">{r.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{r.label}</p>
                <p className="text-xs text-slate-500">{r.sub}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl p-6 border border-red-500/10 reveal"
            style={{ background: "rgba(239,68,68,0.04)", transitionDelay: "0.2s" }}
          >
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-red-400 text-2xl flex-shrink-0 mt-0.5">build_circle</span>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-white">En camino a una segunda versión.</strong> El sitio está funcionando y el negocio tiene
                presencia digital. Tenemos planificado un rediseño para elevar aún más la
                experiencia y agregar funcionalidades nuevas al catálogo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <blockquote
            className="reveal border-l-4 border-red-500 pl-8 rounded-r-2xl p-8"
            style={{ background: "#1A1232" }}
          >
            <p className="text-xl text-slate-200 italic leading-relaxed mb-6">
              &ldquo;Pasamos de no existir en internet a tener una web donde los clientes
              pueden ver todo lo que hacemos antes de llamarnos. Eso cambió cómo llegan
              las consultas.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 font-black text-sm">TM</span>
              </div>
              <div>
                <cite className="text-white font-semibold not-italic block">Troncone Motors</cite>
                <span className="text-slate-500 text-sm">Burzaco, Buenos Aires</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* STACK */}
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
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
      <section className="py-20 md:py-24 border-t border-white/10" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/casos/santa-benedetta"
              className="group reveal bg-[#1A1232] border border-white/[0.08] hover:border-amber-500/30 rounded-2xl p-8 transition-colors"
            >
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-3">Ver otro caso</span>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                ← Santa Benedetta
              </h3>
              <p className="text-slate-400 text-sm">Tienda online + sistema de gestión para venta de productos artesanales premium.</p>
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
