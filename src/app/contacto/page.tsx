import type { Metadata } from "next";
import ContactoContent from "./contacto-content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos de tu proyecto. Respondemos en menos de 24 horas. Primera reunión gratis y sin compromiso.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
