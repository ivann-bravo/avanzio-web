import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { RevealInit } from "@/components/reveal-init";
import { JsonLd } from "@/components/seo/json-ld";
import { palette } from "@/lib/tokens";
import { OPEN_GRAPH_BASE, SITE_DESCRIPTION, SITE_URL, organizationSchema, websiteSchema } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Avanzio",
    default: "Avanzio · Software a medida para PyMEs en Argentina",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Avanzio", url: SITE_URL }],
  creator: "Avanzio",
  formatDetection: { telephone: false },
  verification: { google: "J0XncEn9cf--P-7bvSKuftcsfPnlJZNidQ_N2oFg6VA" },
  openGraph: OPEN_GRAPH_BASE,
};

export const viewport: Viewport = {
  themeColor: palette.paper,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} font-sans min-h-screen flex flex-col`}>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
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
