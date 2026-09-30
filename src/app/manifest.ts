import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "peptides.cx — The Peptide Community Exchange",
    short_name: "peptides.cx",
    description:
      "Educational community for peptide research, experience reports, safety and verified vendor transparency.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
