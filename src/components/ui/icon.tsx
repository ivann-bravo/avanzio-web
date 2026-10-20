import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconCheck,
  IconMail,
  IconMenu2,
  IconPlus,
  IconX,
  type Icon as TablerIcon,
} from "@tabler/icons-react";

const ICONS = {
  whatsapp: IconBrandWhatsapp,
  instagram: IconBrandInstagram,
  linkedin: IconBrandLinkedin,
  facebook: IconBrandFacebook,
  tiktok: IconBrandTiktok,
  "arrow-right": IconArrowRight,
  "arrow-up-right": IconArrowUpRight,
  mail: IconMail,
  plus: IconPlus,
  menu: IconMenu2,
  close: IconX,
  check: IconCheck,
} satisfies Record<string, TablerIcon>;

export type IconName = keyof typeof ICONS;

/** Íconos de Tabler con un solo trazo para todo el sitio. Siempre decorativos: el texto vecino da el significado. */
export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const Glyph = ICONS[name];
  return <Glyph stroke={1.75} aria-hidden="true" className={className} />;
}
