import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { CaseHero, FeatureGrid, NextCase, ResultsBlock } from "@/components/case/case-sections";
import { FinalCta } from "@/components/sections/final-cta";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { PanelGallery, TiendaGallery } from "./interactive";

export const metadata: Metadata = {
  title: "TryHardware: caso de éxito",
  description:
    "Cómo rediseñamos la tienda online y construimos el panel de gestión de TryHardware: desde una tienda lenta sin pagos hasta 100+ pedidos mensuales y 5 horas diarias liberadas con automatización.",
};

const projects = [
  { id: "tienda-online", name: "Tienda online", duration: "3 meses" },
  { id: "panel-de-gestion", name: "Panel de gestión", duration: "2 meses" },
] as const;

const tiendaFeatures = [
  {
    title: "Pensada para el celular",
    desc: "Diseño propio desde cero, un dominio más corto (try.com.ar) y fotos livianas para que cargue al instante.",
  },
  { title: "Pagos con tarjeta", desc: "MercadoPago y Payway integrados, con una compra de menos pasos y más clara." },
  { title: "Envíos integrados", desc: "Correo Argentino y Andreani conectados directo a la tienda, sin intermediarios que encarezcan el envío." },
  { title: "Primeros en Google", desc: "Aparece arriba en las búsquedas de la zona sin pagar publicidad." },
  { title: "Postventa automática", desc: "Mensajes de WhatsApp y mails que salen solos después de cada compra y piden la reseña en Google." },
  { title: "Protegida contra bots", desc: "Los ataques que antes caían sobre el servidor ahora se frenan antes de llegar." },
] as const;

const panelFeatures = [
  {
    title: "Proveedores conectados",
    desc: "Los 13 proveedores entran solos al sistema: algunos de forma automática y otros subiendo su lista de precios, sea cual sea el formato.",
  },
  {
    title: "Precios en pesos, solos",
    desc: "Dólar del día, impuestos de cada proveedor y margen: el precio final se calcula solo y está siempre al día.",
  },
  {
    title: "Catálogo unificado",
    desc: "Compara cada producto entre proveedores, sugiere el más barato con stock y escribe las descripciones de los 13.700 productos con inteligencia artificial.",
  },
  {
    title: "La tienda siempre al día",
    desc: "Cada 15 minutos actualiza precios y stock en la tienda, y avisa si algo cambia de forma rara antes de que lo vea un cliente.",
  },
  {
    title: "Armado de PCs y combos",
    desc: "Arma equipos compatibles con los componentes más convenientes que hay en stock, y el precio se ajusta solo.",
  },
  {
    title: "Órdenes de compra automáticas",
    desc: "Cuando entra un pedido de algo que no está en el local, genera la orden de compra al proveedor que corresponde.",
  },
] as const;

const results = [
  { label: "Pedidos por mes", value: "+3×", sub: "de ~30 a más de 100" },
  { label: "Productos en catálogo", value: "13.700+", sub: "~6.000 con stock activo" },
  { label: "Tiempo liberado", value: "5 hs/día", sub: "tareas que hace el sistema solo" },
  { label: "Reseñas en Google", value: "4.9★", sub: "110 opiniones verificadas" },
  { label: "Proveedores integrados", value: "13", sub: "automáticos o por archivo" },
  { label: "Actualización de la tienda", value: "15 min", sub: "precios y stock, solos" },
] as const;

const stagger = (i: number) => ({ "--reveal-delay": `${i * 70}ms` }) as CSSProperties;

/** Encabezado de cada uno de los dos proyectos: nombre, tiempos, contexto y la captura del "antes". */
function ProjectIntro({
  id,
  title,
  meta,
  paragraphs,
  media,
  wideMedia = false,
}: {
  id: string;
  title: ReactNode;
  meta: readonly string[];
  paragraphs: readonly string[];
  media: ReactNode;
  wideMedia?: boolean;
}) {
  return (
    <Section id={id} aria-labelledby={`${id}-title`}>
      <div className="reveal flex flex-col gap-6 border-b border-ink pb-8 sm:flex-row sm:items-end sm:justify-between">
        <h2 id={`${id}-title`} className="text-impact text-display-lg">
          {title}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {meta.map((m) => (
            <li key={m} className="rounded-full border border-sand bg-bone px-4 py-2 text-sm text-ink-soft">
              {m}
            </li>
          ))}
        </ul>
      </div>
      <div className={`mt-12 grid grid-cols-[minmax(0,1fr)] gap-12 ${wideMedia ? "" : "lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16"}`}>
        <div className="reveal max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-soft">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="reveal" style={stagger(1)}>
          {media}
        </div>
      </div>
    </Section>
  );
}

export default function TryHardwarePage() {
  return (
    <>
      <CaseHero
        kind="Tienda online y panel de gestión"
        name="TryHardware"
        intro="Dos sistemas construidos para el mismo negocio en momentos distintos. Primero resolvimos la tienda. Después automatizamos todo lo que pasaba por detrás."
        url="https://try.com.ar"
        image={{ src: "/casos/tryhardware/tienda-home-hero.jpg", alt: "Tienda online de TryHardware" }}
      />

      <Section tone="bone" aria-label="Los dos proyectos">
        <p className="reveal max-w-[44ch] text-2xl font-semibold leading-snug sm:text-3xl">
          TryHardware no fue un proyecto único. Fueron dos, separados por meses y con un problema distinto cada vez. Los dos siguen en
          producción hoy.
        </p>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.id} className="reveal" style={stagger(i)}>
              <a
                href={`#${p.id}`}
                className="group flex items-center justify-between gap-4 rounded-[var(--radius-card)] border border-sand bg-paper p-6 transition-[border-color,transform] duration-200 ease-out hover:border-ink active:scale-[0.97]"
              >
                <span>
                  <span className="block text-xl font-bold">{p.name}</span>
                  <span className="mt-1 block text-ink-muted">{p.duration}</span>
                </span>
                <Icon name="arrow-right" className="size-6 shrink-0 rotate-90 text-ink-soft transition-colors duration-200 group-hover:text-ink" />
              </a>
            </li>
          ))}
        </ol>
      </Section>

      {/* Proyecto 1: tienda online */}
      <ProjectIntro
        id="tienda-online"
        title={
          <>
            Tienda <span className="text-accent text-violet">online</span>
          </>
        }
        meta={["3 meses · De diagnóstico a producción"]}
        paragraphs={[
          "TryHardware ya tenía una tienda online cuando nos contactaron. El problema no era la plataforma: era todo lo que le faltaba. Cargaba lento, no cobraba online, los envíos se arreglaban por fuera y la compra era la que venía de fábrica.",
          "Los pocos clientes que llegaban tenían una mala experiencia, y los que terminaban un pedido eran la excepción. Encima, la mayoría entraba desde el celular a una web que no estaba pensada para eso.",
        ]}
        media={
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-sand bg-before-card">
              <Image
                src="/casos/tryhardware/before-tienda.png"
                alt="Tienda antigua de TryHardware"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top grayscale"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-muted">Antes de Avanzio: tryhardware.com.ar</figcaption>
          </figure>
        }
      />

      <FeatureGrid
        title={
          <>
            Rediseño completo, manteniendo <span className="text-accent text-violet">lo que funcionaba.</span>
          </>
        }
        intro="Mantuvimos la plataforma que ya usaban porque tenía el catálogo, los clientes y el historial de pedidos. Cambiamos todo lo demás: el diseño, el dominio, los pagos, los envíos y la forma de comprar, pensada primero para el celular."
        items={tiendaFeatures}
      />

      <Section tone="bone" aria-label="Cómo se ve la tienda hoy">
        <div className="reveal">
          <TiendaGallery />
        </div>
      </Section>

      {/* Proyecto 2: panel de gestión */}
      <ProjectIntro
        id="panel-de-gestion"
        title={
          <>
            Panel de <span className="text-accent text-violet">gestión</span>
          </>
        }
        meta={["Primera versión en 2 semanas", "Sistema completo en 2 meses"]}
        paragraphs={[
          "Meses después del lanzamiento de la tienda, volvieron con un problema nuevo. La tienda funcionaba y los pedidos crecían, pero lo que pasaba por detrás era un caos: más de 5 horas por día actualizando precios a mano desde las listas de los proveedores.",
          "Precios en dólares con un tipo de cambio que se movía todo el día, un formato distinto por proveedor y stock que se agotaba antes de llegar a actualizar la tienda. Resultado: clientes que compraban productos sin stock o con el precio viejo, y más de 13.000 productos sin descripción.",
        ]}
        wideMedia
        media={
          <figure>
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-sand bg-before-card">
              <p className="truncate border-b border-sand px-4 py-2.5 font-mono text-xs text-ink-muted">
                Lista_Precios_Proveedor_Final_v3_USAR_ESTE.xlsx
              </p>
              <div className="overflow-x-auto [scrollbar-color:var(--color-sand)_transparent] [scrollbar-width:thin]">
                <div className="relative aspect-[1785/575] min-w-[640px]">
                  <Image
                    src="/casos/tryhardware/before-excel.png"
                    alt="Lista de precios en Excel: proceso manual"
                    fill
                    sizes="(min-width: 1152px) 1152px, 640px"
                    className="object-cover object-top grayscale"
                  />
                </div>
              </div>
            </div>
            <figcaption className="mt-3 text-sm text-ink-muted">
              Actualizado manualmente a diario. Multiplicado por 13 proveedores.
            </figcaption>
          </figure>
        }
      />

      <FeatureGrid
        title={
          <>
            Un sistema que entiende el negocio de hardware <span className="text-accent text-violet">en Argentina.</span>
          </>
        }
        intro="La primera versión estuvo en uso a las 2 semanas. El sistema completo llevó 2 meses y se fue ajustando con el uso diario del equipo de TryHardware."
        items={panelFeatures}
      />

      <Section tone="bone" aria-label="Cómo se ve el panel hoy">
        <div className="reveal">
          <PanelGallery />
        </div>
      </Section>

      <ResultsBlock
        title={
          <>
            Números <span className="text-accent text-violet-tint">reales.</span>
          </>
        }
        items={results}
        note="Datos del sistema en producción · Marzo 2026"
      />

      <Section aria-label="La palabra de Iván">
        <figure className="reveal max-w-4xl">
          <blockquote className="text-title text-display-md">
            <p>
              Lo que más me sorprendió fue cuánto tiempo le estábamos regalando a tareas que hoy hace el sistema solo. La tienda la
              mejoré por los clientes. El panel lo hice por mí, y fue la mejor decisión que tomé para el negocio.
            </p>
          </blockquote>
          <figcaption className="mt-8 text-lg">
            <span className="font-semibold">Iván</span>
            <span className="block text-ink-muted">Dueño de TryHardware y cofundador de Avanzio · Banfield, Buenos Aires</span>
          </figcaption>
        </figure>
      </Section>

      <NextCase
        href="/casos/santa-benedetta"
        name="Santa Benedetta"
        summary="De pedidos por Instagram a una tienda propia con combos, stock y pagos online."
      />

      <FinalCta context="casos" />
    </>
  );
}
