import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CaseHero, FeatureGrid, PainGrid, ResultsBlock, StackList } from "@/components/case/case-sections";
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

const tiendaPains = [
  {
    label: "Tienda lenta con imágenes sin optimizar",
    desc: "Cada carga perdía usuarios. Impacto directo en conversión y en el posicionamiento SEO.",
  },
  {
    label: "Sin integración de pagos",
    desc: "No había MercadoPago ni tarjeta. Completar una compra dependía de coordinación manual.",
  },
  {
    label: "Sin correo integrado",
    desc: "Sin Correo Argentino ni Andreani. Los envíos se coordinaban por fuera de la tienda.",
  },
  {
    label: "Sin diseño mobile",
    desc: "La mayoría de los usuarios entraba desde el celular a una web que no estaba pensada para eso.",
  },
  {
    label: "Ataques constantes de bots",
    desc: "Múltiples accesos maliciosos intentando tumbar el servidor sin ninguna protección activa.",
  },
] as const;

const tiendaFeatures = [
  {
    title: "Rediseño mobile-first",
    desc: "Diseño a medida desde cero. Layout pensado para el celular, donde está la mayoría de los usuarios. Nuevo dominio más corto (try.com.ar), todas las imágenes del catálogo optimizadas para carga instantánea.",
  },
  {
    title: "Envíos reales integrados",
    desc: "Correo Argentino y Andreani conectados directamente a la tienda. Sin plataformas intermediarias que encarecen el servicio sin agregar nada a cambio.",
  },
  {
    title: "Pagos con tarjeta",
    desc: "MercadoPago y Payway integrados. Checkout refinado con menos fricción y pasos más claros. Diseñado para convertir, no para cumplir.",
  },
] as const;

const tiendaExtras = [
  {
    title: "SEO y posicionamiento",
    desc: "Primeros resultados en Google para búsquedas locales. Sin pauta publicitaria.",
  },
  {
    title: "Fidelización y newsletter",
    desc: "Sistema de suscripción con ofertas exclusivas para la comunidad TryHardware.",
  },
  {
    title: "Automatización de postventa",
    desc: "WhatsApp y correos automáticos con flujo que incentiva reseñas en Google.",
  },
  {
    title: "Seguridad reforzada",
    desc: "Protección activa contra los ataques de bots que antes caían sobre el servidor.",
  },
] as const;

const panelPains = [
  {
    label: "+5 horas/día en actualizaciones manuales",
    desc: "Cada proveedor, cada día, con su propio formato de lista. Trabajo repetitivo sin fin.",
  },
  {
    label: "Precios en USD con cotización variable",
    desc: "El tipo de cambio cambiaba varias veces al día y los precios siempre estaban desactualizados.",
  },
  {
    label: "13 proveedores con formatos distintos",
    desc: "Algunos mandaban Excel, otros CSV. Sin forma de centralizar ni comparar.",
  },
  {
    label: "Pedidos con errores de stock y precio",
    desc: "Un cliente compraba y el producto ya no tenía stock o costaba diferente. Sin alertas.",
  },
  {
    label: "13.700+ productos sin descripción",
    desc: "El catálogo era enorme pero sin información de cada producto para el usuario final.",
  },
] as const;

const panelFeatures = [
  {
    title: "13 proveedores conectados",
    desc: "Algunos integrados vía API directa con sincronización automática en background. Otros, sin esa posibilidad, a través de sus listas de precios en Excel o CSV. El sistema entiende el formato de cada uno.",
  },
  {
    title: "Pricing automático en ARS",
    desc: "Tipo de cambio en tiempo real + impuestos diferenciados por proveedor (IVA, IIBB, impuestos internos) + markup ajustable. El precio final en pesos se calcula solo, siempre actualizado.",
  },
  {
    title: "Catálogo unificado",
    desc: "Compara precios entre proveedores para el mismo producto, muestra historial, alerta si algo sube o baja demasiado, y sugiere el proveedor más barato con stock disponible.",
  },
  {
    title: "Descripciones con IA",
    desc: "Gemini 2.5 Flash genera descripciones HTML para los 13.700+ productos usando datasheets oficiales y fuentes técnicas. Lo que era imposible a mano, hoy se resuelve en masa.",
  },
  {
    title: "Constructor de PCs y combos",
    desc: "Arma configuraciones verificando compatibilidad y eligiendo los componentes más económicos con stock. El precio se actualiza solo, sin importar si un componente cambia de proveedor o precio.",
  },
  {
    title: "Sync automático a WooCommerce",
    desc: "Cada 15 minutos escanea cambios de precio y stock y actualiza la tienda. Con alertas ante anomalías para evitar que errores de proveedores se publiquen directo al cliente.",
  },
] as const;

const panelExtras = [
  {
    title: "Órdenes de compra automáticas",
    desc: "Detecta pedidos pagos en WooCommerce, identifica los productos sin stock físico y genera las órdenes de compra agrupadas por proveedor, con márgenes y precios en tiempo real.",
  },
  {
    title: "Roles Admin y Viewer + 2FA",
    desc: "Administradores con acceso total. Empleados del local con consulta de precios y stock sin riesgo de modificar datos. Autenticación con doble factor (TOTP) opcional por usuario.",
  },
] as const;

const results = [
  { label: "Pedidos por mes", value: "+3×", sub: "de ~30 a más de 100" },
  { label: "Productos en catálogo", value: "13.700+", sub: "~6.000 con stock activo" },
  { label: "Tiempo liberado", value: "5 hs/día", sub: "tareas que hace el sistema solo" },
  { label: "Reseñas en Google", value: "4.9★", sub: "110 opiniones verificadas" },
  { label: "Proveedores integrados", value: "13", sub: "API directa + archivos" },
  { label: "Sync automático", value: "15 min", sub: "WooCommerce siempre actualizado" },
] as const;

const stack = [
  { name: "WordPress" },
  { name: "WooCommerce" },
  { name: "PHP" },
  { name: "JavaScript" },
  { name: "MercadoPago" },
  { name: "Payway" },
  { name: "Correo Argentino" },
  { name: "Andreani" },
  { name: "Next.js 14" },
  { name: "TypeScript" },
  { name: "SQLite" },
  { name: "Drizzle ORM" },
  { name: "shadcn/ui" },
  { name: "Recharts" },
  { name: "Gemini 2.5 Flash" },
  { name: "NextAuth" },
  { name: "Railway" },
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
      <div className={`mt-12 grid gap-12 ${wideMedia ? "" : "lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16"}`}>
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

/** Lista corta de funcionalidades complementarias, en el mismo lenguaje que FeatureGrid. */
function ExtrasList({ items, columns }: { items: readonly { title: string; desc: string }[]; columns: string }) {
  return (
    <ul className={`grid gap-x-10 gap-y-10 ${columns}`}>
      {items.map((item, i) => (
        <li key={item.title} className="reveal border-t border-ink pt-5" style={stagger(i)}>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-ink-soft">{item.desc}</p>
        </li>
      ))}
    </ul>
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
        image={{ src: "/casos/tryhardware/tienda-home-desktop.png", alt: "Tienda online de TryHardware" }}
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
          "TryHardware ya tenía una tienda en WooCommerce cuando nos contactaron. El problema no era la plataforma: era todo lo que faltaba. Cargaba lento, no tenía integración de pagos ni de envíos, y el checkout era el genérico sin adaptación alguna a su flujo de trabajo.",
          "Los pocos clientes que llegaban tenían una mala experiencia. Los que lograban completar un pedido eran la excepción. Y la mayoría accedía desde el celular, desde una web que no estaba diseñada para eso.",
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

      <PainGrid title="Una tienda que perdía clientes antes de que pudieran comprar" items={tiendaPains} />

      <FeatureGrid
        title={
          <>
            Rediseño completo, manteniendo <span className="text-accent text-violet">lo que funcionaba.</span>
          </>
        }
        intro="Mantuvimos WooCommerce porque ya tenían catálogo, clientes e historial de pedidos. Cambiamos todo lo demás: el diseño, el dominio, la infraestructura de pagos y envíos, y la experiencia completa de compra, pensada mobile-first desde el día uno."
        items={tiendaFeatures}
      />

      <Section tone="bone" aria-label="Más de la tienda online">
        <ExtrasList items={tiendaExtras} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <div className="reveal mt-20">
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
        meta={["MVP en 2 semanas", "Sistema completo en 2 meses"]}
        paragraphs={[
          "Meses después del lanzamiento de la tienda, volvieron con un problema nuevo. La tienda funcionaba, los pedidos crecían, pero el back-office era un caos. Más de 5 horas diarias actualizando precios a mano desde listas de proveedores en Excel.",
          "Precios en dólares con cotización variable. Formatos distintos por cada proveedor. Stock que se agotaba entre que actualizaban y subían los cambios a la tienda. Clientes haciendo pedidos de productos sin stock o con precio desactualizado. Y más de 13.000 productos sin una sola descripción publicada.",
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

      <PainGrid title="Más de 5 horas al día perdidas en tareas que podía hacer el sistema" items={panelPains} />

      <FeatureGrid
        title={
          <>
            Un sistema que entiende el negocio de hardware <span className="text-accent text-violet">en Argentina.</span>
          </>
        }
        intro="Construimos el panel en Next.js: bajo costo de hosting, carga instantánea en el navegador. El MVP estuvo en uso a las 2 semanas. El sistema completo llevó 2 meses, moldeado por el feedback constante del equipo de TryHardware."
        items={panelFeatures}
      />

      <Section tone="bone" aria-label="Más del panel de gestión">
        <ExtrasList items={panelExtras} columns="md:grid-cols-2" />
        <div className="reveal mt-20">
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

      <StackList items={stack} />

      <Section tone="bone" aria-label="Siguiente caso">
        <Link
          href="/casos/santa-benedetta"
          className="reveal group flex flex-col gap-4 rounded-[var(--radius-card)] border border-sand bg-paper p-8 transition-[border-color,transform] duration-200 ease-out hover:border-ink active:scale-[0.97] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            <span className="block text-title text-display-md">Siguiente caso: Santa Benedetta</span>
            <span className="mt-3 block text-lg text-ink-soft">
              Tienda online para fiambrería artesanal con MercadoPago y envío local.
            </span>
          </span>
          <Icon name="arrow-right" className="size-8 shrink-0 text-violet transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </Section>

      <FinalCta context="casos" />
    </>
  );
}
