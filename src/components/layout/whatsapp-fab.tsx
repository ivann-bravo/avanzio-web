import { Icon } from "@/components/ui/icon";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("generic")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-ink shadow-[0_10px_28px_-10px_rgba(22,19,15,0.55)] transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-95"
    >
      <Icon name="whatsapp" className="size-7" />
    </a>
  );
}
