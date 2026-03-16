// TransformationSection — horizontal ticker (desktop) + vertical two-column (mobile)

// ─── DESKTOP: full-width window cards ───────────────────────────────────────

function WindowBefore({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl overflow-hidden shrink-0 w-[260px]"
      style={{ background: "#0F1117", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2.5 border-b"
        style={{ background: "#1A1A2E", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <span className="text-[11px] font-mono text-slate-600 ml-1 truncate">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function WindowAfter({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl overflow-hidden shrink-0 w-[260px]"
      style={{ background: "#0D0820", border: "1px solid rgba(124,58,237,0.25)" }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2.5 border-b"
        style={{ background: "#1A0A30", borderColor: "rgba(124,58,237,0.15)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="text-[11px] font-mono text-[#8B5CF6] ml-1 truncate">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function BeforeCards() {
  return (
    <div className="flex items-center gap-6 px-3">
      <WindowBefore title="planilla-stock.xlsx">
        <div className="space-y-1.5">
          <div className="h-5 rounded flex gap-1 px-1" style={{ background: "#1F2937" }}>
            {[40, 60, 50].map((w, i) => (
              <div key={i} className="h-full rounded" style={{ width: `${w}%`, background: "#374151" }} />
            ))}
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 rounded flex gap-1 px-1" style={{ background: i % 2 === 0 ? "#111827" : "#0F172A" }}>
              {[35, 50, 45].map((w, j) => (
                <div key={j} className="h-full rounded" style={{ width: `${w}%`, background: "#1F2937" }} />
              ))}
            </div>
          ))}
          <div className="text-[10px] font-mono text-slate-700 mt-2">última actualización: hace 3 días</div>
        </div>
      </WindowBefore>

      <WindowBefore title="Pedidos — Grupo 💬">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full" style={{ background: "#374151" }} />
            <span className="text-[11px] text-slate-600">Grupo Pedidos</span>
          </div>
          <div className="flex justify-end">
            <div className="h-7 w-36 rounded-xl rounded-br-sm" style={{ background: "#374151" }} />
          </div>
          <div className="flex justify-start">
            <div className="h-7 w-44 rounded-xl rounded-bl-sm" style={{ background: "#1F2937" }} />
          </div>
          <div className="flex justify-end">
            <div className="h-7 w-28 rounded-xl rounded-br-sm" style={{ background: "#374151" }} />
          </div>
          <div className="flex justify-start">
            <div className="h-7 w-40 rounded-xl rounded-bl-sm" style={{ background: "#1F2937" }} />
          </div>
        </div>
      </WindowBefore>

      <WindowBefore title="la_tiendita 📩 Instagram">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full" style={{ background: "#374151" }} />
            <div className="space-y-1">
              <div className="h-2.5 w-20 rounded" style={{ background: "#374151" }} />
              <div className="h-2 w-14 rounded" style={{ background: "#1F2937" }} />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[72px] h-14 rounded-lg" style={{ background: "#1F2937" }} />
            <div className="w-[72px] h-14 rounded-lg" style={{ background: "#1F2937" }} />
            <div className="w-[72px] h-14 rounded-lg" style={{ background: "#111827" }} />
          </div>
          <div className="h-4 w-3/4 rounded" style={{ background: "#1F2937" }} />
        </div>
      </WindowBefore>

      <WindowBefore title="stock-manual.txt">
        <div className="space-y-1.5">
          {["Producto A  —  12 ud", "Producto B  —   5 ud", "Producto C  —  ?? ud", "TOTAL...  ver cuad."].map(
            (line, i) => (
              <div key={i} className="text-[11px] font-mono text-slate-600">{line}</div>
            )
          )}
          <div className="mt-3 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
          <div className="text-[10px] text-slate-700 font-mono mt-2">sin actualizar desde ayer</div>
        </div>
      </WindowBefore>
    </div>
  );
}

function AfterCards() {
  return (
    <div className="flex items-center gap-6 px-3">
      <WindowAfter title="panel.avanzio.ar">
        <div className="space-y-3">
          <div className="flex gap-2">
            {[
              { label: "Ventas", value: "$48k", color: "#A78BFA" },
              { label: "Pedidos", value: "312", color: "#06B6D4" },
              { label: "Uptime", value: "99%", color: "#10B981" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 p-2 rounded-lg text-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)" }}>
                <div className="text-xs font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[10px] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1.5 h-16 px-1">
            {[30, 50, 40, 65, 55, 80, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 6 ? "linear-gradient(to top, #7C3AED, #A78BFA)" : "rgba(124,58,237,0.4)",
                  boxShadow: i === 6 ? "0 0 8px rgba(167,139,250,0.6)" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </WindowAfter>

      <WindowAfter title="mi-tienda.ar">
        <div className="space-y-2">
          <div className="h-6 w-full rounded-lg flex items-center px-2"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <span className="text-[10px] text-slate-500">🔍 buscar productos...</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[{ price: "$2.499", bg: "#7C3AED" }, { price: "$1.890", bg: "#8B5CF6" }, { price: "$3.200", bg: "#6D28D9" }].map((p, i) => (
              <div key={i} className="rounded-lg overflow-hidden"
                style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.15)" }}>
                <div className="h-12 rounded-t" style={{ background: `${p.bg}30` }} />
                <div className="p-1 text-center">
                  <span className="text-[10px] font-bold text-[#A78BFA]">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WindowAfter>

      <WindowAfter title="sistema.avanzio.ar">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white">Pedidos hoy</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full text-[#10B981]"
              style={{ background: "rgba(16,185,129,0.15)" }}>● en vivo</span>
          </div>
          {[
            { id: "#1042", status: "Enviado", color: "#10B981" },
            { id: "#1041", status: "Preparando", color: "#F59E0B" },
            { id: "#1040", status: "Pagado", color: "#8B5CF6" },
          ].map((order) => (
            <div key={order.id} className="flex items-center justify-between py-1.5 px-2 rounded-lg"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-[11px] font-mono text-slate-400">{order.id}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                style={{ color: order.color, background: `${order.color}20` }}>{order.status}</span>
            </div>
          ))}
        </div>
      </WindowAfter>

      <WindowAfter title="stock.avanzio.ar">
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white">Control de stock</span>
          </div>
          {[
            { name: "Producto A", stock: 94, color: "#10B981" },
            { name: "Producto B", stock: 31, color: "#F59E0B" },
            { name: "Producto C", stock: 78, color: "#8B5CF6" },
          ].map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-400">{item.name}</span>
                <span className="text-[10px] font-bold" style={{ color: item.color }}>{item.stock}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-full" style={{ width: `${item.stock}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </WindowAfter>
    </div>
  );
}

// ─── MOBILE: compact vertical-scrolling cards ────────────────────────────────

function MiniWindowBefore({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden shrink-0"
      style={{ background: "#0F1117", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="flex items-center gap-1 px-2 py-1.5 border-b"
        style={{ background: "#1A1A2E", borderColor: "rgba(255,255,255,0.05)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
        <span className="text-[8px] font-mono text-slate-600 ml-0.5 truncate">{title}</span>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}

function MiniWindowAfter({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden shrink-0"
      style={{ background: "#0D0820", border: "1px solid rgba(124,58,237,0.3)" }}>
      <div className="flex items-center gap-1 px-2 py-1.5 border-b"
        style={{ background: "#1A0A30", borderColor: "rgba(124,58,237,0.15)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <span className="text-[8px] font-mono text-[#8B5CF6] ml-0.5 truncate">{title}</span>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}

function BeforeMobileStack() {
  return (
    <div className="flex flex-col gap-3 pb-3">
      {/* Excel */}
      <MiniWindowBefore title="stock.xlsx">
        <div className="min-h-[72px] space-y-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3.5 rounded flex gap-0.5"
              style={{ background: i % 2 === 0 ? "#111827" : "#0F172A" }}>
              {[35, 45, 30].map((w, j) => (
                <div key={j} className="h-full rounded" style={{ width: `${w}%`, background: "#1F2937" }} />
              ))}
            </div>
          ))}
          <div className="text-[8px] font-mono text-slate-700 mt-1">hace 3 días</div>
        </div>
      </MiniWindowBefore>

      {/* WhatsApp */}
      <MiniWindowBefore title="Pedidos 💬">
        <div className="min-h-[72px] space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full" style={{ background: "#374151" }} />
            <span className="text-[8px] text-slate-600">Grupo Pedidos</span>
          </div>
          <div className="flex justify-end">
            <div className="h-6 w-20 rounded-lg rounded-br-sm" style={{ background: "#374151" }} />
          </div>
          <div className="flex justify-start">
            <div className="h-6 w-24 rounded-lg rounded-bl-sm" style={{ background: "#1F2937" }} />
          </div>
          <div className="flex justify-end">
            <div className="h-6 w-16 rounded-lg rounded-br-sm" style={{ background: "#374151" }} />
          </div>
        </div>
      </MiniWindowBefore>

      {/* Instagram */}
      <MiniWindowBefore title="la_tiendita 📩">
        <div className="min-h-[72px] space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full" style={{ background: "#374151" }} />
            <div className="h-2 w-14 rounded" style={{ background: "#374151" }} />
          </div>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 h-10 rounded" style={{ background: "#1F2937" }} />
            ))}
          </div>
          <div className="h-3 w-2/3 rounded" style={{ background: "#1F2937" }} />
        </div>
      </MiniWindowBefore>

      {/* Stock txt */}
      <MiniWindowBefore title="stock.txt">
        <div className="min-h-[72px] space-y-1">
          {["Prod A — 12 ud", "Prod B —  5 ud", "Prod C — ?? ud", "TOTAL... ver cuad."].map((line, i) => (
            <div key={i} className="text-[8px] font-mono text-slate-600">{line}</div>
          ))}
          <div className="text-[7px] text-slate-700 font-mono mt-2">sin actualizar desde ayer</div>
        </div>
      </MiniWindowBefore>

      {/* Cuaderno */}
      <MiniWindowBefore title="notas-clientes.txt">
        <div className="min-h-[72px] space-y-1.5">
          {[80, 60, 90, 50].map((w, i) => (
            <div key={i} className="h-2.5 rounded" style={{ width: `${w}%`, background: "#1F2937" }} />
          ))}
          <div className="h-px mt-2" style={{ background: "rgba(255,255,255,0.04)" }} />
          <div className="text-[8px] font-mono text-slate-700">copiar a mano...</div>
        </div>
      </MiniWindowBefore>
    </div>
  );
}

function AfterMobileStack() {
  return (
    <div className="flex flex-col gap-3 pb-3">
      {/* Dashboard */}
      <MiniWindowAfter title="panel.avanzio.ar">
        <div className="min-h-[72px] space-y-2">
          <div className="flex gap-1">
            {[{ v: "$48k", c: "#A78BFA" }, { v: "312", c: "#06B6D4" }, { v: "99%", c: "#10B981" }].map((s, i) => (
              <div key={i} className="flex-1 p-1 rounded text-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)" }}>
                <div className="text-[9px] font-bold" style={{ color: s.c }}>{s.v}</div>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-0.5 h-10">
            {[30, 50, 40, 65, 80, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? "linear-gradient(to top, #7C3AED, #A78BFA)" : "rgba(124,58,237,0.35)",
                  boxShadow: i === 5 ? "0 0 6px rgba(167,139,250,0.5)" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </MiniWindowAfter>

      {/* Tienda */}
      <MiniWindowAfter title="mi-tienda.ar">
        <div className="min-h-[72px] space-y-1.5">
          <div className="h-5 rounded flex items-center px-1.5"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <span className="text-[8px] text-slate-500">🔍 buscar...</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {["$2.499", "$1.890", "$3.200"].map((p, i) => (
              <div key={i} className="rounded overflow-hidden"
                style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.15)" }}>
                <div className="h-8" style={{ background: "rgba(124,58,237,0.25)" }} />
                <div className="p-0.5 text-center">
                  <span className="text-[7px] font-bold text-[#A78BFA]">{p}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MiniWindowAfter>

      {/* Pedidos en vivo */}
      <MiniWindowAfter title="sistema.avanzio.ar">
        <div className="min-h-[72px] space-y-1.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-white">Pedidos hoy</span>
            <span className="text-[7px] text-[#10B981]">● vivo</span>
          </div>
          {[
            { id: "#1042", s: "Enviado", c: "#10B981" },
            { id: "#1041", s: "Preparando", c: "#F59E0B" },
            { id: "#1040", s: "Pagado", c: "#8B5CF6" },
          ].map((o) => (
            <div key={o.id} className="flex items-center justify-between px-1.5 py-1 rounded"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-[8px] font-mono text-slate-400">{o.id}</span>
              <span className="text-[7px] px-1 py-0.5 rounded-full" style={{ color: o.c, background: `${o.c}20` }}>{o.s}</span>
            </div>
          ))}
        </div>
      </MiniWindowAfter>

      {/* Stock */}
      <MiniWindowAfter title="stock.avanzio.ar">
        <div className="min-h-[72px] space-y-2">
          <span className="text-[8px] font-bold text-white block mb-1">Control de stock</span>
          {[
            { name: "Prod A", stock: 94, color: "#10B981" },
            { name: "Prod B", stock: 31, color: "#F59E0B" },
            { name: "Prod C", stock: 78, color: "#8B5CF6" },
          ].map((item) => (
            <div key={item.name} className="space-y-0.5">
              <div className="flex justify-between">
                <span className="text-[8px] text-slate-400">{item.name}</span>
                <span className="text-[8px] font-bold" style={{ color: item.color }}>{item.stock}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-full" style={{ width: `${item.stock}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </MiniWindowAfter>

      {/* Notificaciones */}
      <MiniWindowAfter title="notif.avanzio.ar">
        <div className="min-h-[72px] space-y-1.5">
          {[
            { msg: "Nuevo pedido #1043", c: "#A78BFA", icon: "🛒" },
            { msg: "Stock bajo: Prod B", c: "#F59E0B", icon: "⚠️" },
            { msg: "Pago confirmado", c: "#10B981", icon: "✓" },
          ].map((n, i) => (
            <div key={i} className="flex items-center gap-1.5 px-1.5 py-1 rounded"
              style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${n.c}20` }}>
              <span className="text-[9px]">{n.icon}</span>
              <span className="text-[7px] text-slate-300">{n.msg}</span>
            </div>
          ))}
        </div>
      </MiniWindowAfter>
    </div>
  );
}

// ─── CENTER LOGO ─────────────────────────────────────────────────────────────

function CenterLogo() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, #7C3AED 50%, #4C1D95 100%)",
          boxShadow: "0 0 40px rgba(124,58,237,0.7), 0 0 80px rgba(124,58,237,0.3)",
        }}
      >
        <span className="text-white font-black text-xl md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          A
        </span>
      </div>
      <span className="text-[8px] md:text-[10px] font-bold tracking-[0.25em] text-[#A78BFA]">
        AVANZIO
      </span>
    </div>
  );
}

// ─── MAIN SECTION ────────────────────────────────────────────────────────────

export function TransformationSection() {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F0A20 0%, #080612 100%)" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 reveal">
        <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-4">
          Transformación
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          De lo manual a lo digital
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Así transformamos el trabajo de nuestros clientes. Sistemas reales, resultados concretos.
        </p>
      </div>

      {/* ── MOBILE: two narrow vertical-scrolling columns ── */}
      <div className="md:hidden relative h-[420px] overflow-hidden mx-4 rounded-2xl"
        style={{ border: "1px solid rgba(255,255,255,0.05)" }}>

        {/* Top/bottom gradient masks */}
        <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #0F0A20, transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080612, transparent)" }} />

        {/* Center logo — absolute overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <CenterLogo />
        </div>

        {/* Left fade mask */}
        <div className="absolute left-0 inset-y-0 w-3 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0F0A20, transparent)" }} />
        {/* Right fade mask */}
        <div className="absolute right-0 inset-y-0 w-3 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0F0A20, transparent)" }} />

        <div className="flex h-full gap-2 px-2 py-2">
          {/* Before column */}
          <div className="w-1/2 overflow-hidden">
            <div className="marquee-track-down">
              <BeforeMobileStack />
              <BeforeMobileStack />
            </div>
          </div>
          {/* After column */}
          <div className="w-1/2 overflow-hidden">
            <div className="marquee-track-down" style={{ animationDelay: "-4s" }}>
              <AfterMobileStack />
              <AfterMobileStack />
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: horizontal ticker ── */}
      <div className="hidden md:block relative">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #080612, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #080612, transparent)" }} />

        {/* Center portal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <CenterLogo />
        </div>

        {/* Two-track layout */}
        <div className="flex">
          <div className="w-1/2 overflow-hidden">
            <div className="marquee-track" style={{ animationDuration: "45s" }}>
              <BeforeCards />
              <BeforeCards />
            </div>
          </div>
          <div className="w-1/2 overflow-hidden">
            <div className="marquee-track" style={{ animationDuration: "45s" }}>
              <AfterCards />
              <AfterCards />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legend */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-600" />
          <span className="text-sm text-slate-500">Antes de Avanzio</span>
        </div>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#7C3AED]" />
          <span className="text-sm text-slate-400">Con Avanzio</span>
        </div>
      </div>
    </section>
  );
}
