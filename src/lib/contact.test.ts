import { describe, expect, it } from "vitest";
import { payloadFromFormData, validateContact, type ContactPayload } from "@/lib/contact";

const valid: ContactPayload = {
  nombre: "Ana",
  empresa: "",
  email: "ana@negocio.com",
  servicio: "Tienda online",
  mensaje: "",
};

describe("contacto", () => {
  it("recorta espacios y completa campos faltantes con vacío", () => {
    const fd = new FormData();
    fd.set("nombre", "  Ana  ");
    fd.set("email", " ana@negocio.com ");
    expect(payloadFromFormData(fd)).toEqual({ ...valid, servicio: "" });
  });

  it("un payload completo no tiene errores", () => {
    expect(validateContact(valid)).toEqual({});
  });

  it("marca nombre, email inválido y servicio faltante", () => {
    const errors = validateContact({ ...valid, nombre: "", email: "ana@", servicio: "" });
    expect(Object.keys(errors).sort()).toEqual(["email", "nombre", "servicio"]);
  });

  it("acepta emails con subdominio y rechaza los que tienen espacios", () => {
    expect(validateContact({ ...valid, email: "ana@mail.negocio.com.ar" })).toEqual({});
    expect(validateContact({ ...valid, email: "ana @negocio.com" }).email).toBeDefined();
  });
});
