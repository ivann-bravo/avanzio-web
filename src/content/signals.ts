export type Signal = { id: string; text: string };

export const signals: readonly Signal[] = [
  { id: "precio-repetido", text: "Respondés el mismo precio treinta veces por día por WhatsApp." },
  { id: "stock-una-persona", text: "El stock lo sabe una sola persona (y a veces ni ella)." },
  { id: "dolar", text: "Cada vez que sube el dólar, actualizás precios a mano." },
  { id: "cuaderno", text: "Vendés por Instagram y anotás los pedidos en un cuaderno." },
  { id: "excel-final", text: "Tenés un Excel que se llama FINAL_v3_ahora_si." },
  { id: "vendiste-sin-stock", text: "Alguna vez vendiste algo que ya no tenías." },
];
