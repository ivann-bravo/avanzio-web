import type { WaContext } from "@/lib/whatsapp";

export type ServiceImage = { src: string; alt: string; device: "desktop" | "mobile" };

export type Service = {
  id: "gestion" | "tienda" | "automatizacion";
  title: string;
  outcome: string;
  before: string;
  after: string;
  includes: readonly string[];
  images: readonly ServiceImage[];
  wa: WaContext;
};

export const services: readonly Service[] = [
  {
    id: "gestion",
    title: "Stock, precios y pedidos en un solo lugar",
    outcome: "Un panel hecho para cómo trabaja tu negocio. Te avisa qué reponer y recalcula precios cuando cambia el dólar.",
    before: "Stock a ojo y precios en un Excel que nadie actualiza.",
    after: "Un panel que te avisa qué reponer y actualiza los precios solo.",
    includes: [
      "Control de stock con alertas",
      "Precios que se actualizan solos (dólar, proveedores, márgenes)",
      "Pedidos y clientes en un solo lugar",
      "Accesos por rol para tu equipo",
    ],
    images: [{ src: "/casos/tryhardware/panel-pricing.png", alt: "Panel de precios de TryHardware", device: "desktop" }],
    wa: "gestion",
  },
  {
    id: "tienda",
    title: "Tu tienda online, abierta las 24 horas",
    outcome: "Que te compren sin preguntarte el precio por mensaje. Con MercadoPago, envíos y tu stock real conectado.",
    before: "Vendés por Instagram y respondés el mismo precio treinta veces.",
    after: "Una tienda propia con MercadoPago, envíos y stock conectado.",
    includes: [
      "Diseño propio, pensado primero para el celular",
      "MercadoPago y tarjetas",
      "Envíos con Correo Argentino o Andreani, o retiro en el local",
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
    title: "Lo repetitivo, que lo haga el sistema",
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
      { src: "/casos/g3d/checkout-mobile.png", alt: "Checkout de G3D que guarda el WhatsApp del cliente para avisarle del pedido", device: "mobile" },
    ],
    wa: "automatizacion",
  },
];
