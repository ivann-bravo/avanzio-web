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
  status: CaseStatus;
  detailPage: boolean;
  /** `anchor: "left"` para capturas de paneles: el recorte conserva el menú lateral. */
  image: { src: string; alt: string; device: "desktop" | "mobile"; anchor?: "left" } | null;
  testimonial: Testimonial | null;
};

export const STATUS_LABEL: Record<Exclude<CaseStatus, "live">, string> = {
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
    status: "launching",
    detailPage: false,
    image: { src: "/casos/g3d/tienda-desktop.jpg", alt: "Tienda online de G3D", device: "desktop" },
    testimonial: null,
  },
  {
    slug: "troncone-motors",
    name: "Troncone Motors",
    kind: "Web y catálogo de vehículos",
    summary:
      "Concesionaria familiar de Burzaco. Pasó de no tener web a mostrar su catálogo y el financiamiento BNA+ desde la home.",
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
    status: "building",
    detailPage: false,
    image: { src: "/casos/motora/panel-stock.png", alt: "Panel de stock de vehículos de Motora", device: "desktop", anchor: "left" },
    testimonial: null,
  },
];
