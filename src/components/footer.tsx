import Link from "next/link";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos de Éxito" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-[#334155] pt-16 pb-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#4f46e5] text-2xl">code_blocks</span>
              <span className="text-xl font-bold text-white">Avanzio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Tu socio tecnológico para crecer con sistemas que realmente funcionan.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Banfield, Buenos Aires, Argentina
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">EMPRESA</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
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
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                hola@avanzio.com.ar
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">LEGAL</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
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

        <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2026 Avanzio. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
