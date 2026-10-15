import Link from "next/link";
import AvanzioLogo from "@/components/avanzio-logo";
import { site, type SocialLink } from "@/content/site";
import { waLink } from "@/lib/whatsapp";

const NAV = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

const linkClass = "text-paper/90 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline";

export function Footer() {
  const socials = site.social.filter((s): s is SocialLink & { url: string } => s.url !== null);

  return (
    <footer className="bg-ink px-4 pb-10 pt-20 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <AvanzioLogo width={140} className="fill-paper" />
          <p className="mt-6 max-w-[34ch] text-bone-on-ink">
            Software a medida para PyMEs que ya no entran en un Excel. Hecho en Buenos Aires.
          </p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="space-y-2">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2">
          <li>
            <a href={waLink("generic")} target="_blank" rel="noopener noreferrer" className={linkClass}>
              WhatsApp {site.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </li>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-16 max-w-6xl border-t border-bone-on-ink/20 pt-6 text-sm text-bone-on-ink">
        © {new Date().getFullYear()} Avanzio · Buenos Aires, Argentina
      </p>
    </footer>
  );
}
