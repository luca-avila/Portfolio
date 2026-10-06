"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import LanguageSwitch from "@/components/LanguageSwitch";
import { profiles } from "@/content/profile";
import { dictionaries, sectionIndex } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function Navbar({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const { nav, sections } = dictionaries[locale];

  const navLinks = [
    {
      id: sections.projects,
      label: nav.projects,
      index: sectionIndex.projects,
    },
    { id: sections.about, label: nav.about, index: sectionIndex.about },
    { id: sections.contact, label: nav.contact, index: sectionIndex.contact },
  ];

  // Borde y fondo solo cuando la página ya scrolleó.
  useEffect(() => {
    function onScroll(): void {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sección activa: la que cruza la franja central de la pantalla.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    const ids = [
      sections.home,
      sections.projects,
      sections.about,
      sections.contact,
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el !== null) {
        observer.observe(el);
      }
    }
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-[#0a0a0a]/85"
          : "border-transparent bg-[#0a0a0a]/40"
      }`}
    >
      <nav
        aria-label={nav.label}
        className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 md:px-6"
      >
        <a
          href={`#${sections.home}`}
          className="font-editorial min-w-0 truncate rounded-md text-xl tracking-tight text-neutral-50"
        >
          {profiles[locale].name}
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </a>
        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden items-center gap-1 text-sm md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-full px-3.5 py-2 transition-colors ${
                      isActive
                        ? "bg-white/[0.07] text-neutral-50"
                        : "text-neutral-400 hover:text-neutral-100"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="font-meta text-accent mr-1.5 text-[0.6875rem]"
                    >
                      {link.index}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <LanguageSwitch locale={locale} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-neutral-200 transition-colors hover:border-white/30 hover:text-neutral-50 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {open && (
        <ul
          id="menu-principal"
          className="menu-panel mx-auto max-w-6xl border-t border-white/10 px-5 py-3 sm:px-8 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                className="font-editorial flex items-baseline gap-4 rounded-xl px-2 py-3 text-2xl text-neutral-200 transition-colors hover:bg-white/5 hover:text-neutral-50"
              >
                <span
                  aria-hidden="true"
                  className="font-meta text-accent text-xs tracking-normal"
                >
                  {link.index}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
