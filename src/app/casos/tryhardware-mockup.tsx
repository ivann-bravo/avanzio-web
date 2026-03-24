"use client"

import { useState } from "react"
import Image from "next/image"

const slides = [
  {
    url: "try.com.ar",
    label: "Tienda",
    src: "/casos/tryhardware/tienda-home-desktop.png",
    alt: "Tienda TryHardware — try.com.ar",
    scrollable: true,
  },
  {
    url: "panel.try.com.ar",
    label: "Panel",
    src: "/casos/tryhardware/panel-dashboard.png",
    alt: "Panel de Gestión — Dashboard",
    scrollable: false,
  },
]

export default function TryHardwareMockup() {
  const [active, setActive] = useState(0)
  const slide = slides[active]

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
      {/* Chrome bar */}
      <div
        className="border-b border-white/10 px-4 py-3 flex items-center gap-3"
        style={{ background: "#080612" }}
      >
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div
          className="flex-1 rounded-md px-3 py-1 text-xs text-slate-400 text-center truncate"
          style={{ background: "#1A1232" }}
        >
          {slide.url}
        </div>
      </div>

      {/* Tab switcher */}
      <div
        className="flex border-b border-white/10"
        style={{ background: "#0c0820" }}
      >
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`flex-1 py-2 text-xs font-semibold transition-colors ${
              active === i
                ? "text-white border-b-2 border-[#7C3AED]"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Image area — aspect ratio matches panel image (1911×865) so it shows complete */}
      <div
        style={{
          aspectRatio: "1911/865",
          overflowY: slide.scrollable ? "auto" : "hidden",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(124,58,237,0.4) transparent",
        }}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          width={slide.scrollable ? 1918 : 1911}
          height={slide.scrollable ? 8498 : 865}
          style={{ width: "100%", height: "auto", display: "block", userSelect: "none", pointerEvents: "none" }}
          draggable={false}
        />
      </div>
    </div>
  )
}
