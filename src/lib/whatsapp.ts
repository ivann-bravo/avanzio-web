export const WHATSAPP_PHONE = "5491170630456";

export type WaContext =
  | "generic"
  | "home"
  | "servicios"
  | "nosotros"
  | "contacto"
  | "casos"
  | "gestion"
  | "tienda"
  | "automatizacion";

const MESSAGES: Record<WaContext, string> = {
  generic: "Hola Avanzio, vengo del sitio web y quería consultarles sobre...",
  home: "Hola Avanzio, vi el sitio y quiero contarles qué me está frenando en el negocio.",
  servicios: "Hola Avanzio, estuve viendo los servicios y quiero saber más.",
  nosotros: "Hola Avanzio, los conocí por el sitio y quiero charlar sobre mi negocio.",
  contacto: "Hola Avanzio, los contacto desde el sitio web. Quería consultarles sobre...",
  casos: "Hola Avanzio, vi sus casos y quiero algo parecido para mi negocio.",
  gestion: "Hola Avanzio, quiero ordenar stock, precios y pedidos de mi negocio. ¿Cuándo podemos hablar?",
  tienda: "Hola Avanzio, quiero tener una tienda online para mi negocio. ¿Cuándo podemos hablar?",
  automatizacion:
    "Hola Avanzio, quiero automatizar tareas de mi negocio (cobros, avisos, facturación). ¿Cuándo podemos hablar?",
};

export function waLinkWithText(text: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function waLink(context: WaContext = "generic"): string {
  return waLinkWithText(MESSAGES[context]);
}

export function signalsMessage(texts: readonly string[]): string {
  const lines = texts.map((t) => `- ${t}`).join("\n");
  return `Hola Avanzio, vi el sitio y me pasa esto:\n${lines}\n¿Podemos hablar?`;
}
