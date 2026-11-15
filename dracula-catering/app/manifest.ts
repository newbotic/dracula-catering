import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dracula Catering",
    short_name: "Dracula",
    description: "Gothic-inspired catering for events that leave a mark.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0a0b",
    theme_color: "#b3122a",
    orientation: "portrait",
    icons: [
      { src: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
