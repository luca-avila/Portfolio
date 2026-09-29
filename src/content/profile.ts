export type ContactLink = {
  label: "Email" | "GitHub" | "LinkedIn" | "X";
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  tagline: string;
  taglineAccent: string;
  bio: string;
  skills: string[];
  email: string;
  contactLinks: ContactLink[];
};

// Datos reales del perfil.
export const profile: Profile = {
  name: "Luca Avila",
  role: "Desarrollador de software",
  heroTitle: "Construyo productos web de punta a punta.",
  heroTitleAccent: "punta a punta",
  heroLead:
    "Soy Luca Avila, desarrollador fullstack enfocado en backend, sistemas e infraestructura.",
  tagline:
    "Desarrollador fullstack enfocado en backend, sistemas e infraestructura.",
  taglineAccent: "backend",
  bio: "Disfruto construir productos de punta a punta y entender cada capa del sistema, desde la aplicación hasta la infraestructura. Actualmente estoy profundizando en arquitectura, Linux, cloud y DevOps.",
  skills: ["Python", "FastAPI", "TypeScript", "PostgreSQL", "Docker", "Linux"],
  email: "avilaluca61@gmail.com",
  contactLinks: [
    { label: "Email", href: "mailto:avilaluca61@gmail.com" },
    { label: "GitHub", href: "https://github.com/luca-avila" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luca-avila-dev/",
    },
    { label: "X", href: "https://x.com/Luca_dev1" },
  ],
};
