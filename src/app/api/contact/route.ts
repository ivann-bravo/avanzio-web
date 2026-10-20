import { Resend } from "resend";
import { NextResponse } from "next/server";
import { parseContactBody } from "@/lib/contact";
import { contactEmailHtml, contactSubject } from "@/lib/contact-email";
import { TURNSTILE_FIELD, verifyTurnstile } from "@/lib/turnstile";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "El cuerpo no es JSON válido." }, { status: 400 });
  }

  const parsed = parseContactBody(body);
  // A un bot le respondemos como si hubiera salido bien, para que no reintente.
  if (parsed.kind === "spam") return NextResponse.json({ ok: true });
  if (parsed.kind === "invalid") {
    return NextResponse.json({ error: "Datos inválidos.", fields: parsed.errors }, { status: 400 });
  }

  // Con las dos claves de Cloudflare Turnstile configuradas, solo pasan los envíos que Cloudflare valida como humanos.
  // Si falta la pública, el widget no se muestra y nadie podría verificarse: en ese caso no se exige.
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
    const token = (body as Record<string, unknown>)[TURNSTILE_FIELD];
    const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (typeof token !== "string" || !token || !(await verifyTurnstile(token, turnstileSecret, ip))) {
      return NextResponse.json({ error: "No pudimos verificar el envío. Probá de nuevo." }, { status: 400 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "El envío de mails no está configurado." }, { status: 503 });
  }

  const { payload } = parsed;
  const { error } = await new Resend(apiKey).emails.send({
    from: "Avanzio Web <noreply@avanzio.ar>",
    to: "hola@avanzio.ar",
    ...(payload.email ? { replyTo: payload.email } : {}),
    subject: contactSubject(payload),
    html: contactEmailHtml(payload),
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
