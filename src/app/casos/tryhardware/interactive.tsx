"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Icon } from "@/components/ui/icon"

// Lightbox con navegación

interface LightboxItem {
  src: string
  alt: string
  width: number
  height: number
  isMobile?: boolean
}

const thinScrollbar = "[scrollbar-color:var(--color-sand)_transparent] [scrollbar-width:thin]"

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

  // Sincroniza el índice cuando el lightbox se reabre en otra captura
  useEffect(() => {
    setIdx(startIndex)
  }, [startIndex])

  if (!mounted) return null

  const arrowClasses =
    "flex w-11 shrink-0 items-center justify-center text-bone/70 transition-[color,transform] duration-150 ease-out hover:text-bone active:scale-[0.97] disabled:cursor-default disabled:text-bone/10"

  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={item.alt} className="fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-ink/95">
      {/* Barra superior */}
      <div className="flex shrink-0 items-center justify-between border-b border-bone/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3 text-[13px]">
          {items.length > 1 && (
            <span className="shrink-0 text-bone/40">
              {idx + 1} / {items.length}
            </span>
          )}
          <p className="truncate text-bone-on-ink">{item.alt}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="ml-4 flex shrink-0 items-center gap-2 rounded-full bg-bone/10 px-4 py-2 text-sm font-medium text-bone transition-[background-color,transform] duration-150 ease-out hover:bg-bone/20 active:scale-[0.97]"
        >
          <Icon name="close" className="size-[18px]" />
          <span className="hidden sm:inline">Cerrar</span>
          <span className="sr-only sm:hidden">Cerrar</span>
        </button>
      </div>

      {/* Imagen + flechas */}
      <div className="relative flex flex-1 items-stretch overflow-hidden">
        {items.length > 1 && (
          <button
            type="button"
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={!hasPrev}
            aria-label="Captura anterior"
            className={arrowClasses}
          >
            <Icon name="arrow-right" className="size-8 rotate-180" />
          </button>
        )}

        {/* Área de imagen con scroll */}
        <div
          onClick={onClose}
          className={`flex min-h-0 flex-1 flex-col items-center overflow-y-auto overflow-x-hidden py-4 ${thinScrollbar}`}
        >
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes={item.isMobile ? "320px" : "100vw"}
            onClick={(e) => e.stopPropagation()}
            className={`my-auto block h-auto rounded-xl border border-bone/10 ${item.isMobile ? "w-auto max-w-[320px]" : "w-full max-w-full"}`}
          />
        </div>

        {items.length > 1 && (
          <button
            type="button"
            onClick={() => setIdx((i) => Math.min(items.length - 1, i + 1))}
            disabled={!hasNext}
            aria-label="Captura siguiente"
            className={arrowClasses}
          >
            <Icon name="arrow-right" className="size-8" />
          </button>
        )}
      </div>

      {/* Puntos de navegación */}
      {items.length > 1 && (
        <div className="flex shrink-0 justify-center border-t border-bone/10 px-4 py-2">
          {items.map((dot, i) => (
            <button
              key={dot.src}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Ver captura ${i + 1}`}
              aria-current={i === idx}
              className="group grid h-6 min-w-6 place-items-center"
            >
              <span
                className={`h-2 rounded-full transition-[width,background-color] duration-250 ease-out ${
                  i === idx ? "w-6 bg-violet" : "w-2 bg-bone/20 group-hover:bg-bone/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  )
}

// Marco con scroll (reutilizable)

interface ScrollFrameProps {
  item: LightboxItem
  label: string
  sizes: string
  onExpand: () => void
}

function ScrollFrame({ item, label, sizes, onExpand }: ScrollFrameProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-sand bg-bone">
      {/* Barra superior */}
      <div className="flex shrink-0 items-center gap-2 border-b border-sand px-3 py-2.5">
        <span className="flex-1 truncate text-center text-xs text-ink-muted">{label}</span>
        <button
          type="button"
          onClick={onExpand}
          aria-label={`Ver completo: ${label}`}
          className="shrink-0 text-ink-muted transition-[color,transform] duration-150 ease-out hover:text-ink active:scale-[0.97]"
        >
          <Icon name="arrow-up-right" className="size-4" />
        </button>
      </div>

      {/* Área con scroll */}
      <div className="group relative min-h-0 flex-1">
        <div className={`h-full cursor-pointer overflow-y-auto ${thinScrollbar}`} onClick={onExpand}>
          <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes={sizes} className="block h-auto w-full" />
        </div>

        {/* Pista al pasar el mouse */}
        <span className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs text-bone opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Icon name="arrow-up-right" className="size-3.5" />
          Click para ver completo
        </span>
      </div>
    </div>
  )
}

// Galería de la tienda

const tiendaItems: LightboxItem[] = [
  { src: "/casos/tryhardware/tienda-home-desktop.png", alt: "Tienda TryHardware: try.com.ar en desktop", width: 1918, height: 8498 },
  { src: "/casos/tryhardware/tienda-home-mobile.png", alt: "Tienda TryHardware: vista mobile", width: 488, height: 9527, isMobile: true },
  { src: "/casos/tryhardware/tienda-reviews.png", alt: "TryHardware: 4.9★ · 110 reseñas en Google", width: 1892, height: 862 },
  { src: "/casos/tryhardware/tienda-google.png", alt: "TryHardware: primer resultado para 'pc gamer en banfield'", width: 1892, height: 869 },
]

export function TiendaGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div>
      <h3 className="mb-6 text-title text-2xl">Resultado visual</h3>

      {/*
        Desktop: tienda arriba a la izquierda (cols 1-8, fila 1), captura mobile en la columna derecha
        completa (cols 9-12, lg:row-span-2 → 370 + 12 + 180 = 562px), reseñas y SEO 50/50 abajo a la izquierda.
      */}
      <div className="grid grid-cols-12 gap-3 lg:grid-rows-[370px_180px]">
        <div className="col-span-12 h-[500px] lg:col-span-8 lg:h-full">
          <ScrollFrame
            item={tiendaItems[0]}
            label="try.com.ar"
            sizes="(min-width: 1024px) 760px, 100vw"
            onExpand={() => setLightboxIndex(0)}
          />
        </div>

        <div className="col-span-12 h-[640px] lg:col-span-4 lg:row-span-2 lg:h-full">
          <ScrollFrame item={tiendaItems[1]} label="mobile" sizes="(min-width: 1024px) 370px, 100vw" onExpand={() => setLightboxIndex(1)} />
        </div>

        {/* Capturas apaisadas: en celular toman su altura natural para no recortar ni dejar huecos */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:h-full">
          <ScrollFrame
            item={tiendaItems[2]}
            label="Google · 4.9★ · 110 opiniones"
            sizes="(min-width: 768px) 50vw, 100vw"
            onExpand={() => setLightboxIndex(2)}
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:h-full">
          <ScrollFrame
            item={tiendaItems[3]}
            label="pc gamer en banfield: 1er resultado"
            sizes="(min-width: 768px) 50vw, 100vw"
            onExpand={() => setLightboxIndex(3)}
          />
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-ink-muted">Posicionamiento orgánico en búsquedas locales, sin pauta publicitaria.</p>

      {lightboxIndex !== null && (
        <Lightbox items={tiendaItems} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  )
}

// Galería del panel

const panelItems: LightboxItem[] = [
  { src: "/casos/tryhardware/panel-dashboard.png", alt: "Dashboard: resumen general del sistema", width: 1911, height: 865 },
  { src: "/casos/tryhardware/panel-catalogo.png", alt: "Catálogo unificado con comparación de proveedores", width: 1895, height: 861 },
  { src: "/casos/tryhardware/panel-pricing.png", alt: "Motor de pricing: markup y ofertas automáticas", width: 1892, height: 862 },
  { src: "/casos/tryhardware/panel-combos.png", alt: "Constructor de PCs y combos compatibles", width: 1889, height: 863 },
  { src: "/casos/tryhardware/panel-ordenes.png", alt: "Órdenes de compra automáticas por proveedor", width: 1893, height: 862 },
  { src: "/casos/tryhardware/panel-descripciones.png", alt: "Descripciones generadas con Gemini 2.5 Flash", width: 1340, height: 761 },
]

const panelLabels = ["Dashboard", "Catálogo unificado", "Motor de pricing", "Constructor de PCs", "Órdenes de compra", "Descripciones con IA"]

const navButton =
  "flex items-center gap-1 rounded-full border border-sand px-4 py-2 text-sm text-ink-soft transition-[color,border-color,transform] duration-150 ease-out hover:border-ink hover:text-ink active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-30"

export function PanelGallery() {
  const [current, setCurrent] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const item = panelItems[current]

  return (
    <div>
      <h3 className="mb-6 text-title text-2xl">El sistema en producción</h3>

      {/* Captura principal */}
      <div className="mb-4 overflow-hidden rounded-[var(--radius-card)] border border-sand bg-bone">
        <div className="flex items-center gap-2 border-b border-sand px-4 py-2.5">
          <span className="mx-auto truncate text-xs text-ink-muted">panel.try.com.ar · {panelLabels[current]}</span>
          <button
            type="button"
            onClick={() => setLightboxIndex(current)}
            aria-label={`Ver completo: ${panelLabels[current]}`}
            className="shrink-0 text-ink-muted transition-[color,transform] duration-150 ease-out hover:text-ink active:scale-[0.97]"
          >
            <Icon name="arrow-up-right" className="size-4" />
          </button>
        </div>
        <div className="group relative">
          <div
            className={`max-h-[440px] cursor-pointer overflow-y-auto ${thinScrollbar}`}
            onClick={() => setLightboxIndex(current)}
          >
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <span className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs text-bone opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <Icon name="arrow-up-right" className="size-3.5" />
            Click para ver completo · scroll para explorar
          </span>
        </div>
      </div>

      {/* Navegación */}
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrent((p) => Math.max(0, p - 1))}
          disabled={current === 0}
          aria-label="Captura anterior"
          className={navButton}
        >
          <Icon name="arrow-right" className="size-4 rotate-180" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center">
          {panelItems.map((dot, i) => (
            <button
              key={dot.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Ver ${panelLabels[i]}`}
              aria-current={i === current}
              className="group grid h-6 min-w-6 place-items-center"
            >
              <span
                className={`h-2 rounded-full transition-[width,background-color] duration-300 ease-out ${
                  i === current ? "w-6 bg-violet" : "w-2 bg-sand group-hover:bg-ink-muted"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setCurrent((p) => Math.min(panelItems.length - 1, p + 1))}
          disabled={current === panelItems.length - 1}
          aria-label="Captura siguiente"
          className={navButton}
        >
          <span className="hidden sm:inline">Siguiente</span>
          <Icon name="arrow-right" className="size-4" />
        </button>
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
        {panelItems.map((panelItem, i) => (
          <button
            key={panelItem.src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-pressed={i === current}
            className={`overflow-hidden rounded-xl border-2 bg-bone text-left transition-[border-color,transform] duration-150 ease-out active:scale-[0.97] ${
              i === current ? "border-violet" : "border-transparent hover:border-sand"
            }`}
          >
            <div className="relative h-16 overflow-hidden md:h-12">
              <Image src={panelItem.src} alt="" fill sizes="200px" className="object-cover object-top" />
            </div>
            <p className="truncate px-2 py-1.5 text-xs text-ink-muted md:text-[10px]">{panelLabels[i]}</p>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox items={panelItems} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  )
}
