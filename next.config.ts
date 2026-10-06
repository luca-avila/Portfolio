import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Cada idioma se exporta como `<ruta>/index.html` (`out/en/index.html`).
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
