import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Proyectos reales con clientes reales. TryHardware y Santa Benedetta — sistemas que funcionan todos los días.",
};

export default function CasosPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-sm font-bold tracking-widest mb-6">
            NUESTRO TRABAJO
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6 text-white max-w-4xl">
            No vendemos demos.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-[#4f46e5]">
              Entregamos sistemas que funcionan.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-16 leading-relaxed">
            Cada proyecto acá tiene un cliente real, un problema concreto y una solución que trabaja todos los días.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <div>
              <p className="text-4xl font-black text-white mb-1">2</p>
              <p className="text-sm text-slate-400">sistemas en producción</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#334155]" />
            <div>
              <p className="text-4xl font-black text-emerald-400 mb-1">100%</p>
              <p className="text-sm text-slate-400">satisfacción de clientes</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#334155]" />
            <div>
              <p className="text-4xl font-black text-white mb-1">0</p>
              <p className="text-sm text-slate-400">caídas en producción</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 1: TRYHARDWARE */}
      <section className="py-24 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-6">
              <span className="inline-block bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider">
                TIENDA ONLINE + PANEL INTERNO
              </span>
              <h2 className="text-4xl font-bold text-white">TryHardware</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Tienda de hardware informático en Banfield con WooCommerce personalizado + panel de gestión interno + plugin TH Slider Builder. Un sistema que usamos nosotros mismos todos los días.
              </p>
              <div className="bg-[#1e293b] border-l-4 border-[#4f46e5] rounded-r-xl p-6">
                <span className="material-symbols-outlined text-[#4f46e5] text-4xl block mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>
                  format_quote
                </span>
                <p className="text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;No solo creamos sistemas para otros, los usamos nosotros mismos todos los días.&rdquo;
                </p>
                <p className="text-slate-500 text-sm">— Iván, co-fundador Avanzio</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["WooCommerce", "PHP", "JavaScript", "Node.js", "TypeScript"].map((tag) => (
                  <span key={tag} className="bg-[#1e293b] border border-[#334155] rounded-full px-3 py-1 text-xs text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Mockup browser */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-[#0f172a] border-b border-[#334155] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-[#1e293b] rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                  tryhardware.com.ar
                </div>
              </div>
              <div>
                <div className="bg-[#0f172a] border-b border-[#334155] px-4 py-3 flex items-center justify-between">
                  <span className="font-black text-orange-400 text-lg">
                    TH <span className="text-white font-normal text-sm">Hardware</span>
                  </span>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>Tienda</span>
                    <span>Marcas</span>
                    <span>Ofertas</span>
                    <div className="relative">
                      <span className="material-symbols-outlined text-lg">shopping_cart</span>
                      <span className="absolute -top-1 -right-1 bg-orange-400 text-[#0f172a] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 p-4">
                  {[
                    { icon: "memory", name: "RAM DDR5 32GB", price: "$45.000" },
                    { icon: "developer_board", name: "RTX 4070 Ti", price: "$890.000" },
                    { icon: "storage", name: "SSD NVMe 1TB", price: "$62.000" },
                  ].map((product) => (
                    <div key={product.name} className="bg-[#0f172a] rounded-xl border border-[#334155] p-3">
                      <div className="bg-[#334155] rounded-lg h-16 flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-slate-400">{product.icon}</span>
                      </div>
                      <p className="text-xs font-semibold text-white truncate">{product.name}</p>
                      <p className="text-sm font-bold text-green-400 mt-1">{product.price}</p>
                      <button className="mt-2 w-full bg-orange-400 text-[#0f172a] text-xs font-bold py-1 rounded">
                        Ver
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 2: SANTA BENEDETTA */}
      <section className="py-24 bg-[#1e293b]/20 border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mockup browser (izquierda) */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl shadow-2xl overflow-hidden order-2 lg:order-1">
              <div className="bg-[#0f172a] border-b border-[#334155] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-[#1e293b] rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                  santabenedetta.com.ar
                </div>
              </div>
              <div>
                <div className="bg-[#2d1a0a] border-b border-amber-900/30 px-4 py-3 flex items-center justify-between">
                  <span className="font-serif text-amber-300 text-sm tracking-wide">Santa Benedetta</span>
                  <div className="flex items-center gap-3 text-xs text-amber-200/60">
                    <span>Catálogo</span>
                    <span>Envíos</span>
                    <span className="material-symbols-outlined text-lg">shopping_cart</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#3d2008] to-[#5c3010] px-4 py-6 text-center">
                  <p className="text-amber-100 text-xs uppercase tracking-widest mb-1">Fiambres &amp; Quesos Artesanales</p>
                  <h3 className="text-amber-300 font-bold text-lg mb-3">Productos de calidad,<br />directos a tu mesa</h3>
                  <button className="bg-amber-400 text-[#2d1a0a] text-xs font-bold px-4 py-1.5 rounded-full">
                    Ver catálogo
                  </button>
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
            {/* Contenido (derecha) */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider">
                E-COMMERCE
              </span>
              <h2 className="text-4xl font-bold text-white">Santa Benedetta</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Tienda online para fiambrería artesanal. Catálogo completo, envío local, pasarela de pago argentina. El primer cliente externo de Avanzio.
              </p>
              <div className="bg-[#1e293b] border-l-4 border-amber-400 rounded-r-xl p-6">
                <span className="material-symbols-outlined text-amber-400 text-4xl block mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>
                  format_quote
                </span>
                <p className="text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;Trabajamos codo a codo con el dueño para que la tienda refleje la identidad de su negocio.&rdquo;
                </p>
                <p className="text-slate-500 text-sm">— Magalí, co-fundadora Avanzio</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["E-commerce", "MercadoPago", "WordPress", "WooCommerce"].map((tag) => (
                  <span key={tag} className="bg-[#1e293b] border border-[#334155] rounded-full px-3 py-1 text-xs text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: PRÓXIMO CLIENTE */}
      <section className="py-24 bg-[#0f172a] border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center">
          <div className="max-w-2xl w-full bg-[#1e293b] border-2 border-dashed border-[#4f46e5]/40 rounded-2xl p-12 text-center">
            <span className="material-symbols-outlined text-[#4f46e5]/40 text-8xl block mb-6">add_circle</span>
            <h2 className="text-3xl font-bold text-white mb-4">¿Tu empresa puede ser la próxima?</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Estamos abiertos a nuevos proyectos. Si tenés un problema operativo que resolver, hablemos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#4f46e5]/25"
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
