import type { Locale } from "@/lib/i18n";

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
  bio: string;
  skills: string[];
  email: string;
  contactLinks: ContactLink[];
};

// Datos que no dependen del idioma.
const shared = {
  name: "Luca Avila",
  skills: [
    "Python",
    "FastAPI",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Linux",
    "Nginx",
  ],
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
} satisfies Pick<Profile, "name" | "skills" | "email" | "contactLinks">;

// Datos reales del perfil.
export const profiles: Record<Locale, Profile> = {
  es: {
    ...shared,
    role: "Desarrollador backend e infraestructura",
    heroTitle:
      "Construyo backends sólidos y la infraestructura que los sostiene.",
    heroTitleAccent: "infraestructura",
    heroLead:
      "Soy Luca Avila, desarrollador enfocado en APIs, Linux y despliegue en servidores propios.",
    tagline: "APIs, Linux y despliegue en servidores propios.",
    bio: "Disfruto construir productos de punta a punta y entender cada capa del sistema, desde la aplicación hasta la infraestructura. Actualmente estoy profundizando en arquitectura, Linux, cloud y DevOps.",
  },
  en: {
    ...shared,
    role: "Backend & infrastructure developer",
    heroTitle: "I build solid backends and the infrastructure behind them.",
    heroTitleAccent: "infrastructure",
    heroLead:
      "I'm Luca Avila, a developer focused on APIs, Linux and deploying to self-managed servers.",
    tagline: "APIs, Linux and deploying to self-managed servers.",
    bio: "I enjoy building products end to end and understanding every layer of the system, from the application down to the infrastructure. I'm currently going deeper into architecture, Linux, cloud and DevOps.",
  },
};
