import type { Locale } from "@/lib/i18n";

export type ContactLink = {
  label: "Email" | "GitHub" | "LinkedIn" | "X";
  href: string;
  handle: string;
};

// Dato corto del hero: etiqueta + valor (ej. "Infraestructura: VPS · Docker").
export type Highlight = {
  label: string;
  value: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  availability: string;
  highlights: Highlight[];
  tagline: string;
  bio: string;
  now: string;
  skillGroups: SkillGroup[];
  email: string;
  contactLinks: ContactLink[];
};

// Datos que no dependen del idioma.
const shared = {
  name: "Luca Avila",
  email: "avilaluca61@gmail.com",
  contactLinks: [
    {
      label: "Email",
      href: "mailto:avilaluca61@gmail.com",
      handle: "avilaluca61@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/luca-avila",
      handle: "@luca-avila",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luca-avila-dev/",
      handle: "in/luca-avila-dev",
    },
    { label: "X", href: "https://x.com/Luca_dev1", handle: "@Luca_dev1" },
  ],
} satisfies Pick<Profile, "name" | "email" | "contactLinks">;

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
    availability: "Abierto a oportunidades",
    highlights: [
      { label: "En producción", value: "irruptivo.shop · clocklog.net" },
      { label: "Infraestructura", value: "VPS · Docker · Nginx" },
      { label: "Entrega continua", value: "CI/CD con GitHub Actions" },
    ],
    tagline: "APIs, Linux y despliegue en servidores propios.",
    bio: "Disfruto construir productos de punta a punta y entender cada capa del sistema, desde la aplicación hasta la infraestructura.",
    now: "Actualmente estoy profundizando en arquitectura, Linux, cloud y DevOps.",
    skillGroups: [
      { label: "Lenguajes", items: ["Python", "TypeScript"] },
      { label: "Backend y datos", items: ["FastAPI", "PostgreSQL"] },
      { label: "Infraestructura", items: ["Docker", "Linux", "Nginx"] },
    ],
  },
  en: {
    ...shared,
    role: "Backend & infrastructure developer",
    heroTitle: "I build solid backends and the infrastructure behind them.",
    heroTitleAccent: "infrastructure",
    heroLead:
      "I'm Luca Avila, a developer focused on APIs, Linux and deploying to self-managed servers.",
    availability: "Open to opportunities",
    highlights: [
      { label: "In production", value: "irruptivo.shop · clocklog.net" },
      { label: "Infrastructure", value: "VPS · Docker · Nginx" },
      { label: "Continuous delivery", value: "CI/CD with GitHub Actions" },
    ],
    tagline: "APIs, Linux and deploying to self-managed servers.",
    bio: "I enjoy building products end to end and understanding every layer of the system, from the application down to the infrastructure.",
    now: "I'm currently going deeper into architecture, Linux, cloud and DevOps.",
    skillGroups: [
      { label: "Languages", items: ["Python", "TypeScript"] },
      { label: "Backend & data", items: ["FastAPI", "PostgreSQL"] },
      { label: "Infrastructure", items: ["Docker", "Linux", "Nginx"] },
    ],
  },
};
