import type { Metadata, Viewport } from "next";
import { profile } from "@/content/profile";
import "./globals.css";

const pageTitle = `${profile.name} — ${profile.role}`;
const pageDescription = `${profile.name} — ${profile.role}. ${profile.tagline}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
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
