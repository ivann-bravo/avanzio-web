import { escapeHtml, waLinkForPhone, type ContactPayload } from "@/lib/contact";
import { SITE_URL } from "@/lib/seo";
import { palette } from "@/lib/tokens";

/** Asunto en una sola línea: sin saltos que permitan inyectar cabeceras. */
export function contactSubject(p: ContactPayload): string {
  const parts = [`Nuevo contacto: ${p.nombre}`, p.empresa, p.servicio].filter(Boolean);
  return parts.join(" · ").replace(/[\r\n]+/g, " ");
}

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const receivedFormat = new Intl.DateTimeFormat("es-AR", {
  timeZone: "America/Argentina/Buenos_Aires",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function button(href: string, label: string, primary: boolean): string {
  const colors = primary
    ? `background:${palette.violet};color:${palette.bone};border:2px solid ${palette.violet};`
    : `background:${palette.bone};color:${palette.ink};border:2px solid ${palette.ink};`;
  return `<a href="${href}" style="display:inline-block;${colors}font-family:${FONT};font-size:15px;font-weight:700;line-height:1;text-decoration:none;padding:14px 22px;border-radius:999px;margin:0 8px 10px 0;">${label}</a>`;
}

function contactRow(label: string, value: string): string {
  return `
              <tr>
                <td style="padding:6px 0;width:96px;vertical-align:top;font-family:${FONT};font-size:13px;color:${palette["ink-muted"]};">${label}</td>
                <td style="padding:6px 0;vertical-align:top;font-family:${FONT};font-size:15px;color:${palette.ink};">${value}</td>
              </tr>`;
}

/**
 * Mail interno para el equipo cuando alguien completa el formulario.
 * Todo lo que escribió la persona pasa por escapeHtml. Estilos en línea y tablas: así lo leen bien Gmail y Outlook.
 */
export function contactEmailHtml(p: ContactPayload, receivedAt: Date = new Date()): string {
  const nombre = escapeHtml(p.nombre);
  const firstName = p.nombre.split(/\s+/)[0] ?? p.nombre;
  const mailto = `mailto:${encodeURIComponent(p.email)}?subject=${encodeURIComponent("Tu consulta en Avanzio")}`;
  const wa = p.whatsapp
    ? `${waLinkForPhone(p.whatsapp)}?text=${encodeURIComponent(`Hola ${firstName}, te escribimos de Avanzio por tu consulta en la web.`)}`
    : "";
  const link = (href: string, text: string) => `<a href="${href}" style="color:${palette.violet};font-weight:600;text-decoration:none;">${text}</a>`;
  const preheader = escapeHtml([p.nombre, p.servicio, p.whatsapp ? "dejó su WhatsApp" : "dejó su email"].join(" · "));

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Nuevo contacto</title>
</head>
<body style="margin:0;padding:0;background:${palette.paper};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${palette.paper};">
    <tr><td align="center" style="padding:32px 12px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;">

        <tr><td style="padding:0 4px 18px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;">
              <img src="${SITE_URL}/icon-192.png" width="36" height="36" alt="Avanzio" style="display:block;border:0;border-radius:10px;">
            </td>
            <td align="right" style="vertical-align:middle;font-family:${FONT};font-size:13px;color:${palette["ink-muted"]};">
              Llegó el ${receivedFormat.format(receivedAt)}
            </td>
          </tr></table>
        </td></tr>

        <tr><td style="background:${palette.bone};border:1px solid ${palette.sand};border-radius:18px;padding:28px;">
          <p style="margin:0 0 6px;font-family:${FONT};font-size:13px;font-weight:600;color:${palette.violet};">Nuevo contacto desde la web</p>
          <h1 style="margin:0;font-family:${FONT};font-size:28px;line-height:1.15;font-weight:800;color:${palette.ink};">${nombre}</h1>
          ${p.empresa ? `<p style="margin:4px 0 0;font-family:${FONT};font-size:16px;color:${palette["ink-soft"]};">${escapeHtml(p.empresa)}</p>` : ""}
          <p style="margin:16px 0 0;">
            <span style="display:inline-block;background:${palette["violet-tint"]};color:${palette["violet-deep"]};font-family:${FONT};font-size:13px;font-weight:700;padding:6px 12px;border-radius:999px;">${escapeHtml(p.servicio)}</span>
          </p>

          ${
            p.mensaje
              ? `<div style="margin:22px 0 0;background:${palette.paper};border-left:3px solid ${palette.violet};border-radius:0 12px 12px 0;padding:16px 18px;">
            <p style="margin:0 0 6px;font-family:${FONT};font-size:13px;color:${palette["ink-muted"]};">Mensaje</p>
            <p style="margin:0;font-family:${FONT};font-size:16px;line-height:1.55;color:${palette.ink};white-space:pre-wrap;">${escapeHtml(p.mensaje)}</p>
          </div>`
              : ""
          }

          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px 0 0;">
            ${p.whatsapp ? contactRow("WhatsApp", link(wa, escapeHtml(p.whatsapp))) : ""}
            ${p.email ? contactRow("Email", link(mailto, escapeHtml(p.email))) : ""}
          </table>

          <div style="margin:24px 0 0;">
            ${p.whatsapp ? button(wa, "Escribirle por WhatsApp", true) : ""}
            ${p.email ? button(mailto, "Responderle por mail", !p.whatsapp) : ""}
          </div>
        </td></tr>

        <tr><td style="padding:18px 4px 0;font-family:${FONT};font-size:12px;line-height:1.5;color:${palette["ink-muted"]};text-align:center;">
          Llegó desde el formulario de ${link(`${SITE_URL}/contacto`, "avanzio.ar/contacto")}. Prometimos responder el mismo día hábil.
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
