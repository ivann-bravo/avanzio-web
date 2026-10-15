import Image from "next/image";
import type { Service } from "@/content/services";

/** Las capturas reales de un servicio: escritorio sola, escritorio + celular, o celular sobre fondo. */
export function ServiceMedia({ service }: { service: Service }) {
  const desktop = service.images.find((i) => i.device === "desktop");
  const mobile = service.images.find((i) => i.device === "mobile");

  if (desktop && mobile) {
    return (
      <figure className="grid grid-cols-[1.6fr_1fr] items-end gap-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-sand">
          <Image src={desktop.src} alt={desktop.alt} fill sizes="(min-width: 768px) 34vw, 60vw" className="object-cover object-top" />
        </div>
        <div className="relative aspect-[9/16] overflow-hidden rounded-[var(--radius-card)] border border-sand">
          <Image src={mobile.src} alt={mobile.alt} fill sizes="(min-width: 768px) 20vw, 36vw" className="object-cover object-top" />
        </div>
      </figure>
    );
  }

  if (mobile) {
    return (
      <figure className="flex justify-center overflow-hidden rounded-[var(--radius-card)] bg-before-card px-6 pt-8">
        <div className="relative aspect-[375/560] w-[46%] max-w-[230px] overflow-hidden rounded-t-2xl border border-sand shadow-[0_-12px_30px_-18px_rgba(22,19,15,0.5)]">
          <Image src={mobile.src} alt={mobile.alt} fill sizes="230px" className="object-cover object-top" />
        </div>
      </figure>
    );
  }

  if (!desktop) return null;
  return (
    <figure className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-sand bg-ink">
      <Image
        src={desktop.src}
        alt={desktop.alt}
        fill
        sizes="(min-width: 768px) 54vw, 100vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    </figure>
  );
}
