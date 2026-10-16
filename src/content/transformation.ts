export type BeforeItem =
  | { kind: "image"; src: string; width: number; position: "top" | "right-top" | "center" }
  | { kind: "message"; text: string; detail: string };

export type AfterItem = { src: string; width: number };

export type Pair = { before: string; after: string };

/** Lo que una PyME usa antes de tener un sistema: chats, cuadernos, papeles y planillas. */
export const beforeItems: readonly BeforeItem[] = [
  { kind: "image", src: "/antes/cuaderno.jpg", width: 260, position: "center" },
  { kind: "message", text: "“¿tenés talle M?”", detail: "38 mensajes sin responder" },
  { kind: "image", src: "/antes/chat-pedidos.png", width: 230, position: "top" },
  { kind: "image", src: "/casos/tryhardware/before-excel.png", width: 300, position: "top" },
  { kind: "message", text: "Stock: mouse 4 (creo)", detail: "ver cuaderno" },
  { kind: "image", src: "/antes/papeles-calculadora.jpg", width: 260, position: "center" },
  { kind: "image", src: "/antes/notebook-planilla.jpg", width: 260, position: "center" },
];

/** Sistemas reales funcionando. */
export const afterItems: readonly AfterItem[] = [
  { src: "/casos/tryhardware/panel-productos.png", width: 320 },
  { src: "/casos/santa-benedetta/panel-pedidos.png", width: 320 },
  { src: "/casos/g3d/tienda-desktop.jpg", width: 300 },
  { src: "/casos/motora/panel-stock.png", width: 320 },
  { src: "/casos/tryhardware/tienda-arma-tu-pc.jpg", width: 300 },
];

export const pairs: readonly Pair[] = [
  { before: "Pedidos por mensaje, anotados donde se pueda", after: "Todos los pedidos en un mismo lugar" },
  { before: "Precios desparramados en planillas", after: "Cambiás un precio y se actualiza en todos lados" },
  { before: "Stock a ojo", after: "Sabés qué tenés y qué reponer" },
  { before: "Vendés solo cuando contestás", after: "Te compran aunque estés durmiendo" },
];
