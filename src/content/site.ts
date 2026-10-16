export type SocialLink = { label: string; url: string | null };

type Site = {
  email: string;
  whatsappDisplay: string;
  hours: readonly string[];
  social: readonly SocialLink[];
};

export const site: Site = {
  email: "hola@avanzio.ar",
  whatsappDisplay: "+54 9 11 7063-0456",
  hours: ["Lun a vie · 9 a 18 h", "Sáb · 9 a 12 h"],
  social: [
    { label: "Instagram", url: null },
    { label: "LinkedIn", url: null },
  ],
};
