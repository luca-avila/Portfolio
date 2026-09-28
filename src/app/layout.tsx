import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Portafolio personal",
  description:
    "Portafolio personal en español: proyectos, experiencia y vías de contacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0a0a0a] text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
