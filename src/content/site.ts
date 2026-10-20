import type { IconName } from "@/components/ui/icon";

export type SocialLink = { label: string; url: string | null; icon: IconName };

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
    { label: "Instagram", url: "https://www.instagram.com/avanzio.ar/", icon: "instagram" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/avanzioar/", icon: "linkedin" },
    { label: "Facebook", url: "https://www.facebook.com/avanzio.ar/", icon: "facebook" },
    { label: "TikTok", url: "https://www.tiktok.com/@avanzio.ar", icon: "tiktok" },
  ],
};
