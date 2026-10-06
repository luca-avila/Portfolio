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

// Datos reales de proyectos.
export const projects: Project[] = [
  {
    slug: "irruptivo",
    title: "Irruptivo",
    summary:
      "E-commerce full-stack para una marca de indumentaria y suplementos.",
    description:
      "E-commerce full-stack para una marca de indumentaria y suplementos: catálogo, carrito, checkout con pagos de Mercado Pago, gestión de stock, seguimiento de pedidos y panel de administración.",
    stack: ["Next.js", "PostgreSQL", "Docker", "Mercado Pago"],
    deployment:
      "VPS · Docker Compose · Nginx · HTTPS con certbot · CI/CD con GitHub Actions",
    infrastructure:
      "Corre en un VPS propio con Docker Compose, detrás de Nginx como reverse proxy y con HTTPS gestionado por certbot. Cada cambio se despliega mediante un pipeline de CI/CD con GitHub Actions.",
    imageSrc: "/irruptivo-screenshot.png",
    imageAlt: "Captura de la tienda Irruptivo",
    demoUrl: "https://irruptivo.shop/",
    repoUrl: "https://github.com/luca-avila/irruptivo",
    featured: true,
  },
  {
    slug: "clocklog",
    title: "ClockLog",
    summary: "Temporizador pomodoro y planificador semanal full-stack.",
    description:
      "Temporizador pomodoro y planificador semanal full-stack: motor del lado del cliente con sincronización offline, donde cada bloque recibe una etiqueta y se convierte en un historial consultable. Autenticación JWT con email verificado.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    deployment:
      "VPS · Docker Compose · Nginx · HTTPS con certbot · CI/CD con GitHub Actions · Backups",
    infrastructure:
      "Corre en un VPS propio con Docker Compose, detrás de Nginx como reverse proxy y con HTTPS gestionado por certbot. Cada cambio se despliega mediante un pipeline de CI/CD con GitHub Actions, y la base de datos cuenta con backups.",
    imageSrc: "/clocklog-screenshot.png",
    imageAlt: "Captura del temporizador ClockLog",
    demoUrl: "https://clocklog.net/",
    repoUrl: "https://github.com/luca-avila/ClockLog",
    featured: false,
  },
];
