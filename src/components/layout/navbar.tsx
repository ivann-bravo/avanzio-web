"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import AvanzioLogo from "@/components/avanzio-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { waLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  // Borde inferior cuando la página dejó de estar arriba de todo (sin escuchar el scroll).
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-2" />
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b bg-paper transition-colors duration-200 ${
          scrolled || open ? "border-sand" : "border-transparent"
        }`}
      >
        <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <Link href="/" aria-label="Avanzio, inicio" onClick={close} className="relative z-50 text-ink">
            <AvanzioLogo width={104} />
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-[0.9375rem] font-medium transition-colors duration-200 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-200 ${
                      active ? "text-ink after:scale-x-100" : "text-ink-soft after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ButtonLink href={waLink("generic")} variant="ink" size="sm" icon="whatsapp">
                Escribinos
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="relative z-50 grid size-11 place-items-center rounded-full text-ink transition-transform duration-150 active:scale-95 md:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-6" />
            </button>
          </div>
        </nav>

        <div id="menu-mobile" hidden={!open} className="fixed inset-0 z-40 flex flex-col bg-paper px-4 pb-8 pt-24 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link, i) => (
              <li key={link.href} className="menu-item" style={{ "--d": `${i * 40}ms` } as CSSProperties}>
                <Link href={link.href} onClick={close} className="block py-2 text-impact text-[3.5rem]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href={waLink("generic")} icon="whatsapp" size="lg" className="mt-auto w-full">
            Escribinos por WhatsApp
          </ButtonLink>
        </div>
      </header>
    </>
  );
}
