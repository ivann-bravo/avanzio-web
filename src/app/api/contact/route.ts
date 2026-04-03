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
    subject: `🟣 Nuevo contacto: ${nombre}${empresa ? ` · ${empresa}` : ""} — ${servicio}`,
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr><td style="background:linear-gradient(135deg,#4f46e5,#0f172a);border-radius:16px 16px 0 0;padding:32px 40px;">
          
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              
              <td valign="middle" style="text-align:left;">
                <p style="margin:0 0 6px;color:rgba(255,255,255,1);font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">avanzio.ar</p>
                <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;line-height:1.3;">Nuevo contacto recibido</h1>
                <p style="margin:8px 0 0;color:rgba(255,255,255,1);font-size:14px;">Alguien quiere trabajar con ustedes 🚀</p>
              </td>

              <td valign="middle" align="right" style="width:60px; padding-left:15px;">
                <img src="https://github.com/ivann-bravo/avanzio-web/blob/master/public/android-chrome-192x192.png?raw=true" alt="Avanzio" width="50" style="display:block; border:none; outline:none; text-decoration:none;">
              </td>
              
            </tr>
          </table>
          </td></tr>

        <!-- DATOS PRINCIPALES -->
        <tr><td style="background:#fff;padding:32px 40px 24px;">

          <!-- Nombre + empresa -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td style="vertical-align:top;width:50%;padding-right:12px;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Nombre</p>
                <p style="margin:0;font-size:18px;font-weight:700;color:#0f172a;">${nombre}</p>
              </td>
              ${empresa ? `
              <td style="vertical-align:top;width:50%;padding-left:12px;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Empresa</p>
                <p style="margin:0;font-size:18px;font-weight:700;color:#0f172a;">${empresa}</p>
              </td>` : "<td></td>"}
            </tr>
          </table>

          <!-- Separador -->
          <hr style="border:none;border-top:1px solid #f1f5f9;margin:0 0 24px;">

          <!-- Email + Servicio -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td style="vertical-align:top;width:50%;padding-right:12px;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Email</p>
                <a href="mailto:${email}" style="color:#7C3AED;font-size:14px;font-weight:600;text-decoration:none;">${email}</a>
              </td>
              <td style="vertical-align:top;width:50%;padding-left:12px;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Interesado en</p>
                <span style="display:inline-block;background:#7C3AED15;color:#7C3AED;font-size:13px;font-weight:700;padding:4px 12px;border-radius:20px;border:1px solid #7C3AED30;">${servicio}</span>
              </td>
            </tr>
          </table>

          ${mensaje ? `
          <!-- Mensaje -->
          <div style="background:#f8fafc;border-left:3px solid #7C3AED;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:24px;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Mensaje</p>
            <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap;">${mensaje}</p>
          </div>` : ""}

          <!-- CTA Responder -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding-top:8px;">
                <a href="mailto:${email}?subject=Re: Tu consulta en Avanzio&body=Hola ${nombre}," style="display:inline-block;background:linear-gradient(135deg,#7C3AED,#4F46E5);color:#fff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;">
                  Responder a ${nombre} →
                </a>
              </td>
            </tr>
          </table>

        </td></tr>

        <!-- FOOTER -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">
            Este mensaje fue enviado desde el formulario de <strong style="color:#64748b;">avanzio.ar</strong>.<br>
            Respondé directamente a este email para contactar a ${nombre}.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
