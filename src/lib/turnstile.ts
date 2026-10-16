const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Campo del cuerpo donde el formulario manda el token del widget de Cloudflare Turnstile. */
export const TURNSTILE_FIELD = "turnstileToken";

/** Pregunta a Cloudflare si el token corresponde a una persona. Cualquier error cuenta como "no". */
export async function verifyTurnstile(token: string, secret: string, ip?: string | null): Promise<boolean> {
  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set("remoteip", ip);
  try {
    const res = await fetch(VERIFY_URL, { method: "POST", body: form });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
