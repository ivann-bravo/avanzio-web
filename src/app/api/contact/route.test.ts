import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const send = vi.fn();
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({ emails: { send } })),
}));

import { POST } from "@/app/api/contact/route";

const valid = { nombre: "Ana", empresa: "", email: "ana@negocio.com", whatsapp: "", servicio: "Tienda online", mensaje: "", t: 6000 };

function post(body: string) {
  return POST(new Request("http://localhost/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body }));
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test");
    send.mockReset().mockResolvedValue({ error: null });
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("responde 400 si el cuerpo no es JSON", async () => {
    const res = await post("{no es json");
    expect(res.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("responde 400 si los datos no pasan la validación", async () => {
    const res = await post(JSON.stringify({ ...valid, servicio: "cualquiera" }));
    expect(res.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("finge éxito ante un bot (campo trampa) y no manda el mail", async () => {
    const res = await post(JSON.stringify({ ...valid, sitio: "x" }));
    expect(res.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });

  it("responde 503 si falta la API key", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const res = await post(JSON.stringify(valid));
    expect(res.status).toBe(503);
  });

  it("escapa lo que escribe el usuario en el mail", async () => {
    const res = await post(JSON.stringify({ ...valid, nombre: '<a href="https://phish.example">Ana</a>', mensaje: "<script>x</script>" }));
    expect(res.status).toBe(200);
    const { html, subject, replyTo } = send.mock.calls[0][0] as { html: string; subject: string; replyTo: string };
    expect(html).not.toContain("<a href=\"https://phish.example\"");
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(subject).not.toMatch(/[\r\n]/);
    expect(replyTo).toBe(valid.email);
  });

  it("responde 500 si Resend falla", async () => {
    send.mockResolvedValue({ error: { message: "boom" } });
    const res = await post(JSON.stringify(valid));
    expect(res.status).toBe(500);
  });

  it("sin email, responde por WhatsApp: el mail no lleva replyTo y muestra el número", async () => {
    const res = await post(JSON.stringify({ ...valid, email: "", whatsapp: "11 7063 0456" }));
    expect(res.status).toBe(200);
    const sent = send.mock.calls[0][0] as { html: string; replyTo?: string };
    expect(sent.replyTo).toBeUndefined();
    expect(sent.html).toContain("https://wa.me/5491170630456");
  });

  describe("con Turnstile configurado", () => {
    beforeEach(() => vi.stubEnv("TURNSTILE_SECRET_KEY", "secreto"));

    it("rechaza con 400 si falta el token", async () => {
      const res = await post(JSON.stringify(valid));
      expect(res.status).toBe(400);
      expect(send).not.toHaveBeenCalled();
    });

    it("rechaza con 400 si Cloudflare dice que no es una persona", async () => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: false }))));
      const res = await post(JSON.stringify({ ...valid, turnstileToken: "malo" }));
      expect(res.status).toBe(400);
      expect(send).not.toHaveBeenCalled();
    });

    it("manda el mail si Cloudflare valida el token", async () => {
      const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: true })));
      vi.stubGlobal("fetch", fetchMock);
      const res = await post(JSON.stringify({ ...valid, turnstileToken: "bueno" }));
      expect(res.status).toBe(200);
      expect(fetchMock.mock.calls[0][0]).toBe("https://challenges.cloudflare.com/turnstile/v0/siteverify");
      expect(send).toHaveBeenCalledOnce();
    });
  });
});
