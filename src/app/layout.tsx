import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { RevealInit } from "@/components/reveal-init";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  preload: false,
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avanzio.com.ar"),
  title: {
    template: "%s | Avanzio",
    default: "Avanzio · Software a medida para PyMEs",
  },
  description:
    "Desarrollamos sistemas a medida, tiendas online y paneles de gestión para PyMEs argentinas. Tu socio tecnológico, no un proveedor más.",
  keywords: ["software a medida", "desarrollo web", "PyMEs Argentina", "e-commerce", "panel de gestión", "Buenos Aires"],
  authors: [{ name: "Avanzio" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Avanzio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Avanzio. Tu negocio ya no entra en un Excel." }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <RevealInit />
      </body>
    </html>
  );
}
