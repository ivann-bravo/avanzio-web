import { CasesPreview } from "@/components/home/cases-preview";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { ServicesPreview } from "@/components/home/services-preview";
import { Signals } from "@/components/home/signals";
import { Transformation } from "@/components/home/transformation";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { faqFor } from "@/content/faq";

export default function HomePage() {
  return (
    <>
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
