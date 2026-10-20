import type { MetadataRoute } from "next";
import { palette } from "@/lib/tokens";
import { SITE_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avanzio · Software a medida para PyMEs",
    short_name: "Avanzio",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    lang: "es-AR",
    background_color: palette.paper,
    theme_color: palette.violet,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
