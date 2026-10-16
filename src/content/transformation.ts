export type BeforeItem =
  | { kind: "image"; src: string; width: number; position: "top" | "right-top" }
  | { kind: "message"; text: string; detail: string };

export type AfterItem = { src: string; width: number };

export type Pair = { before: string; after: string };

/** Lo que una PyME usa antes de tener un sistema: capturas reales y mensajes típicos. */
export const beforeItems: readonly BeforeItem[] = [
  { kind: "image", src: "/casos/tryhardware/before-excel.png", width: 300, position: "top" },
  { kind: "message", text: "“¿tenés talle M?”", detail: "38 mensajes sin responder" },
  { kind: "image", src: "/casos/tryhardware/before-excel.png", width: 260, position: "right-top" },
  { kind: "message", text: "“te paso el pedido…”", detail: "2 jamón, 1 queso, ¿envío?" },
  { kind: "message", text: "Stock: mouse 4 (creo)", detail: "ver cuaderno" },
];

/** Sistemas reales funcionando. */
export const afterItems: readonly AfterItem[] = [
  { src: "/casos/tryhardware/panel-dashboard.png", width: 320 },
  { src: "/casos/santa-benedetta/panel.png", width: 300 },
  { src: "/casos/tryhardware/panel-pricing.png", width: 300 },
  { src: "/casos/tryhardware/tienda-home-hero.jpg", width: 300 },
  { src: "/casos/santa-benedetta/tienda-desktop.jpg", width: 300 },
];

export const pairs: readonly Pair[] = [
  { before: "Pedidos por mensaje, anotados donde se pueda", after: "Todos los pedidos en un mismo lugar" },
  { before: "Precios desparramados en planillas", after: "Cambiás un precio y se actualiza en todos lados" },
  { before: "Stock a ojo", after: "Sabés qué tenés y qué reponer" },
  { before: "Vendés solo cuando contestás", after: "Te compran aunque estés durmiendo" },
];
