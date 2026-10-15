export type ContactPayload = {
  nombre: string;
  empresa: string;
  email: string;
  servicio: string;
  mensaje: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export const SERVICE_OPTIONS = [
  "Sistema de gestión",
  "Tienda online",
  "Automatización o integraciones",
  "Todavía no sé",
] as const;

export function payloadFromFormData(fd: FormData): ContactPayload {
  const get = (key: keyof ContactPayload) => String(fd.get(key) ?? "").trim();
  return {
    nombre: get("nombre"),
    empresa: get("empresa"),
    email: get("email"),
    servicio: get("servicio"),
    mensaje: get("mensaje"),
  };
}

/** Largo máximo de cada campo: corta abusos sin molestar a una persona real. */
export const CONTACT_LIMITS: Record<keyof ContactPayload, number> = {
  nombre: 100,
  empresa: 120,
  email: 254,
  servicio: 60,
  mensaje: 3000,
};

/** Campo oculto que una persona nunca completa; si viene con algo, es un bot. */
export const HONEYPOT_FIELD = "sitio";

const FIELDS = Object.keys(CONTACT_LIMITS) as (keyof ContactPayload)[];

export function validateContact(p: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (!p.nombre) errors.nombre = "Contanos cómo te llamás.";
  if (!/^[^\s@"<>]+@[^\s@"<>]+\.[^\s@"<>]+$/.test(p.email)) errors.email = "Revisá el email: así no te podemos responder.";
  if (!(SERVICE_OPTIONS as readonly string[]).includes(p.servicio)) errors.servicio = "Elegí una opción (puede ser “Todavía no sé”).";
  for (const key of FIELDS) {
    if (!errors[key] && p[key].length > CONTACT_LIMITS[key]) errors[key] = `Es demasiado largo (máximo ${CONTACT_LIMITS[key]} caracteres).`;
  }
  return errors;
}

export type ParsedContact =
  | { kind: "ok"; payload: ContactPayload }
  | { kind: "spam" }
  | { kind: "invalid"; errors: ContactErrors };

/** Valida en el servidor un cuerpo que puede venir de cualquier lado, no solo del formulario. */
export function parseContactBody(body: unknown): ParsedContact {
  if (typeof body !== "object" || body === null) return { kind: "invalid", errors: {} };
  const record = body as Record<string, unknown>;
  const honeypot = record[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim() !== "") return { kind: "spam" };

  const payload = {} as ContactPayload;
  for (const key of FIELDS) {
    const value = record[key] ?? "";
    if (typeof value !== "string") return { kind: "invalid", errors: { [key]: "Formato inválido." } };
    payload[key] = value.trim();
  }
  const errors = validateContact(payload);
  return Object.keys(errors).length > 0 ? { kind: "invalid", errors } : { kind: "ok", payload };
}

const HTML_ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}
