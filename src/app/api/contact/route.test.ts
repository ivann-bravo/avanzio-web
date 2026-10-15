import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const send = vi.fn();
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({ emails: { send } })),
}));

import { POST } from "@/app/api/contact/route";

const valid = { nombre: "Ana", empresa: "", email: "ana@negocio.com", servicio: "Tienda online", mensaje: "" };

function post(body: string) {
  return POST(new Request("http://localhost/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body }));
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test");
    send.mockReset().mockResolvedValue({ error: null });
  });
  afterEach(() => vi.unstubAllEnvs());

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
});
