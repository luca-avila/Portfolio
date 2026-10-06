import { Geist, JetBrains_Mono, Newsreader } from "next/font/google";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

const editorial = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-editorial-family",
  display: "swap",
});

const meta = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-meta-family",
  display: "swap",
});

// `<html>` compartido por los root layouts de cada idioma. Las variables de
// fuente van en <html> para que `globals.css` las resuelva desde la raíz.
export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html
      lang={locale}
      className={`${sans.variable} ${editorial.variable} ${meta.variable}`}
    >
      <body className="min-h-screen bg-[#0a0a0a] font-sans text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
