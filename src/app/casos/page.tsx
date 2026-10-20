import type { Metadata } from "next";
import { CasesList } from "@/components/sections/cases-list";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Negocios reales que dejaron la planilla: TryHardware, Santa Benedetta, Troncone Motors, G3D y Motora.",
};

export default function CasosPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Negocios reales, <span className="text-accent text-violet">sin planillas.</span>
          </>
        }
        intro="Cada uno empezó con un problema concreto. Así se ve hoy."
      />
      <Section tone="bone" aria-label="Listado de casos">
        <CasesList />
      </Section>
      <FinalCta context="casos" />
    </>
  );
}
