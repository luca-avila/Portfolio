import type { Locale } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  deployment: string;
  infrastructure: string;
  imageSrc: string;
  imageAlt: string;
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
};

type ProjectSlug = "irruptivo" | "clocklog";

type ProjectBase = Pick<
  Project,
  "title" | "stack" | "imageSrc" | "demoUrl" | "repoUrl" | "featured"
> & { slug: ProjectSlug };

type ProjectCopy = Omit<Project, keyof ProjectBase>;

// Datos reales de proyectos que no dependen del idioma.
const baseProjects: ProjectBase[] = [
  {
    slug: "irruptivo",
    title: "Irruptivo",
    stack: ["Next.js", "PostgreSQL", "Docker", "Mercado Pago"],
    imageSrc: "/irruptivo-screenshot.png",
    demoUrl: "https://irruptivo.shop/",
    repoUrl: "https://github.com/luca-avila/irruptivo",
    featured: true,
  },
  {
    slug: "clocklog",
    title: "ClockLog",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    imageSrc: "/clocklog-screenshot.png",
    demoUrl: "https://clocklog.net/",
    repoUrl: "https://github.com/luca-avila/ClockLog",
    featured: false,
  },
];

// Textos por idioma, indexados por `slug`.
const copy: Record<Locale, Record<ProjectSlug, ProjectCopy>> = {
  es: {
    irruptivo: {
      summary:
        "E-commerce full-stack para una marca de indumentaria y suplementos.",
      description:
        "E-commerce full-stack para una marca de indumentaria y suplementos: catálogo, carrito, checkout con pagos de Mercado Pago, gestión de stock, seguimiento de pedidos y panel de administración.",
      deployment:
        "VPS · Docker Compose · Nginx · HTTPS con certbot · CI/CD con GitHub Actions",
      infrastructure:
        "Corre en un VPS propio con Docker Compose, detrás de Nginx como reverse proxy y con HTTPS gestionado por certbot. Cada cambio se despliega mediante un pipeline de CI/CD con GitHub Actions.",
      imageAlt: "Captura de la tienda Irruptivo",
    },
    clocklog: {
      summary: "Temporizador pomodoro y planificador semanal full-stack.",
      description:
        "Temporizador pomodoro y planificador semanal full-stack: motor del lado del cliente con sincronización offline, donde cada bloque recibe una etiqueta y se convierte en un historial consultable. Autenticación JWT con email verificado.",
      deployment:
        "VPS · Docker Compose · Nginx · HTTPS con certbot · CI/CD con GitHub Actions · Backups",
      infrastructure:
        "Corre en un VPS propio con Docker Compose, detrás de Nginx como reverse proxy y con HTTPS gestionado por certbot. Cada cambio se despliega mediante un pipeline de CI/CD con GitHub Actions, y la base de datos cuenta con backups.",
      imageAlt: "Captura del temporizador ClockLog",
    },
  },
  en: {
    irruptivo: {
      summary: "Full-stack e-commerce for an apparel and supplements brand.",
      description:
        "Full-stack e-commerce for an apparel and supplements brand: catalog, cart, checkout with Mercado Pago payments, inventory management, order tracking and an admin dashboard.",
      deployment:
        "VPS · Docker Compose · Nginx · HTTPS via certbot · CI/CD with GitHub Actions",
      infrastructure:
        "Runs on a self-managed VPS with Docker Compose, behind Nginx as a reverse proxy, with HTTPS handled by certbot. Every change ships through a CI/CD pipeline on GitHub Actions.",
      imageAlt: "Screenshot of the Irruptivo store",
    },
    clocklog: {
      summary: "Full-stack pomodoro timer and weekly planner.",
      description:
        "Full-stack pomodoro timer and weekly planner: a client-side engine with offline sync, where every block gets a tag and becomes a searchable history. JWT authentication with verified email.",
      deployment:
        "VPS · Docker Compose · Nginx · HTTPS via certbot · CI/CD with GitHub Actions · Backups",
      infrastructure:
        "Runs on a self-managed VPS with Docker Compose, behind Nginx as a reverse proxy, with HTTPS handled by certbot. Every change ships through a CI/CD pipeline on GitHub Actions, and the database is backed up.",
      imageAlt: "Screenshot of the ClockLog timer",
    },
  },
};

function buildProjects(locale: Locale): Project[] {
  return baseProjects.map((project) => ({
    ...project,
    ...copy[locale][project.slug],
  }));
}

export const projects: Record<Locale, Project[]> = {
  es: buildProjects("es"),
  en: buildProjects("en"),
};
