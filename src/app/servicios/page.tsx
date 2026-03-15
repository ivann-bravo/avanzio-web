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
      <section className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/20 text-sm font-bold tracking-widest mb-6">
            LO QUE HACEMOS
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6 text-white max-w-4xl">
            Cada peso que invertís<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-indigo-400 to-emerald-400">
              en tecnología tiene que trabajar.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Sin plantillas, sin humo. Primero entendemos cómo funciona tu negocio,
            después escribimos el código que lo mejora.
          </p>
        </div>
      </section>

      {/* SERVICIO 1: SISTEMA A MEDIDA */}
      <section className="py-24 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="material-symbols-outlined text-6xl text-[#4f46e5] p-4 bg-[#4f46e5]/10 rounded-2xl inline-block">
                code
              </span>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Sistema a medida</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Desarrollamos software 100% personalizado para tus procesos. Olvidate del Excel y
                  automatizá las operaciones de tu empresa con tecnología que trabaja para vos.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "analytics", title: "Análisis profundo", desc: "Estudiamos cada proceso antes de escribir código" },
                  { icon: "developer_mode", title: "Desarrollo ágil", desc: "Entregas incrementales con feedback constante" },
                  { icon: "support_agent", title: "Soporte real", desc: "No desaparecemos al lanzar el sistema" },
                  { icon: "school", title: "Capacitación", desc: "Entrenamos a tu equipo para usar el sistema" },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-[#1e293b] rounded-xl border border-[#334155]">
                    <span className="material-symbols-outlined text-[#4f46e5] mb-2 block">{item.icon}</span>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Mockup */}
            <div className="bg-[#1e293b] rounded-2xl border border-[#334155] shadow-2xl overflow-hidden">
              <div className="bg-[#0f172a] border-b border-[#334155] px-4 py-3 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
                <span className="w-3 h-3 rounded-full bg-green-500 block" />
                <span className="text-sm text-slate-400 ml-2">Panel de Control</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Ventas", val: "$84.200", color: "text-[#4f46e5]", bg: "bg-[#4f46e5]/10 border-[#4f46e5]/30" },
                    { label: "Pedidos", val: "47", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
                    { label: "Stock", val: "312", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
                  ].map((k) => (
                    <div key={k.label} className={`${k.bg} border rounded-xl p-3`}>
                      <p className="text-xs text-slate-400 mb-1">{k.label}</p>
                      <p className={`text-xl font-black ${k.color}`}>{k.val}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0f172a] rounded-xl border border-[#334155] overflow-hidden">
                  <div className="grid grid-cols-4 px-3 py-2 border-b border-[#334155] text-xs text-slate-500 font-semibold uppercase">
                    <span>Fecha</span><span>Cliente</span><span>Monto</span><span>Estado</span>
                  </div>
                  {[
                    { fecha: "13/03", cliente: "Ferretería López", monto: "$12.500", estado: "Pagado", ec: "text-emerald-400" },
                    { fecha: "13/03", cliente: "Auto Repuestos SA", monto: "$8.900", estado: "Pendiente", ec: "text-amber-400" },
                    { fecha: "12/03", cliente: "El Rincón Deli", monto: "$3.200", estado: "Pagado", ec: "text-emerald-400" },
                    { fecha: "12/03", cliente: "Textil Moreno", monto: "$21.000", estado: "En proceso", ec: "text-slate-400" },
                  ].map((r, i) => (
                    <div key={i} className="grid grid-cols-4 px-3 py-2.5 border-b border-[#334155]/50 text-sm last:border-0">
                      <span className="text-slate-400">{r.fecha}</span>
                      <span className="text-slate-200">{r.cliente}</span>
                      <span className="text-slate-200">{r.monto}</span>
                      <span className={`text-xs font-semibold ${r.ec}`}>{r.estado}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 2: TIENDA ONLINE */}
      <section className="py-24 bg-[#1e293b]/20 border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mockup izquierda */}
            <div className="bg-[#1e293b] rounded-2xl border border-[#334155] shadow-2xl overflow-hidden order-2 lg:order-1">
              <div className="bg-[#0f172a] border-b border-[#334155] px-4 py-3 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
                <span className="w-3 h-3 rounded-full bg-green-500 block" />
                <span className="flex-1 bg-[#1e293b] rounded px-3 py-1 text-xs text-slate-400 text-center">tutienda.com.ar</span>
              </div>
              <div>
                <div className="bg-[#0f172a] border-b border-[#334155] px-4 py-3 flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Mi Tienda</span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>Inicio</span><span>Catálogo</span>
                    <div className="relative">
                      <span className="material-symbols-outlined text-lg">shopping_cart</span>
                      <span className="absolute -top-1 -right-1 bg-[#4f46e5] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-4">
                  {[
                    { nombre: "Producto Premium", precio: "$12.500" },
                    { nombre: "Artículo Especial", precio: "$8.900" },
                    { nombre: "Oferta del Día", precio: "$3.200" },
                    { nombre: "Pack Completo", precio: "$24.000" },
                  ].map((p) => (
                    <div key={p.nombre} className="bg-[#0f172a] rounded-xl border border-[#334155] p-3">
                      <div className="bg-[#334155] rounded-lg h-16 flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-slate-400">inventory_2</span>
                      </div>
                      <p className="text-xs font-semibold text-white">{p.nombre}</p>
                      <p className="text-sm font-bold text-amber-400 mt-1">{p.precio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Contenido derecha */}
            <div className="space-y-8 order-1 lg:order-2">
              <span className="material-symbols-outlined text-6xl text-amber-400 p-4 bg-amber-500/10 rounded-2xl inline-block">
                storefront
              </span>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Tienda Online</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  E-commerce robusto con las integraciones que necesita un negocio argentino.
                  MercadoPago, ARCA, logística local — todo listo desde el día uno.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "payments", title: "MercadoPago", desc: "Cobros seguros al instante" },
                  { icon: "receipt_long", title: "Facturación ARCA", desc: "Automática y sin errores" },
                  { icon: "inventory_2", title: "Catálogo", desc: "Sin límite de productos ni categorías" },
                  { icon: "local_shipping", title: "Envíos", desc: "Logística local integrada" },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-[#1e293b] rounded-xl border border-[#334155]">
                    <span className="material-symbols-outlined text-amber-400 mb-2 block">{item.icon}</span>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 3: PANEL DE GESTIÓN */}
      <section className="py-24 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="material-symbols-outlined text-6xl text-emerald-400 p-4 bg-emerald-500/10 rounded-2xl inline-block">
                dashboard_customize
              </span>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Panel de Gestión</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Tomá decisiones con datos reales. Un dashboard que centraliza ventas, inventario y
                  métricas para que tengas el control total de tu negocio en tiempo real.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "insights", title: "Métricas en vivo", desc: "KPIs actualizados al instante" },
                  { icon: "inventory", title: "Gestión de stock", desc: "Alertas automáticas de inventario bajo" },
                  { icon: "file_download", title: "Reportes", desc: "Exportá a Excel o PDF con un clic" },
                  { icon: "manage_accounts", title: "Usuarios", desc: "Control de permisos por rol" },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-[#1e293b] rounded-xl border border-[#334155]">
                    <span className="material-symbols-outlined text-emerald-400 mb-2 block">{item.icon}</span>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Mockup dashboard */}
            <div className="bg-[#1e293b] rounded-2xl border border-[#334155] shadow-2xl overflow-hidden">
              <div className="bg-[#0f172a] border-b border-[#334155] px-4 py-3 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
                <span className="w-3 h-3 rounded-full bg-green-500 block" />
                <span className="text-sm text-slate-400 ml-2">Dashboard Principal</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Ventas hoy", val: "$84.200", sub: "↑ 12%", color: "text-[#4f46e5]", bg: "bg-[#4f46e5]/10 border-[#4f46e5]/30" },
                    { label: "Pedidos", val: "47", sub: "↑ 8%", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
                    { label: "Stock crítico", val: "3", sub: "⚠ revisar", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
                  ].map((k) => (
                    <div key={k.label} className={`${k.bg} border rounded-xl p-3`}>
                      <p className="text-xs text-slate-400 mb-1">{k.label}</p>
                      <p className={`text-2xl font-black ${k.color}`}>{k.val}</p>
                      <p className="text-xs text-emerald-400 mt-1">{k.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="h-24 bg-[#0f172a] rounded-xl border border-[#334155] p-3 flex items-end gap-2 mb-4">
                  {[35, 55, 40, 70, 90, 60, 80].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t ${i === 4 ? "bg-[#4f46e5]" : "bg-[#334155]"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="bg-[#0f172a] rounded-xl border border-[#334155] overflow-hidden">
                  <div className="grid grid-cols-3 px-3 py-2 border-b border-[#334155] text-xs text-slate-500 font-semibold uppercase">
                    <span>Fecha</span><span>Monto</span><span>Estado</span>
                  </div>
                  {[
                    { f: "13/03", m: "$12.500", e: "Pagado", ec: "text-emerald-400" },
                    { f: "13/03", m: "$8.900", e: "Pendiente", ec: "text-amber-400" },
                    { f: "12/03", m: "$3.200", e: "Pagado", ec: "text-emerald-400" },
                  ].map((r, i) => (
                    <div key={i} className="grid grid-cols-3 px-3 py-2.5 border-b border-[#334155]/50 text-sm last:border-0">
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
      <section className="py-24 bg-[#1e293b]/30 border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#4f46e5] uppercase tracking-widest text-sm font-bold">CÓMO TRABAJAMOS</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-4">Un proceso simple y transparente</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Sin sorpresas, sin letra chica. Cada etapa tiene objetivos claros.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#334155]" />
            {[
              { num: "01", title: "Consulta inicial", desc: "Reunión gratuita para entender tu negocio." },
              { num: "02", title: "Propuesta a medida", desc: "Solución y presupuesto claros, sin letra chica." },
              { num: "03", title: "Desarrollo iterativo", desc: "Construimos por etapas con feedback en cada paso." },
              { num: "04", title: "Soporte continuo", desc: "Te acompañamos después del lanzamiento." },
            ].map((step) => (
              <div key={step.num} className="text-center relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-[#4f46e5] text-[#4f46e5] font-black text-2xl flex items-center justify-center mx-auto mb-4 bg-[#0f172a]">
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
      <section className="py-24 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#4f46e5] uppercase tracking-widest text-sm font-bold">PREGUNTAS FRECUENTES</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Respondemos tus dudas</h2>
          </div>
          <div className="divide-y divide-[#334155]">
            {[
              {
                q: "¿Cuánto cuesta desarrollar un sistema a medida?",
                a: "Cada proyecto es distinto, por eso no manejamos precios fijos. Después de entender tu caso te damos una propuesta detallada. La consulta inicial siempre es sin cargo.",
              },
              {
                q: "¿Cuánto tiempo tarda el desarrollo?",
                a: "Depende de la complejidad. Un sistema sencillo puede estar listo en 4-6 semanas. Proyectos más grandes los dividimos en etapas para que empieces a ver resultados antes.",
              },
              {
                q: "¿Trabajan con clientes de todo el país?",
                a: "Sí. Trabajamos 100% de forma remota. Estamos en Banfield, Buenos Aires, pero nuestros clientes pueden estar en cualquier parte de Argentina o LATAM.",
              },
              {
                q: "¿Qué pasa si necesito cambios después del lanzamiento?",
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

      {/* CTA FINAL */}
      <section
        className="py-24 border-t border-[#334155]"
        style={{ background: "radial-gradient(ellipse at center, rgba(79,70,229,0.15) 0%, #0f172a 70%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">¿Listo para dar el primer paso?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Contanos tu proyecto y te respondemos en menos de 24 horas. La primera reunión es sin
            cargo y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border border-[#334155] bg-[#1e293b] hover:bg-[#334155] text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
              Enviar Email
            </Link>
          </div>
          <Link href="/casos" className="text-[#4f46e5] hover:text-[#6366f1] font-medium transition-colors">
            ¿Preferís ver resultados primero? Ver casos de éxito →
          </Link>
        </div>
      </section>
    </>
  );
}
