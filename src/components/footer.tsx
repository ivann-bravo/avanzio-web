import Link from "next/link";
import AvanzioLogo, { AvanzioIsotipo } from "@/components/avanzio-logo";
import { WA } from "@/lib/whatsapp";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos de Éxito" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040309] border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <AvanzioIsotipo size={28} />
              <AvanzioLogo width={100} className="fill-white" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Tu socio tecnológico para crecer con sistemas que realmente funcionan.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Buenos Aires, Argentina
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">EMPRESA</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">CONTACTO</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm shrink-0 mt-0.5">mail</span>
                <span className="break-all">hola@avanzio.ar</span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href={WA.generic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-[#25D366] shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">LEGAL</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Avanzio. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Buenos Aires.</p>
        </div>
      </div>
    </footer>
  );
}
