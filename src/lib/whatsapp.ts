const PHONE = "5491170630456";

const encode = (text: string) => encodeURIComponent(text);

export const WA = {
  generic: `https://wa.me/${PHONE}?text=${encode("Hola Avanzio! Vengo del sitio web y quería consultarles sobre...")}`,
  home: `https://wa.me/${PHONE}?text=${encode("Hola Avanzio! Ví el sitio web y quiero hablar sobre cómo pueden ayudarme a hacer crecer mi negocio.")}`,
  servicios: `https://wa.me/${PHONE}?text=${encode("Hola Avanzio! Estuve viendo los servicios que ofrecen y quiero saber más. Cuando podemos hablar?")}`,
  nosotros: `https://wa.me/${PHONE}?text=${encode("Hola Avanzio! Ví el sitio web y quiero hablar sobre cómo pueden ayudarme a hacer crecer mi negocio.")}`,
  contacto: `https://wa.me/${PHONE}?text=${encode("Hola Avanzio! Los contacto desde el sitio web. Quería consultarles sobre...")}`,
};
