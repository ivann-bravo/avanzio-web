import { CasesPreview } from "@/components/home/cases-preview";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { ServicesPreview } from "@/components/home/services-preview";
import { Signals } from "@/components/home/signals";
import { Transformation } from "@/components/home/transformation";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { faqFor } from "@/content/faq";
import { OPEN_GRAPH_BASE, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...OPEN_GRAPH_BASE, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqFor("home"))} />
      <Hero />
      <Signals />
      <Transformation />
      <ServicesPreview />
      <CasesPreview />
      <HowWeWork />
      <FaqSection items={faqFor("home")} />
      <FinalCta context="home" />
    </>
  );
}
