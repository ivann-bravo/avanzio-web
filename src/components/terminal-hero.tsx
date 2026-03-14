'use client'
import { useEffect, useState } from 'react'

type LineType = 'command' | 'empty' | 'running' | 'success' | 'final'

interface TerminalLine {
  text: string
  type: LineType
  delay: number
}

const LINES: TerminalLine[] = [
  { text: '$ nexodev build --cliente="tu-empresa"', type: 'command', delay: 600 },
  { text: '', type: 'empty', delay: 800 },
  { text: '▶  analizando procesos actuales...', type: 'running', delay: 1000 },
  { text: '✓  dolor detectado: gestión manual en planillas', type: 'success', delay: 1600 },
  { text: '✓  oportunidad: automatizar ventas, stock, pedidos', type: 'success', delay: 2000 },
  { text: '', type: 'empty', delay: 2300 },
  { text: '▶  configurando integraciones argentinas...', type: 'running', delay: 2500 },
  { text: '✓  MercadoPago conectado', type: 'success', delay: 3100 },
  { text: '✓  AFIP habilitado', type: 'success', delay: 3500 },
  { text: '✓  TypeScript + Node.js + PostgreSQL', type: 'success', delay: 3900 },
  { text: '', type: 'empty', delay: 4100 },
  { text: '▶  desplegando sistema personalizado...', type: 'running', delay: 4300 },
  { text: '✓  sistema en producción', type: 'success', delay: 4900 },
  { text: '✓  equipo capacitado y acompañado', type: 'success', delay: 5300 },
  { text: '✓  soporte activo post-lanzamiento', type: 'success', delay: 5700 },
  { text: '', type: 'empty', delay: 5900 },
  { text: '$ tu negocio, automatizado. ✓', type: 'final', delay: 6100 },
]

export function TerminalHero() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    LINES.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), LINES[i].delay)
    })
  }, [])

  return (
    <div className="rounded-2xl border border-[#334155] bg-[#060d1b] overflow-hidden shadow-2xl shadow-black/40">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#334155] bg-[#0c1424]">
        <span className="w-3 h-3 rounded-full bg-red-500 block" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
        <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
        <span className="ml-auto text-xs text-slate-600 font-mono">nexodev — bash</span>
      </div>
      {/* Content */}
      <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[260px] sm:min-h-[320px]">
        {LINES.slice(0, visibleCount).map((line, i) => {
          if (line.type === 'empty') return <div key={i} className="h-3" />
          const colorClass =
            line.type === 'command' ? 'text-white font-semibold' :
            line.type === 'running' ? 'text-slate-400' :
            line.type === 'success' ? 'text-emerald-400' :
            'text-[#818cf8] font-bold'
          return (
            <div key={i} className={`${colorClass} transition-opacity duration-200`}>
              {line.text}
            </div>
          )
        })}
        {visibleCount > 0 && visibleCount < LINES.length && (
          <span className="inline-block w-2 h-4 bg-slate-400 ml-0.5 animate-pulse" />
        )}
        {visibleCount >= LINES.length && (
          <span className="inline-block w-2 h-4 bg-[#818cf8] ml-0.5 animate-pulse" />
        )}
      </div>
    </div>
  )
}
