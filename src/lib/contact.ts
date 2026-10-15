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

export function validateContact(p: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (!p.nombre) errors.nombre = "Contanos cómo te llamás.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) errors.email = "Revisá el email: así no te podemos responder.";
  if (!p.servicio) errors.servicio = "Elegí una opción (puede ser “Todavía no sé”).";
  return errors;
}
