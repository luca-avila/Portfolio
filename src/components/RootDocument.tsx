import { Newsreader, JetBrains_Mono } from "next/font/google";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";

const editorial = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-editorial",
  display: "swap",
});

const meta = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-meta",
  display: "swap",
});

// `<html>` compartido por los root layouts de cada idioma.
export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang={locale}>
      <body
        className={`min-h-screen bg-[#0a0a0a] text-neutral-100 antialiased ${editorial.variable} ${meta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
