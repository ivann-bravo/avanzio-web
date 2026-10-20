export type TeamMember = {
  name: string;
  /** Foto cuadrada en /public/equipo. */
  photo: string;
  role: string;
  /** Qué hace, en palabras del cliente. */
  focus: string;
  /** Una línea personal: lo que más disfruta resolver. */
  likes: string;
};

export const team: readonly TeamMember[] = [
  {
    name: "Iván",
    photo: "/equipo/ivan.jpg",
    role: "Sistemas y automatizaciones",
    focus: "Arma el sistema por dentro para que los datos se muevan solos.",
    likes: "cuando una tarea de tres horas pasa a ser un botón.",
  },
  {
    name: "Magalí",
    photo: "/equipo/magali.jpg",
    role: "Diseño y experiencia",
    focus: "Pantallas simples para que tu equipo lo use sin manual.",
    likes: "que alguien use el sistema por primera vez y no tenga que preguntar nada.",
  },
  {
    name: "Julián",
    photo: "/equipo/julian.jpg",
    role: "Infraestructura y seguridad",
    focus: "Que el sistema esté siempre andando y tus datos, cuidados.",
    likes: "que nadie se acuerde de que existe el servidor.",
  },
];
