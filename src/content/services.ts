import type { WaContext } from "@/lib/whatsapp";

export type ServiceImage = { src: string; alt: string; device: "desktop" | "mobile" };

export type Service = {
  id: "gestion" | "tienda" | "automatizacion";
  /** Etiqueta corta para los botones que saltan a cada servicio. */
  shortName: string;
  title: string;
  outcome: string;
  /** Frase que invita a escribir, justo arriba del botón de WhatsApp. */
  prompt: string;
  before: string;
  after: string;
  includes: readonly string[];
  images: readonly ServiceImage[];
  wa: WaContext;
};

export const services: readonly Service[] = [
  {
    id: "gestion",
    shortName: "Gestión",
    title: "Tu negocio ordenado en un solo sistema",
    prompt: "¿Tu stock vive en una planilla? Contanos cómo lo manejás hoy.",
    outcome:
      "Stock, precios, pedidos y clientes en un panel hecho a la medida de cómo trabajás. Sabés qué pasa sin tener que preguntar.",
    before: "Stock a ojo y precios desparramados en planillas que nadie actualiza.",
    after: "Un panel que te avisa qué reponer y mantiene los precios al día en todos lados.",
    includes: [
      "Stock con alertas de reposición",
      "Precios que cambiás una vez y se actualizan en todos lados",
      "Pedidos y clientes en un solo lugar",
      "Accesos por rol para tu equipo",
    ],
    images: [
      {
        src: "/casos/tryhardware/panel-alertas-precio.png",
        alt: "Panel de TryHardware con las alertas de cambios de precio de cada producto",
        device: "desktop",
      },
    ],
    wa: "gestion",
  },
  {
    id: "tienda",
    shortName: "Tienda online",
    title: "Tu tienda online, abierta las 24 horas",
    prompt: "¿Hoy vendés por mensaje? Contanos qué vendés y cómo cobrás.",
    outcome: "Que te compren sin preguntarte el precio por mensaje. Con MercadoPago, envíos y tu stock real conectado.",
    before: "Vendés por Instagram y respondés el mismo precio treinta veces.",
    after: "Una tienda propia con MercadoPago, envíos y stock conectado.",
    includes: [
      "Diseño propio, pensado primero para el celular",
      "MercadoPago y tarjetas",
      "Envíos a domicilio o retiro en el local",
      "Conectada a tu stock real",
    ],
    images: [
      { src: "/casos/santa-benedetta/tienda-desktop.jpg", alt: "Tienda online de Santa Benedetta en escritorio", device: "desktop" },
      { src: "/casos/santa-benedetta/tienda-mobile.jpg", alt: "Tienda online de Santa Benedetta en el celular", device: "mobile" },
    ],
    wa: "tienda",
  },
  {
    id: "automatizacion",
    shortName: "Automatización",
    title: "Lo repetitivo, que lo haga el sistema",
    prompt: "¿Qué tarea repetís todos los días? Contanos cuál y vemos cómo sacártela de encima.",
    outcome: "Cobros, avisos por WhatsApp y mail, facturación y reportes. Lo que hoy copiás a mano, funcionando solo.",
    before: "Copiás datos de un lado a otro y mandás los mismos mensajes todos los días.",
    after: "Integraciones que mueven la información solas y te avisan cuando hace falta.",
    includes: [
      "Integración con MercadoPago",
      "Facturación electrónica",
      "Avisos automáticos por WhatsApp y mail",
      "Reportes que llegan solos",
    ],
    images: [
      {
        src: "/casos/motora/bandeja-mensajes.png",
        alt: "Bandeja de Motora que junta los mensajes de WhatsApp, Instagram y Facebook en un solo lugar",
        device: "desktop",
      },
    ],
    wa: "automatizacion",
  },
];
