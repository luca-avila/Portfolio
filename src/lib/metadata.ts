import type { Metadata, Viewport } from "next";
import { profiles } from "@/content/profile";
import { localePaths, locales, ogLocales, type Locale } from "@/lib/i18n";

export function buildMetadata(locale: Locale): Metadata {
  const profile = profiles[locale];
  const pageTitle = `${profile.name} — ${profile.role}`;
  const pageDescription = `${profile.name} — ${profile.role}. ${profile.tagline}`;

  return {
    metadataBase: new URL("https://luca-avila.com"),
    title: pageTitle,
    description: pageDescription,
    icons: { icon: "/favicon.svg" },
    alternates: {
      canonical: localePaths[locale],
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePaths[l]])),
        "x-default": localePaths.es,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      url: localePaths[locale],
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};
