"use client";

import { useState } from "react";

const navLinks = [
  { href: "#proyectos", label: "Proyectos", index: "01" },
  { href: "#sobre-mi", label: "Sobre mí", index: "02" },
  { href: "#contacto", label: "Contacto", index: "03" },
] as const;

export default function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4"
      >
        <a
          href="#inicio"
          className="font-editorial min-w-0 truncate rounded-md text-lg tracking-tight"
        >
          {`Luca Avila`}
        </a>
        <ul className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group rounded-md transition-colors hover:text-neutral-100"
              >
                <span
                  aria-hidden="true"
                  className="font-meta mr-1.5 text-xs text-neutral-600 transition-colors group-hover:text-neutral-400"
                >
                  {link.index}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-white/15 p-2 text-neutral-200 transition-colors hover:border-white/30 hover:text-neutral-100 md:hidden"
        >
          {open ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>
      {open && (
        <ul
          id="menu-principal"
          className="mx-auto max-w-5xl border-t border-white/10 px-4 pb-4 text-sm text-neutral-300 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block w-full rounded-md px-4 py-3 transition-colors hover:bg-white/5 hover:text-neutral-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
