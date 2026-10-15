import type { Metadata } from "next";
import { CaseHero, CaseProse, FeatureGrid, PainGrid, PhoneShot, ResultsBlock, StackList } from "@/components/case/case-sections";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Santa Benedetta, caso de éxito",
  description:
    "Cómo transformamos el caos de pedidos por WhatsApp e Instagram en una tienda online con gestión de stock, combos armables y control de finanzas en tiempo real.",
};

const stack = [
  { name: "Next.js 15" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Prisma ORM" },
  { name: "PostgreSQL" },
  { name: "NextAuth v5" },
  { name: "Cloudinary" },
  { name: "MercadoPago" },
  { name: "Zustand" },
  { name: "Resend" },
] as const;

const painPoints = [
  {
    label: "Pedidos dispersos",
    desc: "Llegaban por Instagram DM, WhatsApp y hasta en persona. Sin un lugar centralizado, nada se coordinaba.",
  },
  {
    label: "Stock a ciegas",
    desc: "Vendían el mismo producto dos veces sin saberlo. No había registro de qué estaba reservado ni qué había llegado.",
  },
  {
    label: "Precios desactualizados",
    desc: "Subían una historia con precio X. Si el precio subía al día siguiente, no podían cobrar más al cliente que ya había visto la historia.",
  },
  {
    label: "Solo vendían a conocidos",
    desc: "A pesar de tener muy buenas reseñas, no lograban escalar. Sin presencia profesional, el boca a boca tenía techo.",
  },
] as const;

const features = [
  {
    title: "Tienda online propia",
    desc: "Catálogo completo con precios actualizados en tiempo real. Cuando el precio cambia en el panel, cambia en la tienda automáticamente.",
  },
  {
    title: "Combos personalizables",
    desc: "La clave del negocio: el cliente puede armar su propia caja eligiendo qué productos lleva, con límites definidos por Fernando y Marilina.",
  },
  {
    title: "Gestión de stock integrada",
    desc: "Cada venta descuenta stock automáticamente. El sistema avisa cuando un producto está agotado y bloquea la venta antes de comprometerse.",
  },
  {
    title: "Dashboard financiero",
    desc: "Pedidos del mes, ganancias, ticket promedio, productos más vendidos, gastos vs ingresos. Todo en una pantalla, sin planillas.",
  },
  {
    title: "Gestión de clientes",
    desc: "Historial de pedidos por cliente, datos de contacto centralizados, sin buscar entre chats de WhatsApp.",
  },
  {
    title: "MercadoPago integrado",
    desc: "Cobros online con todos los métodos del ecosistema argentino: tarjeta, cuotas, transferencia bancaria.",
  },
] as const;

const results = [
  { label: "MVP lanzado en", value: "1 mes", sub: "desde el primer commit" },
  { label: "Errores de stock", value: "0", sub: "el sistema bloquea doble venta" },
  { label: "Herramientas reemplazadas", value: "4+", sub: "Excel, DMs, notas, llamadas" },
  { label: "Dolor principal", value: "Resuelto", sub: "todo centralizado en un sistema" },
] as const;

export default function SantaBenedettaPage() {
  return (
    <>
      <CaseHero
        kind="Tienda online y sistema de gestión"
        name="Santa Benedetta"
        intro="Vinos, quesos y sabores artesanales de primera calidad, con el caos de Instagram DMs y Excel. Lo transformamos en una tienda profesional con gestión de stock, combos armables y control de finanzas."
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

      <CaseProse
        tone="bone"
        title={
          <>
            Combos que el cliente arma <span className="text-accent text-violet">a su gusto.</span>
          </>
        }
        paragraphs={[
          "Santa Benedetta no vende productos genéricos: vende experiencias. Por eso el sistema permite dos tipos de combos: los que Fernando y Marilina arman con su selección, y los que el cliente personaliza eligiendo qué productos llevar.",
          "Esto no estaba disponible en ninguna plataforma estándar. Era imposible de implementar por Instagram o por WhatsApp. Necesitaban algo hecho a medida, y eso es exactamente lo que construimos.",
        ]}
        bullets={[
          "El cliente elige la cantidad de cada producto dentro del combo",
          "El stock se valida en tiempo real al armar la caja",
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
            <strong className="font-semibold text-bone">Proyecto en etapa de mejoras.</strong> El MVP se lanzó en un mes y está en uso
            activo. A medida que Fernando y Marilina incorporen su catálogo real y empiecen a operar, vamos a sumar métricas concretas de
            ventas y crecimiento.
          </>
        }
      />

      <StackList items={stack} />
      <FinalCta context="casos" />
    </>
  );
}
