import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TiendaGallery, PanelGallery } from "./interactive";

export const metadata: Metadata = {
  title: "TryHardware — Caso de Éxito | Avanzio",
  description:
    "Cómo rediseñamos la tienda online y construimos el panel de gestión de TryHardware: desde una tienda lenta sin pagos hasta 100+ pedidos mensuales y 5 horas diarias liberadas con automatización.",
};

const stackTienda = [
  { name: "WordPress", color: "text-blue-400" },
  { name: "WooCommerce", color: "text-[#9B59B6]" },
  { name: "PHP", color: "text-indigo-300" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "MercadoPago", color: "text-sky-400" },
  { name: "Payway", color: "text-emerald-400" },
  { name: "Correo Argentino", color: "text-yellow-300" },
  { name: "Andreani", color: "text-orange-400" },
];

const stackPanel = [
  { name: "Next.js 14", color: "text-slate-100" },
  { name: "TypeScript", color: "text-blue-300" },
  { name: "SQLite", color: "text-sky-300" },
  { name: "Drizzle ORM", color: "text-green-400" },
  { name: "shadcn/ui", color: "text-slate-200" },
  { name: "Recharts", color: "text-[#A78BFA]" },
  { name: "Gemini 2.5 Flash", color: "text-blue-400" },
  { name: "NextAuth", color: "text-purple-300" },
  { name: "Railway", color: "text-violet-400" },
];

const results = [
  { label: "Pedidos por mes", value: "+3×", sub: "de ~30 a más de 100" },
  { label: "Productos en catálogo", value: "13.700+", sub: "~6.000 con stock activo" },
  { label: "Tiempo liberado", value: "5 hs/día", sub: "tareas que hace el sistema solo" },
  { label: "Reseñas en Google", value: "4.9★", sub: "110 opiniones verificadas" },
  { label: "Proveedores integrados", value: "13", sub: "API directa + archivos" },
  { label: "Sync automático", value: "15 min", sub: "WooCommerce siempre actualizado" },
];

export default function TryHardwarePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-20" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 hero-animate hero-animate-1">
            <Link
              href="/casos"
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-base leading-none">arrow_back</span>
              Casos de éxito
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-400 text-sm">TryHardware</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="hero-animate hero-animate-1 inline-block bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20 rounded-full text-xs font-bold px-3 py-1 tracking-wider uppercase mb-6">
                Tienda Online + Panel de Gestión
              </span>
              <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                TryHardware
              </h1>
              <p className="hero-animate hero-animate-3 text-xl text-slate-300 leading-relaxed mb-8">
                Dos sistemas construidos para el mismo negocio en momentos distintos.
                Primero resolvimos la tienda. Después automatizamos todo lo que pasaba por detrás.
              </p>
              <div className="hero-animate hero-animate-4 flex flex-wrap gap-3">
                <a
                  href="https://try.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-base leading-none">open_in_new</span>
                  Ver try.com.ar
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[#7C3AED]/50 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Quiero algo similar
                </Link>
              </div>
            </div>

            {/* Hero screenshot */}
            <div className="hero-animate hero-animate-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div
                className="border-b border-white/10 px-4 py-3 flex items-center gap-3"
                style={{ background: "#0F0A20" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div
                  className="flex-1 rounded-md px-3 py-1 text-xs text-slate-400 text-center"
                  style={{ background: "#080612" }}
                >
                  try.com.ar
                </div>
              </div>
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src="/casos/tryhardware/tienda-home-desktop.png"
                  alt="Tienda TryHardware — try.com.ar"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ECOSISTEMA ─── */}
      <section className="py-8 sm:py-14 border-y border-white/[0.06]" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            TryHardware no fue un proyecto único. Fueron dos — separados por meses y con un
            problema distinto cada vez. Los dos siguen en producción hoy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
            <span className="flex items-center gap-2.5 bg-[#1A1232] border border-[#7C3AED]/30 rounded-full sm:rounded-r-none px-5 py-2.5 text-sm w-full sm:w-auto justify-center sm:justify-start">
              <span className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">
                1
              </span>
              <span className="text-slate-200 font-semibold">Tienda Online</span>
              <span className="text-slate-500 text-xs">· 3 meses</span>
            </span>
            <span className="h-px w-8 bg-[#7C3AED]/40 hidden sm:block" />
            <span className="flex items-center gap-2.5 bg-[#1A1232] border border-[#7C3AED]/30 rounded-full sm:rounded-l-none px-5 py-2.5 text-sm w-full sm:w-auto justify-center sm:justify-start">
              <span className="w-5 h-5 rounded-full bg-[#7C3AED]/50 flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">
                2
              </span>
              <span className="text-slate-200 font-semibold">Panel de Gestión</span>
              <span className="text-slate-500 text-xs">· 2 meses</span>
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PROYECTO 01 — TIENDA ONLINE                           */}
      {/* ═══════════════════════════════════════════════════════ */}

      <section className="border-b border-[#7C3AED]/20 py-10" style={{ background: "rgba(124,58,237,0.04)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <span
                className="text-5xl sm:text-7xl font-black font-mono leading-none select-none"
                style={{ color: "rgba(124,58,237,0.18)" }}
              >
                01
              </span>
              <div>
                <p className="hidden sm:block text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-1">Proyecto</p>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Tienda Online</h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-slate-400 text-sm">
              <span className="material-symbols-outlined text-base leading-none text-[#7C3AED]">schedule</span>
              3 meses · De diagnóstico a producción
            </span>
          </div>
        </div>
      </section>

      {/* P1: EL PROBLEMA */}
      <section className="py-16 md:py-24" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Grid sin items-start para que ambas columnas estiren */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

            {/* Left — before screenshot estira para llenar la columna */}
            <div className="reveal flex flex-col">
              <div className="mb-3 flex items-center gap-2 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Antes de Avanzio</span>
              </div>
              <div
                className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-red-500/10 min-h-[320px]"
                style={{ filter: "grayscale(0.55) brightness(0.72) saturate(0.5)" }}
              >
                {/* Chrome */}
                <div
                  className="flex-shrink-0 border-b border-white/10 px-4 py-2.5 flex items-center gap-3"
                  style={{ background: "#080612" }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  </div>
                  <div
                    className="flex-1 rounded px-2 py-0.5 text-xs text-slate-500 text-center"
                    style={{ background: "#1A1232" }}
                  >
                    tryhardware.com.ar
                  </div>
                </div>
                {/* Image fills remaining space */}
                <div className="flex-1 relative">
                  <Image
                    src="/casos/tryhardware/before-tienda.png"
                    alt="Tienda antigua de TryHardware"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Right — problem text + pain points */}
            <div className="reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="inline-block text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
                El problema
              </span>
              <h3 className="text-3xl font-bold text-white leading-tight mb-5">
                Una tienda que perdía clientes antes de que pudieran comprar
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                TryHardware ya tenía una tienda en WooCommerce cuando nos contactaron.
                El problema no era la plataforma — era todo lo que faltaba. Cargaba lento,
                no tenía integración de pagos ni de envíos, y el checkout era el genérico
                sin adaptación alguna a su flujo de trabajo.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Los pocos clientes que llegaban tenían una mala experiencia. Los que lograban
                completar un pedido eran la excepción. Y la mayoría accedía desde el celular
                — desde una web que no estaba diseñada para eso.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: "bolt",
                    label: "Tienda lenta con imágenes sin optimizar",
                    desc: "Cada carga perdía usuarios. Impacto directo en conversión y en el posicionamiento SEO.",
                  },
                  {
                    icon: "credit_card_off",
                    label: "Sin integración de pagos",
                    desc: "No había MercadoPago ni tarjeta. Completar una compra dependía de coordinación manual.",
                  },
                  {
                    icon: "local_shipping",
                    label: "Sin correo integrado",
                    desc: "Sin Correo Argentino ni Andreani. Los envíos se coordinaban por fuera de la tienda.",
                  },
                  {
                    icon: "phone_iphone",
                    label: "Sin diseño mobile",
                    desc: "La mayoría de los usuarios entraba desde el celular a una web que no estaba pensada para eso.",
                  },
                  {
                    icon: "bug_report",
                    label: "Ataques constantes de bots",
                    desc: "Múltiples accesos maliciosos intentando tumbar el servidor sin ninguna protección activa.",
                  },
                ].map((pain) => (
                  <div
                    key={pain.label}
                    className="flex items-start gap-4 p-4 rounded-xl border border-red-500/10"
                    style={{ background: "rgba(239,68,68,0.04)" }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-red-400 text-lg">{pain.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{pain.label}</p>
                      <p className="text-slate-400 text-sm">{pain.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* P1: LA SOLUCIÓN */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14 reveal">
            <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
              La solución
            </span>
            <h3 className="text-3xl font-bold text-white mb-4">
              Rediseño completo, manteniendo lo que funcionaba
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Mantuvimos WooCommerce porque ya tenían catálogo, clientes e historial de pedidos.
              Cambiamos todo lo demás: el diseño, el dominio, la infraestructura de pagos y envíos,
              y la experiencia completa de compra — pensada mobile-first desde el día uno.
            </p>
          </div>

          {/* Main cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {[
              {
                icon: "phone_iphone",
                color: "text-[#A78BFA]",
                bg: "rgba(124,58,237,0.10)",
                title: "Rediseño mobile-first",
                desc: "Diseño a medida desde cero. Layout pensado para el celular, donde está la mayoría de los usuarios. Nuevo dominio más corto (try.com.ar), todas las imágenes del catálogo optimizadas para carga instantánea.",
                delay: "0.05s",
              },
              {
                icon: "local_shipping",
                color: "text-sky-400",
                bg: "rgba(56,189,248,0.10)",
                title: "Envíos reales integrados",
                desc: "Correo Argentino y Andreani conectados directamente a la tienda. Sin plataformas intermediarias que encarecen el servicio sin agregar nada a cambio.",
                delay: "0.12s",
              },
              {
                icon: "payments",
                color: "text-emerald-400",
                bg: "rgba(16,185,129,0.10)",
                title: "Pagos con tarjeta",
                desc: "MercadoPago y Payway integrados. Checkout refinado con menos fricción y pasos más claros — diseñado para convertir, no para cumplir.",
                delay: "0.19s",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1A1232] rounded-2xl p-7 border border-white/[0.07] reveal card-hover cursor-default"
                style={{ transitionDelay: item.delay }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.bg }}
                >
                  <span className={`material-symbols-outlined ${item.color} text-2xl`}>{item.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Secondary highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-16">
            {[
              {
                icon: "search",
                color: "text-amber-400",
                title: "SEO y posicionamiento",
                desc: "Primeros resultados en Google para búsquedas locales. Sin pauta publicitaria.",
              },
              {
                icon: "loyalty",
                color: "text-pink-400",
                title: "Fidelización y newsletter",
                desc: "Sistema de suscripción con ofertas exclusivas para la comunidad TryHardware.",
              },
              {
                icon: "mark_email_read",
                color: "text-green-400",
                title: "Automatización de postventa",
                desc: "WhatsApp y correos automáticos con flujo que incentiva reseñas en Google.",
              },
              {
                icon: "security",
                color: "text-slate-300",
                title: "Seguridad reforzada",
                desc: "Protección activa contra los ataques de bots que antes caían sobre el servidor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 reveal"
              >
                <span className={`material-symbols-outlined ${item.color} text-xl block mb-3`}>
                  {item.icon}
                </span>
                <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tienda gallery — client component */}
          <div className="reveal">
            <TiendaGallery />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PROYECTO 02 — PANEL DE GESTIÓN                        */}
      {/* ═══════════════════════════════════════════════════════ */}

      <section className="border-y border-[#7C3AED]/20 py-10" style={{ background: "rgba(124,58,237,0.04)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <span
                className="text-5xl sm:text-7xl font-black font-mono leading-none select-none"
                style={{ color: "rgba(124,58,237,0.18)" }}
              >
                02
              </span>
              <div>
                <p className="hidden sm:block text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-1">Proyecto</p>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Panel de Gestión</h2>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
              <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-base leading-none text-[#7C3AED]">rocket_launch</span>
                MVP en 2 semanas
              </span>
              <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-base leading-none text-[#7C3AED]">schedule</span>
                Sistema completo en 2 meses
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* P2: EL PROBLEMA */}
      <section className="py-16 md:py-24" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Excel full-width — documento exhibit */}
          <div className="reveal mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-wider">El proceso manual</span>
            </div>
            <div
              className="rounded-2xl overflow-hidden border border-red-500/10"
              style={{ filter: "sepia(0.25) brightness(0.82) saturate(0.65)" }}
            >
              <div
                className="border-b border-white/10 px-4 py-2.5 flex items-center gap-2"
                style={{ background: "#080612" }}
              >
                <span className="material-symbols-outlined text-green-700 text-sm leading-none">table_chart</span>
                <span className="text-xs text-slate-500 truncate">
                  Lista_Precios_Proveedor_Final_v3_USAR_ESTE.xlsx
                </span>
              </div>
              <div
                style={{
                  background: "#1a1025",
                  scrollbarWidth: "thin" as const,
                  scrollbarColor: "rgba(124,58,237,0.25) transparent",
                  overflowX: "auto",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/casos/tryhardware/before-excel.png"
                  alt="Lista de precios en Excel — proceso manual"
                  className="w-full h-auto block"
                />
              </div>
            </div>
            <p className="text-slate-600 text-xs mt-2.5 text-center italic">
              Actualizado manualmente a diario. Multiplicado por 13 proveedores.
            </p>
          </div>

          {/* 2 cols equilibradas: texto | pain points */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

            {/* Left — heading + descripción */}
            <div className="reveal">
              <span className="inline-block text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
                El problema
              </span>
              <h3 className="text-3xl font-bold text-white leading-tight mb-5">
                Más de 5 horas al día perdidas en tareas que podía hacer el sistema
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Meses después del lanzamiento de la tienda, volvieron con un problema nuevo.
                La tienda funcionaba, los pedidos crecían — pero el back-office era un caos.
                Más de 5 horas diarias actualizando precios a mano desde listas de proveedores
                en Excel.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Precios en dólares con cotización variable. Formatos distintos por cada proveedor.
                Stock que se agotaba entre que actualizaban y subían los cambios a la tienda.
                Clientes haciendo pedidos de productos sin stock o con precio desactualizado.
                Y más de 13.000 productos sin una sola descripción publicada.
              </p>
            </div>

            {/* Right — pain points */}
            <div className="reveal space-y-3" style={{ transitionDelay: "0.1s" }}>
              {[
                {
                  icon: "schedule",
                  label: "+5 horas/día en actualizaciones manuales",
                  desc: "Cada proveedor, cada día, con su propio formato de lista. Trabajo repetitivo sin fin.",
                },
                {
                  icon: "currency_exchange",
                  label: "Precios en USD con cotización variable",
                  desc: "El tipo de cambio cambiaba varias veces al día y los precios siempre estaban desactualizados.",
                },
                {
                  icon: "table_chart",
                  label: "13 proveedores con formatos distintos",
                  desc: "Algunos mandaban Excel, otros CSV. Sin forma de centralizar ni comparar.",
                },
                {
                  icon: "error_outline",
                  label: "Pedidos con errores de stock y precio",
                  desc: "Un cliente compraba y el producto ya no tenía stock o costaba diferente. Sin alertas.",
                },
                {
                  icon: "description",
                  label: "13.700+ productos sin descripción",
                  desc: "El catálogo era enorme pero sin información de cada producto para el usuario final.",
                },
              ].map((pain) => (
                <div
                  key={pain.label}
                  className="flex items-start gap-4 p-4 rounded-xl border border-red-500/10"
                  style={{ background: "rgba(239,68,68,0.04)" }}
                >
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-red-400 text-lg">{pain.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">{pain.label}</p>
                    <p className="text-slate-400 text-sm">{pain.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* P2: LA SOLUCIÓN */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14 reveal">
            <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
              La solución
            </span>
            <h3 className="text-3xl font-bold text-white mb-4">
              Un sistema que entiende el negocio de hardware en Argentina
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Construimos el panel en Next.js — bajo costo de hosting, carga instantánea en el
              navegador. El MVP estuvo en uso a las 2 semanas. El sistema completo llevó 2 meses,
              moldeado por el feedback constante del equipo de TryHardware.
            </p>
          </div>

          {/* 6 main feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {[
              {
                icon: "hub",
                color: "text-[#A78BFA]",
                bg: "rgba(124,58,237,0.10)",
                title: "13 proveedores conectados",
                desc: "Algunos integrados vía API directa con sincronización automática en background. Otros, sin esa posibilidad, a través de sus listas de precios en Excel o CSV. El sistema entiende el formato de cada uno.",
                delay: "0.04s",
              },
              {
                icon: "price_change",
                color: "text-sky-400",
                bg: "rgba(56,189,248,0.10)",
                title: "Pricing automático en ARS",
                desc: "Tipo de cambio en tiempo real + impuestos diferenciados por proveedor (IVA, IIBB, impuestos internos) + markup ajustable. El precio final en pesos se calcula solo, siempre actualizado.",
                delay: "0.10s",
              },
              {
                icon: "compare_arrows",
                color: "text-emerald-400",
                bg: "rgba(16,185,129,0.10)",
                title: "Catálogo unificado",
                desc: "Compara precios entre proveedores para el mismo producto, muestra historial, alerta si algo sube o baja demasiado, y sugiere el proveedor más barato con stock disponible.",
                delay: "0.16s",
              },
              {
                icon: "auto_awesome",
                color: "text-amber-400",
                bg: "rgba(245,158,11,0.10)",
                title: "Descripciones con IA",
                desc: "Gemini 2.5 Flash genera descripciones HTML para los 13.700+ productos usando datasheets oficiales y fuentes técnicas. Lo que era imposible a mano, hoy se resuelve en masa.",
                delay: "0.22s",
              },
              {
                icon: "build",
                color: "text-teal-400",
                bg: "rgba(20,184,166,0.10)",
                title: "Constructor de PCs y combos",
                desc: "Arma configuraciones verificando compatibilidad y eligiendo los componentes más económicos con stock. El precio se actualiza solo — sin importar si un componente cambia de proveedor o precio.",
                delay: "0.28s",
              },
              {
                icon: "sync",
                color: "text-orange-400",
                bg: "rgba(249,115,22,0.10)",
                title: "Sync automático a WooCommerce",
                desc: "Cada 15 minutos escanea cambios de precio y stock y actualiza la tienda. Con alertas ante anomalías para evitar que errores de proveedores se publiquen directo al cliente.",
                delay: "0.34s",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1A1232] rounded-2xl p-7 border border-white/[0.07] reveal card-hover cursor-default"
                style={{ transitionDelay: item.delay }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.bg }}
                >
                  <span className={`material-symbols-outlined ${item.color} text-2xl`}>{item.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Secondary features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 md:mb-16">
            {[
              {
                icon: "receipt_long",
                color: "text-violet-400",
                title: "Órdenes de compra automáticas",
                desc: "Detecta pedidos pagos en WooCommerce, identifica los productos sin stock físico y genera las órdenes de compra agrupadas por proveedor — con márgenes y precios en tiempo real.",
              },
              {
                icon: "admin_panel_settings",
                color: "text-slate-300",
                title: "Roles Admin y Viewer + 2FA",
                desc: "Administradores con acceso total. Empleados del local con consulta de precios y stock sin riesgo de modificar datos. Autenticación con doble factor (TOTP) opcional por usuario.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 flex items-start gap-5 reveal"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <span className={`material-symbols-outlined ${item.color} text-xl`}>{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Panel gallery — client component */}
          <div className="reveal">
            <PanelGallery />
          </div>
        </div>
      </section>

      {/* ─── RESULTADOS ─── */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10 md:mb-16 reveal">
            <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
              Resultados
            </span>
            <h2 className="text-4xl font-bold text-white">Números reales</h2>
            <p className="text-slate-500 mt-3 text-sm">Datos del sistema en producción · Marzo 2026</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal" style={{ transitionDelay: "0.1s" }}>
            {results.map((r) => (
              <div
                key={r.label}
                className="bg-[#1A1232] rounded-2xl p-4 sm:p-6 text-center border border-white/[0.08] card-hover cursor-default"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#A78BFA] mb-1 leading-tight">{r.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{r.label}</p>
                <p className="text-xs text-slate-500">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE (rediseñada) ─── */}
      <section
        className="py-16 md:py-28 border-t border-white/[0.06] relative overflow-hidden"
        style={{ background: "#080612" }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 70% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[900px] mx-auto px-6 relative">
          <div className="reveal">
            {/* Stars */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {["★", "★", "★", "★", "★"].map((s, i) => (
                  <span key={i} className="text-amber-400 text-xl">
                    {s}
                  </span>
                ))}
              </div>
              <span className="text-slate-500 text-sm">4.9 · 110 opiniones verificadas en Google</span>
            </div>

            {/* Large decorative quote character */}
            <div
              className="text-[96px] leading-none mb-[-28px] select-none"
              style={{
                color: "rgba(124,58,237,0.2)",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <p className="text-xl md:text-[1.7rem] text-white font-medium leading-relaxed mb-8 md:mb-10">
              Lo que más me sorprendió fue cuánto tiempo le estábamos regalando a tareas que hoy
              hace el sistema solo. La tienda la mejoré por los clientes.{" "}
              <span className="text-[#A78BFA]">
                El panel lo hice por mí — y fue la mejor decisión que tomé para el negocio.
              </span>
            </p>

            {/* Attribution + stat pills */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#8B5CF6] font-black text-sm">IV</span>
                </div>
                <div>
                  <cite className="text-white font-semibold not-italic block">Iván</cite>
                  <span className="text-slate-500 text-sm">Dueño, TryHardware · Banfield, Buenos Aires</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { value: "+3×", label: "pedidos/mes" },
                  { value: "5 hs/día", label: "liberadas" },
                  { value: "4.9★", label: "en Google" },
                ].map((stat) => (
                  <span
                    key={stat.label}
                    className="flex items-center gap-1.5 border border-white/10 rounded-full px-3 py-1.5 text-sm"
                    style={{ background: "rgba(124,58,237,0.08)" }}
                  >
                    <span className="text-[#A78BFA] font-bold">{stat.value}</span>
                    <span className="text-slate-400">{stat.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACK ─── */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]" style={{ background: "#0F0A20" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#7C3AED] uppercase tracking-widest text-sm font-bold mb-4">
              Tecnologías
            </span>
            <h2 className="text-3xl font-bold text-white">Stack utilizado</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 reveal" style={{ transitionDelay: "0.1s" }}>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-4 border-b border-white/[0.06] pb-3">
                Tienda Online
              </p>
              <div className="flex flex-wrap gap-2">
                {stackTienda.map((tech) => (
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
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-4 border-b border-white/[0.06] pb-3">
                Panel de Gestión
              </p>
              <div className="flex flex-wrap gap-2">
                {stackPanel.map((tech) => (
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
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 border-t border-white/[0.06]" style={{ background: "#080612" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/casos/santa-benedetta"
              className="group reveal bg-[#1A1232] border border-white/[0.08] hover:border-amber-500/30 rounded-2xl p-8 transition-colors"
            >
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-3">
                Siguiente caso
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Santa Benedetta →
              </h3>
              <p className="text-slate-400 text-sm">
                Tienda online para fiambrería artesanal con MercadoPago y envío local.
              </p>
            </Link>
            <Link
              href="/contacto"
              className="reveal bg-[#7C3AED] hover:bg-[#6D28D9] rounded-2xl p-8 transition-colors"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="text-[#A78BFA] text-xs font-bold uppercase tracking-wider block mb-3">
                ¿Te interesa?
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Hablemos de tu proyecto →</h3>
              <p className="text-white/70 text-sm">
                Primera reunión sin cargo. Te respondemos en menos de 24 horas.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
