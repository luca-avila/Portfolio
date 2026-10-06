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
      className="font-meta flex items-center rounded-xl border border-white/15 p-0.5 text-xs tracking-[0.08em] uppercase"
    >
      {locales.map((l) => (
        <li key={l}>
          {l === locale ? (
            <span
              aria-current="true"
              className="block rounded-[0.6rem] bg-white/10 px-2.5 py-1.5 text-neutral-100"
            >
              {l}
            </span>
          ) : (
            <a
              href={localePaths[l]}
              hrefLang={l}
              aria-label={nav.switchTo}
              className="block rounded-[0.6rem] px-2.5 py-1.5 text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {l}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
