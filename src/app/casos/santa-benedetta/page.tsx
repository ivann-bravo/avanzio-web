import type { Metadata } from "next";
import {
  CaseHero,
  CaseProse,
  CaseShowcase,
  FeatureGrid,
  NextCase,
  PainGrid,
  PhoneShot,
  ResultsBlock,
} from "@/components/case/case-sections";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Santa Benedetta, caso de éxito",
  description:
    "Cómo transformamos el caos de pedidos por WhatsApp e Instagram en una tienda online con gestión de stock, combos armables y control de finanzas en tiempo real.",
};

const painPoints = [
  {
    label: "Pedidos dispersos",
    desc: "Llegaban por mensaje de Instagram, por WhatsApp y hasta en persona. Sin un lugar donde juntarlos, nada se coordinaba.",
  },
  {
    label: "Stock a ciegas",
    desc: "Vendían el mismo producto dos veces sin saberlo. No había registro de qué estaba reservado ni qué había llegado.",
  },
  {
    label: "Precios desactualizados",
    desc: "Publicaban un precio en una historia y, si al día siguiente subía, no podían cobrarle más a quien ya lo había visto.",
  },
  {
    label: "Solo vendían a conocidos",
    desc: "A pesar de tener muy buenas reseñas, no lograban escalar. Sin presencia profesional, el boca a boca tenía techo.",
  },
] as const;

const features = [
  {
    title: "Tienda online propia",
    desc: "Catálogo completo con precios siempre al día: cuando cambian un precio en el panel, cambia solo en la tienda.",
  },
  {
    title: "Combos personalizables",
    desc: "La clave del negocio: el cliente puede armar su propia caja eligiendo qué productos lleva, con límites definidos por Fernando y Marilina.",
  },
  {
    title: "Gestión de stock integrada",
    desc: "Cada venta descuenta el stock sola. Si un producto se agota, el sistema avisa y no deja venderlo.",
  },
  {
    title: "Números del negocio",
    desc: "Pedidos del mes, ganancias, ticket promedio, lo más vendido y gastos contra ingresos. Todo en una pantalla, sin planillas.",
  },
  {
    title: "Gestión de clientes",
    desc: "Historial de pedidos por cliente, datos de contacto centralizados, sin buscar entre chats de WhatsApp.",
  },
  {
    title: "MercadoPago integrado",
    desc: "Cobros online con tarjeta, cuotas o transferencia.",
  },
] as const;

const results = [
  { label: "Primera versión en", value: "1 mes", sub: "desde que arrancamos" },
  { label: "Errores de stock", value: "0", sub: "el sistema bloquea doble venta" },
  { label: "Herramientas reemplazadas", value: "4+", sub: "Excel, mensajes, notas y llamadas" },
  { label: "Dolor principal", value: "Resuelto", sub: "todo centralizado en un sistema" },
] as const;

export default function SantaBenedettaPage() {
  return (
    <>
      <CaseHero
        kind="Tienda online y sistema de gestión"
        name="Santa Benedetta"
        intro="Vinos, quesos y sabores artesanales de primera calidad, vendidos entre mensajes de Instagram y planillas. Lo pasamos a una tienda propia con stock, combos para armar y los números del negocio a la vista."
        url="https://santabenedetta.com"
        image={{ src: "/casos/santa-benedetta/tienda-desktop.jpg", alt: "Tienda online de Santa Benedetta" }}
      />

      <CaseProse
        title={
          <>
            Sabores artesanales que no encontrás <span className="text-accent text-violet">en el super.</span>
          </>
        }
        paragraphs={[
          "Santa Benedetta es un emprendimiento especializado en vinos, quesos, dulces, salamines y sabores artesanales seleccionados. Su propuesta no es vender lo que hay en cualquier góndola: es armar cajas y combos premium con productos de verdad.",
          "Fernando y Marilina arrancaron hace poco, con dos personas y mucha energía. Los elogios no faltaban, la calidad del producto hablaba sola. Pero la organización era otro tema.",
          "Querían crecer. Querían vender más allá de conocidos. Querían que el negocio se vea tan bien como lo que ofrecen. Para eso necesitaban un sistema que los acompañe, no uno más que los frene.",
        ]}
      />

      <PainGrid
        title={
          <>
            Lo que se les <span className="text-accent text-violet">complicaba.</span>
          </>
        }
        items={painPoints}
      />

      <FeatureGrid
        title={
          <>
            Un sistema que hace todo lo que <span className="text-accent text-violet">hacían a mano.</span>
          </>
        }
        intro="Construimos una tienda online que también funciona como sistema de gestión interno: stock, pedidos, clientes y finanzas, todo en un solo lugar. Con un diferenciador clave: los combos personalizables."
        items={features}
      />

      <CaseShowcase
        title={
          <>
            Los pedidos, <span className="text-accent text-violet">en un solo lugar.</span>
          </>
        }
        image={{ src: "/casos/santa-benedetta/panel-pedidos.png", alt: "Panel de pedidos de Santa Benedetta con estado, pago y total de cada pedido", width: 1891, height: 792 }}
        caption="El panel de pedidos, con datos de prueba."
      />

      <CaseProse
        title={
          <>
            Combos que el cliente arma <span className="text-accent text-violet">a su gusto.</span>
          </>
        }
        paragraphs={[
          "Santa Benedetta no vende productos genéricos: vende experiencias. Por eso el sistema permite dos tipos de combos: los que Fernando y Marilina arman con su selección, y los que el cliente personaliza eligiendo qué productos llevar.",
          "Ninguna plataforma de tiendas lo traía resuelto, y por Instagram o WhatsApp era imposible. Necesitaban algo hecho a medida, y eso es lo que construimos.",
        ]}
        bullets={[
          "El cliente elige la cantidad de cada producto dentro del combo",
          "El stock se controla en el momento de armar la caja",
          "Fernando y Marilina configuran qué productos van disponibles",
          "El precio se calcula automáticamente según la selección",
        ]}
        aside={<PhoneShot image={{ src: "/casos/santa-benedetta/tienda-mobile.jpg", alt: "Tienda de Santa Benedetta en el celular" }} />}
      />

      <ResultsBlock
        title={
          <>
            De la confusión <span className="text-accent text-violet-tint">al control.</span>
          </>
        }
        items={results}
        note={
          <>
            <strong className="font-semibold text-bone">Proyecto en etapa de mejoras.</strong> La primera versión salió en un mes y está
            en uso. A medida que Fernando y Marilina incorporen su catálogo real y empiecen a operar, vamos a sumar métricas concretas de
            ventas y crecimiento.
          </>
        }
      />

      <NextCase
        href="/casos/troncone-motors"
        name="Troncone Motors"
        summary="Una concesionaria familiar que pasó de no tener web a mostrar su catálogo y su financiamiento."
      />
      <FinalCta context="casos" />
    </>
  );
}
