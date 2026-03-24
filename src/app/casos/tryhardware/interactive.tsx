"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

// ─── LIGHTBOX con navegación ──────────────────────────────────────────────────

interface LightboxItem {
  src: string
  alt: string
  isMobile?: boolean
}

function Lightbox({
  items,
  startIndex = 0,
  onClose,
}: {
  items: LightboxItem[]
  startIndex?: number
  onClose: () => void
}) {
  const [idx, setIdx] = useState(startIndex)
  const [mounted, setMounted] = useState(false)
  const item = items[idx]
  const hasPrev = idx > 0
  const hasNext = idx < items.length - 1

  useEffect(() => {
    setMounted(true)
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight" && idx < items.length - 1) setIdx((i) => i + 1)
      if (e.key === "ArrowLeft" && idx > 0) setIdx((i) => i - 1)
    }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose, idx, items.length])

  // Sync startIndex when lightbox reopens on a different item
  useEffect(() => {
    setIdx(startIndex)
  }, [startIndex])

  if (!mounted) return null

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(8,6,18,1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "#080612",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
          {items.length > 1 && (
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", flexShrink: 0 }}>
              {idx + 1} / {items.length}
            </span>
          )}
          <p style={{ color: "#94a3b8", fontSize: "13px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {item.alt}
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            flexShrink: 0,
            marginLeft: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            color: "white",
            borderRadius: "12px",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px", lineHeight: 1 }}>close</span>
          <span className="hidden sm:inline">Cerrar</span>
        </button>
      </div>

      {/* Imagen + flechas */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "stretch",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Flecha anterior */}
        {items.length > 1 && (
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={!hasPrev}
            style={{
              flexShrink: 0,
              width: "44px",
              background: "none",
              border: "none",
              color: hasPrev ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)",
              cursor: hasPrev ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { if (hasPrev) (e.currentTarget as HTMLButtonElement).style.color = "white" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = hasPrev ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>arrow_back_ios</span>
          </button>
        )}

        {/* Área de imagen scrollable */}
        <div
          onClick={onClose}
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "16px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(124,58,237,0.4) transparent",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "block",
              height: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              borderRadius: "12px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              border: "1px solid rgba(255,255,255,0.08)",
              maxWidth: item.isMobile ? "320px" : "100%",
              width: item.isMobile ? "auto" : "100%",
            }}
          />
        </div>

        {/* Flecha siguiente */}
        {items.length > 1 && (
          <button
            onClick={() => setIdx((i) => Math.min(items.length - 1, i + 1))}
            disabled={!hasNext}
            style={{
              flexShrink: 0,
              width: "44px",
              background: "none",
              border: "none",
              color: hasNext ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)",
              cursor: hasNext ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { if (hasNext) (e.currentTarget as HTMLButtonElement).style.color = "white" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = hasNext ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>arrow_forward_ios</span>
          </button>
        )}
      </div>

      {/* Dots de navegación */}
      {items.length > 1 && (
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            padding: "12px 16px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background: i === idx ? "#7C3AED" : "rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "all 0.25s",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  )
}

// ─── SCROLL FRAME (reutilizable) ──────────────────────────────────────────────

interface ScrollFrameProps {
  src: string
  alt: string
  label: string
  maxHeight?: number
  isMobile?: boolean
  bgWhite?: boolean
  onExpand: () => void
}

function ScrollFrame({
  src,
  alt,
  label,
  maxHeight = 380,
  isMobile = false,
  bgWhite = false,
  onExpand,
}: ScrollFrameProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col h-full">
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10 flex-shrink-0"
        style={{ background: "#0F0A20" }}
      >
        {isMobile ? (
          <span className="material-symbols-outlined text-slate-600 text-sm leading-none">signal_cellular_alt</span>
        ) : (
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
        )}
        <span className="text-xs text-slate-500 flex-1 text-center">{label}</span>
        <button
          onClick={onExpand}
          className="text-slate-600 hover:text-slate-300 transition-colors flex-shrink-0"
          title="Ver completo"
        >
          <span className="material-symbols-outlined text-sm leading-none">open_in_full</span>
        </button>
      </div>

      {/* Scrollable area */}
      <div
        className="relative overflow-y-auto cursor-pointer group"
        style={{
          maxHeight: `${maxHeight}px`,
          background: bgWhite ? "#fff" : "transparent",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(124,58,237,0.3) transparent",
        }}
        onClick={onExpand}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto block" />

        {/* Hover hint */}
        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pt-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background: bgWhite
              ? "linear-gradient(transparent, rgba(230,230,230,0.9))"
              : "linear-gradient(transparent, rgba(0,0,0,0.8))",
          }}
        >
          <span className={`text-xs flex items-center gap-1 ${bgWhite ? "text-slate-500" : "text-white/60"}`}>
            <span className="material-symbols-outlined text-xs leading-none">open_in_full</span>
            Click para ver completo
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── TIENDA GALLERY ───────────────────────────────────────────────────────────

const tiendaItems: LightboxItem[] = [
  { src: "/casos/tryhardware/tienda-home-desktop.png", alt: "Tienda TryHardware — try.com.ar · Desktop" },
  { src: "/casos/tryhardware/tienda-home-mobile.png", alt: "Tienda TryHardware — Vista Mobile", isMobile: true },
  { src: "/casos/tryhardware/tienda-reviews.png", alt: "TryHardware — 4.9★ · 110 reseñas en Google" },
  { src: "/casos/tryhardware/tienda-google.png", alt: "TryHardware — primer resultado para 'pc gamer en banfield'" },
]

export function TiendaGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div>
      <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-5">
        Resultado visual
      </p>

      {/* Desktop + Mobile */}
      <div className="grid grid-cols-12 gap-3 mb-3">
        <div className="col-span-12 lg:col-span-8 h-[280px] sm:h-[360px] lg:h-[420px]">
          <ScrollFrame
            src={tiendaItems[0].src}
            alt={tiendaItems[0].alt}
            label="try.com.ar"
            maxHeight={390}
            onExpand={() => setLightboxIndex(0)}
          />
        </div>
        <div className="col-span-12 lg:col-span-4 h-[320px] sm:h-[360px] lg:h-[420px]">
          <ScrollFrame
            src={tiendaItems[1].src}
            alt={tiendaItems[1].alt}
            label="mobile"
            maxHeight={390}
            isMobile
            onExpand={() => setLightboxIndex(1)}
          />
        </div>
      </div>

      {/* Reviews + Google */}
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-5 h-[220px] md:h-[260px]">
          <ScrollFrame
            src={tiendaItems[2].src}
            alt={tiendaItems[2].alt}
            label="Google · 4.9★ · 110 opiniones"
            maxHeight={230}
            onExpand={() => setLightboxIndex(2)}
          />
        </div>
        <div className="col-span-12 md:col-span-7 h-[220px] md:h-[260px]">
          <ScrollFrame
            src={tiendaItems[3].src}
            alt={tiendaItems[3].alt}
            label="pc gamer en banfield — 1er resultado"
            maxHeight={230}
            onExpand={() => setLightboxIndex(3)}
          />
        </div>
      </div>

      <p className="text-slate-600 text-xs mt-3 text-center">
        Posicionamiento orgánico en búsquedas locales — sin pauta publicitaria
      </p>

      {lightboxIndex !== null && (
        <Lightbox
          items={tiendaItems}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}

// ─── PANEL GALLERY ────────────────────────────────────────────────────────────

const panelItems: LightboxItem[] = [
  { src: "/casos/tryhardware/panel-dashboard.png", alt: "Dashboard — resumen general del sistema" },
  { src: "/casos/tryhardware/panel-catalogo.png", alt: "Catálogo unificado con comparación de proveedores" },
  { src: "/casos/tryhardware/panel-pricing.png", alt: "Motor de pricing — markup y ofertas automáticas" },
  { src: "/casos/tryhardware/panel-combos.png", alt: "Constructor de PCs y combos compatibles" },
  { src: "/casos/tryhardware/panel-ordenes.png", alt: "Órdenes de compra automáticas por proveedor" },
  { src: "/casos/tryhardware/panel-descripciones.png", alt: "Descripciones generadas con Gemini 2.5 Flash" },
]

const panelLabels = ["Dashboard", "Catálogo unificado", "Motor de pricing", "Constructor de PCs", "Órdenes de compra", "Descripciones con IA"]

export function PanelGallery() {
  const [current, setCurrent] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const item = panelItems[current]

  return (
    <div>
      <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-5">
        El sistema en producción
      </p>

      {/* Main screenshot */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-4">
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08]"
          style={{ background: "#0F0A20" }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <span className="text-xs text-slate-500 mx-auto">
            panel.try.com.ar — {panelLabels[current]}
          </span>
          <button
            onClick={() => setLightboxIndex(current)}
            className="text-slate-600 hover:text-slate-300 transition-colors"
            title="Ver completo"
          >
            <span className="material-symbols-outlined text-sm leading-none">open_in_full</span>
          </button>
        </div>
        <div
          className="relative overflow-y-auto cursor-pointer group bg-white"
          style={{
            maxHeight: "440px",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(124,58,237,0.3) transparent",
          }}
          onClick={() => setLightboxIndex(current)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt={item.alt} className="w-full h-auto block" />
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pt-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ background: "linear-gradient(transparent, rgba(240,240,240,0.92))" }}
          >
            <span className="text-xs text-slate-600 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs leading-none">open_in_full</span>
              Click para ver completo · scroll para explorar
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrent((p) => Math.max(0, p - 1))}
          disabled={current === 0}
          className="flex items-center gap-1 text-slate-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors text-sm px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
        >
          <span className="material-symbols-outlined text-sm leading-none">arrow_back</span>
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-1.5">
          {panelItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#7C3AED] w-6" : "bg-white/20 w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((p) => Math.min(panelItems.length - 1, p + 1))}
          disabled={current === panelItems.length - 1}
          className="flex items-center gap-1 text-slate-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors text-sm px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {panelItems.map((panelItem, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-xl overflow-hidden border-2 transition-all text-left ${
              i === current
                ? "border-[#7C3AED]"
                : "border-transparent hover:border-white/20"
            }`}
          >
            <div className="bg-white overflow-hidden h-16 md:h-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={panelItem.src} alt={panelLabels[i]} className="w-full h-auto block" />
            </div>
            <div className="px-2 py-1.5" style={{ background: "#0F0A20" }}>
              <p className="text-xs md:text-[10px] text-slate-500 truncate">{panelLabels[i]}</p>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={panelItems}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
