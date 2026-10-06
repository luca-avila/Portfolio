export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

// Español en la raíz; el resto de idiomas bajo su prefijo. Con
// `trailingSlash` cada ruta se exporta como `<ruta>/index.html`.
export const localePaths: Record<Locale, string> = {
  es: "/",
  en: "/en/",
};

export const ogLocales: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};
