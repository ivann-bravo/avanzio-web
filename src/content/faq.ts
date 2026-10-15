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
      "Un primer sistema funcionando suele estar en semanas, no meses. Santa Benedetta tuvo su primera versión en un mes.",
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
