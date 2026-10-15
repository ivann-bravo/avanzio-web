import Link from "next/link";
import { team } from "@/content/team";

/** "Hablás con quienes programan." Las iniciales esperan las fotos reales del equipo. */
export function TeamStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`reveal grid gap-8 border-t border-bone-on-ink/25 pt-12 md:grid-cols-[auto_1fr] md:items-center ${className}`}>
      <ul className="flex -space-x-4" aria-label="Equipo">
        {team.map((m) => (
          <li key={m.name} className="grid size-20 place-items-center rounded-full bg-paper text-lg font-bold text-ink ring-4 ring-ink">
            <span aria-hidden="true">{m.initials}</span>
            <span className="sr-only">{m.name}</span>
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
