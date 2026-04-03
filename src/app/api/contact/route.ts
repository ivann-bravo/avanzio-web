import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nombre, empresa, email, servicio, mensaje } = await req.json();

  if (!nombre || !email || !servicio) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Avanzio Web <noreply@avanzio.ar>",
    to: "hola@avanzio.ar",
    replyTo: email,
    subject: `Nuevo contacto: ${nombre}${empresa ? ` (${empresa})` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #7C3AED; margin-bottom: 24px;">Nuevo mensaje desde avanzio.ar</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px;">Nombre</td>
            <td style="padding: 8px 0; font-weight: 600;">${nombre}</td>
          </tr>
          ${empresa ? `
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Empresa</td>
            <td style="padding: 8px 0; font-weight: 600;">${empresa}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #7C3AED;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Servicio</td>
            <td style="padding: 8px 0;">${servicio}</td>
          </tr>
          ${mensaje ? `
          <tr>
            <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Mensaje</td>
            <td style="padding: 8px 0; white-space: pre-wrap;">${mensaje}</td>
          </tr>` : ""}
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">Respondé directamente a este email para contactar a ${nombre}.</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
