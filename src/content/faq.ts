export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  scopes: readonly ("home" | "servicios")[];
};

const faq: readonly FaqItem[] = [
  {
    id: "precio",
    question: "¿Cuánto sale?",
    answer:
      "Depende de lo que necesites. En la primera charla entendemos tu negocio y te pasamos un rango claro antes de arrancar.",
    scopes: ["home", "servicios"],
  },
  {
    id: "plazo",
    question: "¿Cuánto tarda?",
    answer:
      "Un primer sistema funcionando suele estar en semanas, no meses. Arrancamos con lo que más te resuelve y sumamos de a poco.",
    scopes: ["home", "servicios"],
  },
  {
    id: "ya-tengo-algo",
    question: "Ya tengo algo armado, ¿sirve?",
    answer:
      "Sí. Muchas veces conviene mejorar lo que ya funciona. Lo revisamos juntos y te decimos honestamente qué conviene.",
    scopes: ["home", "servicios"],
  },
  {
    id: "pago",
    question: "¿Cómo se paga?",
    answer:
      "En general, la mitad al arrancar y la otra mitad al terminar, con todo lo que vamos a hacer definido por escrito. Según el proyecto, también se puede pagar por etapas. Los cambios chicos en el camino no tienen costo extra; si aparece algo grande, actualizamos el presupuesto antes de hacerlo.",
    scopes: ["home", "servicios"],
  },
  {
    id: "costo-mensual",
    question: "¿Hay un costo mensual después?",
    answer:
      "Sí: todo sistema necesita hosting y algunos servicios para funcionar. Arranca lo más económico posible y crece solo si crece tu negocio. Podés gestionarlo vos (te enseñamos) o dejárnoslo a nosotros con un abono mensual.",
    scopes: ["home", "servicios"],
  },
  {
    id: "propiedad",
    question: "¿El sistema queda a mi nombre?",
    answer:
      "Sí. El sistema, los datos y las cuentas (dominio, hosting, mails) quedan a nombre de tu negocio, y si algún día querés seguir sin nosotros, podés. El código lo mantenemos nosotros. Si usás un producto propio de Avanzio pensado para muchos negocios, como Motora, lo usás con licencia.",
    scopes: ["home", "servicios"],
  },
  {
    id: "despues",
    question: "¿Me dejan solo después?",
    answer:
      "No. Lo dejamos andando, te enseñamos a usarlo y seguimos disponibles. Hablás siempre con las mismas personas.",
    scopes: ["home", "servicios"],
  },
  {
    id: "tecnologia",
    question: "¿Necesito saber de tecnología?",
    answer: "No. Vos sabés de tu negocio y nosotros lo traducimos a un sistema. Te explicamos todo sin tecnicismos.",
    scopes: ["servicios"],
  },
  {
    id: "celular",
    question: "¿Funciona en el celular?",
    answer:
      "Sí. Todo lo que hacemos está pensado primero para el celular, porque ahí trabajás vos y ahí te compran tus clientes.",
    scopes: ["servicios"],
  },
  {
    id: "cambios",
    question: "¿Y si después quiero cambiar algo?",
    answer: "Se cambia. Arrancamos con lo justo y el sistema crece con tu negocio, a medida que aparecen cosas nuevas para resolver.",
    scopes: ["servicios"],
  },
  {
    id: "arrancar",
    question: "¿Cómo arrancamos?",
    answer:
      "Escribinos por WhatsApp contándonos qué te frena. Coordinamos una charla corta, sin compromiso, y de ahí sale una propuesta.",
    scopes: ["servicios"],
  },
];

export function faqFor(scope: "home" | "servicios"): readonly FaqItem[] {
  return faq.filter((item) => item.scopes.includes(scope));
}
