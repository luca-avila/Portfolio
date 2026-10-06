"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";
import { dictionaries } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

// El tema vive en `<html data-theme>` (lo fija el script de `RootDocument`);
// el componente solo lo observa para elegir el `aria-label`.
function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerTheme(): Theme {
  return "dark";
}

export default function ThemeToggle({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const { nav } = dictionaries[locale];

  function handleToggle(): void {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Sin almacenamiento (modo privado): el cambio dura hasta recargar.
    }
  }

  // Los íconos se alternan por CSS (`light:`) para que sean correctos
  // antes de hidratar; el label se corrige al hidratar.
  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={theme === "light" ? nav.darkTheme : nav.lightTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-white/25 hover:text-neutral-100"
    >
      <SunIcon className="light:hidden h-4 w-4" />
      <MoonIcon className="light:block hidden h-4 w-4" />
    </button>
  );
}
