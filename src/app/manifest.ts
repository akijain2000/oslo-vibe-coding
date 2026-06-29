import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: "OVC",
    description: brand.description,
    start_url: "/",
    display: "standalone",
    background_color: "#110f17",
    theme_color: "#110f17",
    lang: "en",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
