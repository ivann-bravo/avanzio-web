import { escapeHtml, type ContactPayload } from "@/lib/contact";
import { palette } from "@/lib/tokens";

/** Asunto en una sola línea: sin saltos que permitan inyectar cabeceras. */
export function contactSubject(p: ContactPayload): string {
  const parts = [`Nuevo contacto: ${p.nombre}`, p.empresa, p.servicio].filter(Boolean);
  return parts.join(" · ").replace(/[\r\n]+/g, " ");
}

function field(label: string, value: string): string {
  return `
            <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:${palette["ink-muted"]};">${label}</p>
            <p style="margin:0 0 20px;font-size:16px;color:${palette.ink};">${value}</p>`;
}

/** Mail interno para el equipo. Todo lo que escribió el usuario pasa por escapeHtml. */
export function contactEmailHtml(p: ContactPayload): string {
  const nombre = escapeHtml(p.nombre);
  const email = escapeHtml(p.email);
  const mailto = `mailto:${encodeURIComponent(p.email)}`;

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:${palette.paper};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${palette.paper};padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr><td style="background:${palette.violet};border-radius:18px 18px 0 0;padding:28px 32px;">
          <p style="margin:0;color:${palette.bone};font-size:24px;font-weight:800;line-height:1.2;">Nuevo contacto desde la web</p>
        </td></tr>
        <tr><td style="background:${palette.bone};padding:28px 32px;border:1px solid ${palette.sand};border-top:none;">
          ${field("Nombre", nombre)}
          ${p.empresa ? field("Negocio", escapeHtml(p.empresa)) : ""}
          ${field("Email", `<a href="${mailto}" style="color:${palette.violet};font-weight:600;text-decoration:none;">${email}</a>`)}
          ${field("Le interesa", escapeHtml(p.servicio))}
          ${p.mensaje ? field("Mensaje", `<span style="white-space:pre-wrap;">${escapeHtml(p.mensaje)}</span>`) : ""}
          <a href="${mailto}" style="display:inline-block;background:${palette.ink};color:${palette.bone};font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:999px;">Responder a ${nombre}</a>
        </td></tr>
        <tr><td style="padding:16px 32px;">
          <p style="margin:0;font-size:12px;color:${palette["ink-muted"]};text-align:center;">Enviado desde el formulario de contacto. Respondé este mail para hablar con ${nombre}.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
