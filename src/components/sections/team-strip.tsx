import Image from "next/image";
import Link from "next/link";
import { team } from "@/content/team";

/** "Hablás con quienes programan.", con las caras de los tres. */
export function TeamStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`reveal grid gap-8 border-t border-bone-on-ink/25 pt-12 md:grid-cols-[auto_1fr] md:items-center ${className}`}>
      <ul className="flex -space-x-4" aria-label="Equipo">
        {team.map((m) => (
          <li key={m.name} className="relative size-20 overflow-hidden rounded-full bg-violet ring-4 ring-ink">
            <Image src={m.photo} alt={m.name} fill sizes="80px" className="object-cover" />
          </li>
        ))}
      </ul>
      <div>
        <p className="text-2xl font-bold">Hablás con quienes programan.</p>
        <p className="mt-2 max-w-[56ch] text-bone-on-ink">
          Iván, Magalí y Julián. Sin intermediarios ni cuentas que pasan de mano en mano.{" "}
          <Link href="/nosotros" className="font-semibold text-paper underline underline-offset-4">
            Conocernos
          </Link>
        </p>
      </div>
    </div>
  );
}
