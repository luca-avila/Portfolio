"use client";

import { useState } from "react";

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
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
          className="min-w-0 truncate rounded-md text-sm font-semibold tracking-tight"
        >
          Inicio
        </a>
        <ul className="hidden items-center gap-4 text-sm text-neutral-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md transition-colors hover:text-neutral-100"
              >
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
          className="rounded-md border border-white/15 p-2 text-neutral-200 transition-colors hover:border-white/30 hover:text-neutral-100 md:hidden"
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
