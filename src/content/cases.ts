import type { Testimonial } from "@/components/ui/testimonial-block";

export type CaseStatus = "live" | "launching" | "building";

export type CaseStudy = {
  slug: "tryhardware" | "santa-benedetta" | "troncone-motors" | "g3d" | "motora";
  name: string;
  kind: string;
  /** Texto de la card: el antes y el después en una o dos oraciones. */
  summary: string;
  /** Oración destacada en negrita al final del resumen. */
  highlight?: string;
  /** Rubro del negocio, para el listado de casos. */
  sector: string;
  /** Cómo trabajaba antes y cómo trabaja hoy, en una oración cada uno. */
  before: string;
  after: string;
  /** Qué construimos, en etiquetas cortas. */
  built: readonly string[];
  status: CaseStatus;
  detailPage: boolean;
  /** `anchor: "left"` para capturas de paneles: el recorte conserva el menú lateral. */
  image: { src: string; alt: string; device: "desktop" | "mobile"; anchor?: "left" } | null;
  testimonial: Testimonial | null;
};

export const STATUS_LABEL: Record<CaseStatus, string> = {
  live: "Funcionando",
  launching: "En lanzamiento",
  building: "En desarrollo · producto propio",
};

export const cases: readonly CaseStudy[] = [
  {
    slug: "tryhardware",
    name: "TryHardware",
    kind: "Tienda online y panel de gestión",
    summary: "Antes: precios de 13 proveedores actualizados a mano, más de 5 horas por día.",
    highlight: "Hoy el panel los calcula solo y sincroniza la tienda cada 15 minutos.",
    sector: "Tecnología · Banfield",
    before: "Precios de 13 proveedores actualizados a mano, más de 5 horas por día.",
    after: "El panel calcula los precios solo y sincroniza la tienda cada 15 minutos.",
    built: ["Tienda online", "Panel de gestión", "Motor de precios"],
    status: "live",
    detailPage: true,
    image: { src: "/casos/tryhardware/tienda-home-hero.jpg", alt: "Tienda online de TryHardware", device: "desktop" },
    testimonial: null,
  },
  {
    slug: "santa-benedetta",
    name: "Santa Benedetta",
    kind: "Tienda online y gestión",
    summary: "De pedidos por Instagram a tienda con combos y stock propio. Primera versión en un mes.",
    sector: "Alimentos y bebidas",
    before: "Los pedidos llegaban por mensaje privado de Instagram.",
    after: "Tienda propia con combos, stock y pagos online. La primera versión salió en un mes.",
    built: ["Tienda online", "Gestión de pedidos", "Stock"],
    status: "live",
    detailPage: true,
    image: { src: "/casos/santa-benedetta/tienda-desktop.jpg", alt: "Tienda online de Santa Benedetta", device: "desktop" },
    testimonial: null,
  },
  {
    slug: "g3d",
    name: "G3D",
    kind: "Tienda online y panel de pedidos",
    summary: "Taller de impresión 3D: del cuaderno de pedidos a una tienda que cobra sola.",
    sector: "Impresión 3D",
    before: "Los pedidos se anotaban en un cuaderno.",
    after: "Una tienda que cobra sola y un panel para seguir cada pedido.",
    built: ["Tienda online", "Panel de pedidos"],
    status: "launching",
    detailPage: false,
    image: { src: "/casos/g3d/tienda-desktop.jpg", alt: "Tienda online de G3D", device: "desktop", anchor: "left" },
    testimonial: null,
  },
  {
    slug: "troncone-motors",
    name: "Troncone Motors",
    kind: "Web y catálogo de vehículos",
    summary:
      "Concesionaria familiar de Burzaco. Pasó de no tener web a mostrar su catálogo y el financiamiento BNA+ desde la home.",
    sector: "Concesionaria · Burzaco",
    before: "No tenía sitio web.",
    after: "Su catálogo de autos y el financiamiento BNA+, a la vista desde la home.",
    built: ["Sitio web", "Catálogo de vehículos"],
    status: "live",
    detailPage: true,
    image: { src: "/casos/troncone-motors/sitio-desktop.jpg", alt: "Sitio web de Troncone Motors", device: "desktop" },
    testimonial: null,
  },
  {
    slug: "motora",
    name: "Motora",
    kind: "Sistema de gestión para concesionarias",
    summary: "El sistema de gestión para concesionarias. Troncone Motors ya lo usa con su stock real.",
    sector: "Concesionarias · producto propio",
    before: "El stock de autos y las consultas, repartidos en planillas y chats.",
    after: "Stock, ventas y mensajes de todos los canales en un solo sistema. Troncone Motors ya lo usa.",
    built: ["Panel de gestión", "Stock de vehículos", "Bandeja de mensajes"],
    status: "building",
    detailPage: false,
    image: { src: "/casos/motora/panel-stock.png", alt: "Panel de stock de vehículos de Motora", device: "desktop", anchor: "left" },
    testimonial: null,
  },
];
