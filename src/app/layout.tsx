import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFAB from "@/components/whatsapp-fab";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Avanzio",
    default: "Avanzio — Software a Medida para PyMEs",
  },
  description:
    "Desarrollamos sistemas a medida, tiendas online y paneles de gestión para PyMEs argentinas. Tu socio tecnológico, no un proveedor más.",
  keywords: ["software a medida", "desarrollo web", "PyMEs Argentina", "e-commerce", "panel de gestión", "Banfield", "Buenos Aires"],
  authors: [{ name: "Avanzio" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Avanzio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-display min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
