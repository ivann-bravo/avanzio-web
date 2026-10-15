import { Resend } from "resend";
import { NextResponse } from "next/server";
import { parseContactBody } from "@/lib/contact";
import { contactEmailHtml, contactSubject } from "@/lib/contact-email";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "El envío de mails no está configurado." }, { status: 503 });
  }

  const { payload } = parsed;
  const { error } = await new Resend(apiKey).emails.send({
    from: "Avanzio Web <noreply@avanzio.ar>",
    to: "hola@avanzio.ar",
    replyTo: payload.email,
    subject: contactSubject(payload),
    html: contactEmailHtml(payload),
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
