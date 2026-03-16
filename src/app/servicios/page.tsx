import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Sistemas a medida, tiendas online y paneles de gestión para PyMEs argentinas. MercadoPago, ARCA, soporte real.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16 text-center" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="hero-animate hero-animate-1 inline-block py-1 px-4 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/30 text-xs font-bold tracking-widest mb-6 uppercase">
            Servicios
          </span>
          <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl mx-auto leading-tight mb-6">
            Cada peso que invertís en tecnología tiene que trabajar.
          </h1>
          <p className="hero-animate hero-animate-3 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Sin plantillas, sin humo. Primero entendemos tu negocio, después escribimos el código.
          </p>
        </div>
      </section>

      {/* SISTEMA A MEDIDA */}
      <section
        className="py-24 border-t border-white/10"
        style={{ background: "#0F0A20" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content left */}
            <div className="space-y-8 reveal">
              <span
                className="material-symbols-outlined p-4 rounded-2xl inline-block"
                style={{ fontSize: "3rem", color: "#A78BFA", background: "rgba(124,58,237,0.10)" }}
              >
                code
              </span>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Sistema a medida</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Desarrollamos software 100% personalizado para tus procesos. Olvidate del Excel y
                  automatizá las operaciones de tu empresa con tecnología que trabaja para vos.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Análisis profundo", desc: "Estudiamos cada proceso antes de escribir código." },
                    { title: "Desarrollo ágil", desc: "Entregas incrementales con feedback constante." },
                    { title: "Soporte real", desc: "No desaparecemos al lanzar el sistema." },
                    { title: "Capacitación", desc: "Entrenamos a tu equipo para usar el sistema." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: "#7C3AED" }}
                      />
                      <span>
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="text-slate-400"> — {item.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mockup right */}
            <div
              className="rounded-2xl border overflow-hidden shadow-2xl reveal"
              style={{ background: "#080612", borderColor: "rgba(255,255,255,0.08)", transitionDelay: '0.15s' }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
                <span className="w-3 h-3 rounded-full bg-green-500 block" />
                <span className="ml-2 text-sm text-slate-400">Panel de Control</span>
              </div>
              <div className="p-5">
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div
                    className="rounded-xl p-3 border"
                    style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.25)" }}
                  >
                    <p className="text-xs text-slate-400 mb-1">Pedidos</p>
                    <p className="text-xl font-black" style={{ color: "#A78BFA" }}>247</p>
                  </div>
                  <div
                    className="rounded-xl p-3 border"
                    style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.25)" }}
                  >
                    <p className="text-xs text-slate-400 mb-1">Ventas</p>
                    <p className="text-xl font-black text-amber-400">$1.24M</p>
                  </div>
                  <div
                    className="rounded-xl p-3 border"
                    style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.25)" }}
                  >
                    <p className="text-xs text-slate-400 mb-1">Clientes</p>
                    <p className="text-xl font-black text-emerald-400">1.089</p>
                  </div>
                </div>

                {/* Chart */}
                <div
                  className="rounded-xl border p-3 flex items-end gap-1.5"
                  style={{
                    height: "7rem",
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {[30, 50, 38, 62, 45, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 6
                            ? "linear-gradient(to top, #7C3AED, #A78BFA)"
                            : "rgba(255,255,255,0.10)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIENDA ONLINE */}
      <section
        className="py-24 border-t border-white/10"
        style={{ background: "#080612" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mockup left */}
            <div
              className="rounded-2xl border overflow-hidden shadow-2xl order-2 lg:order-1 reveal"
              style={{ background: "#1A1232", borderColor: "rgba(255,255,255,0.08)", transitionDelay: '0.15s' }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
                <span className="w-3 h-3 rounded-full bg-green-500 block" />
                <span
                  className="flex-1 text-center text-xs text-slate-400 rounded px-3 py-1 mx-2"
                  style={{ background: "#080612" }}
                >
                  tutienda.com.ar
                </span>
              </div>
              {/* Store header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ background: "#080612", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="font-bold text-white text-sm">Mi Tienda</span>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>Inicio</span>
                  <span>Catálogo</span>
                  <div className="relative">
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                      shopping_cart
                    </span>
                    <span
                      className="absolute -top-1 -right-1 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                      style={{ background: "#7C3AED" }}
                    >
                      2
                    </span>
                  </div>
                </div>
              </div>
              {/* Product grid */}
              <div className="grid grid-cols-2 gap-3 p-4">
                {[
                  { nombre: "Producto Premium", precio: "$12.500" },
                  { nombre: "Artículo Especial", precio: "$8.900" },
                  { nombre: "Oferta del Día", precio: "$3.200" },
                  { nombre: "Pack Completo", precio: "$24.000" },
                ].map((p) => (
                  <div
                    key={p.nombre}
                    className="rounded-xl border p-3"
                    style={{ background: "#080612", borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="rounded-lg h-16 flex items-center justify-center mb-2"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <span className="material-symbols-outlined text-slate-400">inventory_2</span>
                    </div>
                    <p className="text-xs font-semibold text-white">{p.nombre}</p>
                    <p className="text-sm font-bold text-amber-400 mt-1">{p.precio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content right */}
            <div className="space-y-8 order-1 lg:order-2 reveal">
              <span
                className="material-symbols-outlined p-4 rounded-2xl inline-block"
                style={{ fontSize: "3rem", color: "#FBBF24", background: "rgba(245,158,11,0.10)" }}
              >
                storefront
              </span>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Tienda Online</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  E-commerce robusto con las integraciones que necesita un negocio argentino.
                  MercadoPago, ARCA, logística local — todo listo desde el día uno.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "MercadoPago", desc: "Cobros seguros al instante." },
                    { title: "Facturación ARCA", desc: "Automática y sin errores." },
                    { title: "Catálogo", desc: "Sin límite de productos ni categorías." },
                    { title: "Envíos", desc: "Logística local integrada." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: "#7C3AED" }}
                      />
                      <span>
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="text-slate-400"> — {item.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PANEL DE GESTIÓN */}
      <section
        className="py-24 border-t border-white/10"
        style={{ background: "#0F0A20" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content left */}
            <div className="space-y-8 reveal">
              <span
                className="material-symbols-outlined p-4 rounded-2xl inline-block"
                style={{ fontSize: "3rem", color: "#34D399", background: "rgba(16,185,129,0.10)" }}
              >
                dashboard_customize
              </span>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Panel de Gestión</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Tomá decisiones con datos reales. Un dashboard que centraliza ventas, inventario y
                  métricas para que tengas el control total de tu negocio en tiempo real.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Métricas en vivo", desc: "KPIs actualizados al instante." },
                    { title: "Gestión de stock", desc: "Alertas automáticas de inventario bajo." },
                    { title: "Reportes", desc: "Exportá a Excel o PDF con un clic." },
                    { title: "Usuarios", desc: "Control de permisos por rol." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: "#7C3AED" }}
                      />
                      <span>
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="text-slate-400"> — {item.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dashboard mockup right */}
            <div
              className="rounded-2xl border overflow-hidden shadow-2xl reveal"
              style={{ background: "#1A1232", borderColor: "rgba(255,255,255,0.08)", transitionDelay: '0.15s' }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
                <span className="w-3 h-3 rounded-full bg-green-500 block" />
                <span className="ml-2 text-sm text-slate-400">Dashboard Principal</span>
              </div>
              <div className="p-5">
                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div
                    className="rounded-xl p-3 border"
                    style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.25)" }}
                  >
                    <p className="text-xs text-slate-400 mb-1">Ventas</p>
                    <p className="text-lg font-black" style={{ color: "#A78BFA" }}>$892k</p>
                  </div>
                  <div
                    className="rounded-xl p-3 border"
                    style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.25)" }}
                  >
                    <p className="text-xs text-slate-400 mb-1">Stock</p>
                    <p className="text-lg font-black text-amber-400">1247</p>
                  </div>
                  <div
                    className="rounded-xl p-3 border"
                    style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.25)" }}
                  >
                    <p className="text-xs text-slate-400 mb-1">Clientes</p>
                    <p className="text-lg font-black text-emerald-400">3891</p>
                  </div>
                </div>

                {/* Data table */}
                <div
                  className="rounded-xl border overflow-hidden"
                  style={{ background: "#080612", borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="grid grid-cols-3 px-3 py-2 border-b text-xs text-slate-500 font-semibold uppercase"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <span>Fecha</span>
                    <span>Monto</span>
                    <span>Estado</span>
                  </div>
                  {[
                    { f: "13/03", m: "$12.500", e: "Pagado", ec: "text-emerald-400" },
                    { f: "13/03", m: "$8.900", e: "Pendiente", ec: "text-amber-400" },
                    { f: "12/03", m: "$3.200", e: "Pagado", ec: "text-emerald-400" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 px-3 py-2.5 border-b last:border-0 text-sm"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      <span className="text-slate-400">{r.f}</span>
                      <span className="text-slate-200">{r.m}</span>
                      <span className={`text-xs font-semibold ${r.ec}`}>{r.e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section
        className="py-24 border-t border-white/10"
        style={{ background: "#080612" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block py-1 px-4 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/30 text-xs font-bold tracking-widest mb-4 uppercase">
              Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Cómo trabajamos</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Sin sorpresas, sin letra chica. Cada etapa tiene objetivos claros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Consulta inicial", desc: "Reunión gratuita para entender tu negocio y sus dolores.", highlight: false, delay: '0.05s' },
              { num: "02", title: "Propuesta a medida", desc: "Solución y presupuesto claros, sin letra chica.", highlight: false, delay: '0.15s' },
              { num: "03", title: "Desarrollo iterativo", desc: "Construimos por etapas con feedback en cada paso.", highlight: false, delay: '0.25s' },
              { num: "04", title: "Soporte continuo", desc: "Te acompañamos después del lanzamiento.", highlight: true, delay: '0.35s' },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border p-6 text-center reveal"
                style={{ background: "#1A1232", borderColor: "rgba(255,255,255,0.08)", transitionDelay: step.delay }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl"
                  style={
                    step.highlight
                      ? { background: "#7C3AED", color: "#fff" }
                      : { border: "2px solid #7C3AED", color: "#A78BFA", background: "transparent" }
                  }
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-24 border-t border-white/10"
        style={{ background: "#0F0A20" }}
      >
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block py-1 px-4 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/30 text-xs font-bold tracking-widest mb-4 uppercase">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Lo que nos preguntan siempre
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {[
              {
                q: "¿Cuánto cuesta?",
                a: "Cada proyecto es distinto, por eso no manejamos precios fijos. Después de entender tu caso te damos una propuesta detallada. La consulta inicial siempre es sin cargo.",
              },
              {
                q: "¿Cuánto tiempo tarda?",
                a: "Depende de la complejidad. Un sistema sencillo puede estar listo en 4–6 semanas. Proyectos más grandes los dividimos en etapas para que empieces a ver resultados antes.",
              },
              {
                q: "¿Trabajan con todo el país?",
                a: "Sí. Trabajamos 100% de forma remota. Estamos en Buenos Aires, pero nuestros clientes pueden estar en cualquier parte de Argentina o LATAM.",
              },
              {
                q: "¿Qué pasa después del lanzamiento?",
                a: "El soporte post-lanzamiento está incluido en todos nuestros proyectos. Para evoluciones mayores, acordamos un plan de mantenimiento según tus necesidades.",
              },
              {
                q: "¿Tienen experiencia con ARCA y MercadoPago?",
                a: "Sí. Ya integramos ambas herramientas en proyectos reales. Conocemos los quirks del ecosistema tecnológico local.",
              },
            ].map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-white list-none">
                  {item.q}
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 border-t border-white/10 text-center"
        style={{
          background: "radial-gradient(ellipse at center, #2D1B69 0%, #080612 70%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 reveal">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed reveal" style={{ transitionDelay: '0.1s' }}>
            Contanos tu proyecto y te respondemos en menos de 24 horas. La primera reunión es sin
            cargo y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: '0.2s' }}>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg"
              style={{ background: "#25D366" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escribinos por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border transition-all"
              style={{
                borderColor: "#7C3AED",
                background: "transparent",
              }}
            >
              <span className="material-symbols-outlined">mail</span>
              Contacto por email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
