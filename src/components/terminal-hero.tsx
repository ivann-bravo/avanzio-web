'use client'
import { useEffect, useState } from 'react'

type LineType = 'command' | 'empty' | 'running' | 'success' | 'cyan' | 'final'

interface TerminalLine {
  text: string
  type: LineType
  delay: number
}

const LINES: TerminalLine[] = [
  { text: '$ avanzio init tu-negocio --mode=produccion', type: 'command', delay: 600 },
  { text: '', type: 'empty', delay: 900 },
  { text: '▶  analizando tu negocio...', type: 'running', delay: 1100 },
  { text: '✓  procesos manuales detectados: 4', type: 'success', delay: 1700 },
  { text: '✓  oportunidad: automatizar ventas y stock', type: 'success', delay: 2200 },
  { text: '', type: 'empty', delay: 2500 },
  { text: '▶  construyendo solución a medida...', type: 'running', delay: 2700 },
  { text: '✓  Next.js + TypeScript + PostgreSQL', type: 'success', delay: 3300 },
  { text: '✓  MercadoPago + ARCA integrados', type: 'success', delay: 3700 },
  { text: '', type: 'empty', delay: 4000 },
  { text: '▶  desplegando sistema...', type: 'running', delay: 4200 },
  { text: '✓  deploy exitoso — avanzio.com.ar', type: 'success', delay: 4800 },
  { text: '  tiempo total: 4 semanas. sin vueltas.', type: 'cyan', delay: 5200 },
  { text: '', type: 'empty', delay: 5500 },
  { text: '$ tu negocio, transformado. ✓', type: 'final', delay: 5700 },
]

export function TerminalHero() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    LINES.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), LINES[i].delay)
    })
  }, [])

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#0D0A1E',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 0 60px rgba(124,58,237,0.25), 0 24px 80px rgba(0,0,0,0.5)',
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ background: '#12092A', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500 block" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
        <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
        <div
          className="ml-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono text-emerald-400"
          style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          en producción
        </div>
        <span className="ml-auto text-xs text-slate-600 font-mono">avanzio — bash</span>
      </div>
      {/* Content */}
      <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[260px] sm:min-h-[320px]">
        {LINES.slice(0, visibleCount).map((line, i) => {
          if (line.type === 'empty') return <div key={i} className="h-3" />
          const colorClass =
            line.type === 'command'  ? 'text-white font-semibold' :
            line.type === 'running'  ? 'text-slate-400' :
            line.type === 'success'  ? 'text-emerald-400' :
            line.type === 'cyan'     ? 'text-cyan-400' :
            'text-[#A78BFA] font-bold'
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
          <span className="inline-block w-2 h-4 bg-[#A78BFA] ml-0.5 animate-pulse" />
        )}
      </div>
    </div>
  )
}
