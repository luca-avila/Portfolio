import { dictionaries } from "@/content/ui";
import { localePaths, locales, type Locale } from "@/lib/i18n";

// Selector ES / EN. Cada idioma es una página estática distinta, así que el
// idioma activo es texto y el otro un enlace normal a su ruta.
export default function LanguageSwitch({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const { nav } = dictionaries[locale];

  return (
    <ul
      aria-label={nav.languageLabel}
      className="font-meta flex items-center rounded-full border border-white/10 p-1 text-[0.6875rem] tracking-[0.08em] uppercase"
    >
      {locales.map((l) => (
        <li key={l}>
          {l === locale ? (
            <span
              aria-current="true"
              className="block rounded-full bg-white/10 px-2.5 py-1 text-neutral-50"
            >
              {l}
            </span>
          ) : (
            <a
              href={localePaths[l]}
              hrefLang={l}
              aria-label={nav.switchTo}
              className="block rounded-full px-2.5 py-1 text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {l}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
