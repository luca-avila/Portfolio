const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4"
      >
        <a href="#inicio" className="text-sm font-semibold tracking-tight">
          Inicio
        </a>
        <ul className="flex items-center gap-4 text-sm text-neutral-300">
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
      </nav>
    </header>
  );
}
