import type { Metadata } from "next";
import { CasesList } from "@/components/sections/cases-list";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Casos reales: PyMEs que dejaron la planilla",
  description:
    "TryHardware, Santa Benedetta, Troncone Motors, G3D y Motora: cómo trabajaban antes, qué construimos y cómo trabajan hoy.",
  path: "/casos",
});

export default function CasosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", path: "" }, { name: "Casos", path: "/casos" }])} />
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
