import type { Metadata } from "next";
import { CaseHero, CaseProse, FeatureGrid, PainGrid, ResultsBlock, StackList } from "@/components/case/case-sections";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Troncone Motors, caso de éxito",
  description:
    "Cómo construimos la web de Troncone Motors, concesionaria familiar en Burzaco, con catálogo de vehículos online, financiamiento y gestión integral.",
};

const stack = [
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "React" },
  { name: "Google Maps API" },
  { name: "Vercel" },
] as const;

const painPoints = [
  {
    label: "Sin presencia digital",
    desc: "No tenían web. Las unidades disponibles solo se podían ver en el local o preguntando por Instagram.",
  },
  {
    label: "Catálogo invisible",
    desc: "El stock de autos no existía online. Clientes potenciales no llegaban porque no había nada que mostrar.",
  },
  {
    label: "Consultas solo por WhatsApp",
    desc: "Todo el proceso de consulta dependía de responder mensajes uno por uno, sin info previa del cliente.",
  },
  {
    label: "Financiamiento sin comunicar",
    desc: "Ofrecían hasta 100% de financiamiento con BNA+ pero nadie lo sabía porque no había dónde comunicarlo.",
  },
] as const;

const features = [
  {
    title: "Catálogo de vehículos",
    desc: "Listado de unidades disponibles con fotos, especificaciones, año, kilómetros y precio. Actualizable sin necesidad de programadores.",
  },
  {
    title: "Financiamiento BNA+",
    desc: "Comunicación clara del financiamiento hasta el 100% disponible. Una de las principales razones por las que llegan clientes nuevos.",
  },
  {
    title: "Servicios completos",
    desc: "Permuta, transferencias, gestoría propia, seguros, detailing y asesoramiento. Todo comunicado de forma clara para el cliente.",
  },
  {
    title: "Formulario de contacto",
    desc: "El cliente llega con su consulta estructurada. Menos mensajes genéricos, más conversaciones con intención real de compra.",
  },
  {
    title: "Mapa y ubicación",
    desc: "Google Maps integrado. El cliente sabe exactamente dónde están antes de llamar o ir hasta el local en Burzaco.",
  },
  {
    title: "Blog integrado",
    desc: "Sección de novedades para publicar contenido, promociones y novedades del mercado automotor.",
  },
] as const;

const results = [
  { label: "Presencia online", value: "Online", sub: "de cero a web profesional" },
  { label: "Servicios comunicados", value: "8", sub: "visibles desde el primer click" },
  { label: "Canales de contacto", value: "3", sub: "web, WhatsApp y Maps" },
  { label: "Financiamiento visible", value: "100%", sub: "BNA+ comunicado en la home" },
] as const;

export default function TronconeMotorsPage() {
  return (
    <>
      <CaseHero
        kind="Sitio web corporativo"
        name="Troncone Motors"
        intro="Concesionaria familiar en Burzaco sin presencia online. Construimos la web completa: catálogo de vehículos, financiamiento, servicios y múltiples canales de contacto."
        url="https://www.tronconemotors.com"
        image={{ src: "/casos/troncone-motors/sitio-desktop.jpg", alt: "Sitio web de Troncone Motors" }}
      />

      <CaseProse
        title={
          <>
            Años de trayectoria y cero <span className="text-accent text-violet">presencia online.</span>
          </>
        }
        paragraphs={[
          "Troncone Motors es una concesionaria familiar ubicada en Burzaco, Buenos Aires. Venden autos nuevos y usados, ofrecen financiamiento a través de BNA+, gestoría propia, seguros y una cartera de servicios completa para el comprador.",
          "Con años en el rubro y una operación sólida, el negocio funcionaba. Pero todo el potencial de crecimiento quedaba limitado porque no había manera de que un cliente los encontrara online, viera las unidades disponibles o entendiera qué servicios ofrecían antes de llamar.",
          "Necesitaban una presencia digital que estuviera a la altura de su trayectoria y que convirtiera a los visitantes en consultas reales.",
        ]}
      />

      <PainGrid
        title={
          <>
            Lo que los dejaba <span className="text-accent text-violet">afuera.</span>
          </>
        }
        items={painPoints}
      />

      <FeatureGrid
        title={
          <>
            Una web que trabaja como vendedor <span className="text-accent text-violet">las 24 horas.</span>
          </>
        }
        intro="Construimos el sitio completo desde cero: diseño, desarrollo y configuración. Desde el catálogo de vehículos hasta la comunicación del financiamiento y los servicios."
        items={features}
      />

      <ResultsBlock
        title={
          <>
            De invisible <span className="text-accent text-violet-tint">a presente.</span>
          </>
        }
        items={results}
        note={
          <>
            <strong className="font-semibold text-bone">En camino a una segunda versión.</strong> El sitio está funcionando y el negocio
            tiene presencia digital. Tenemos planificado un rediseño para elevar aún más la experiencia y agregar funcionalidades nuevas al
            catálogo.
          </>
        }
      />

      <StackList items={stack} />
      <FinalCta context="casos" />
    </>
  );
}
