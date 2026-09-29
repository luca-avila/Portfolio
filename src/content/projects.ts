export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  imageSrc: string;
  imageAlt: string;
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
};

// Datos reales de proyectos. Las URLs de demo y repo quedan
// como datos para el detalle del modal, sin renderizarse todavía en la UI.
export const projects: Project[] = [
  {
    slug: "irruptivo",
    title: "Irruptivo",
    summary:
      "E-commerce full-stack para una marca de indumentaria y suplementos.",
    description:
      "E-commerce full-stack para una marca de indumentaria y suplementos: catálogo, carrito, checkout con pagos de Mercado Pago, gestión de stock, seguimiento de pedidos y panel de administración.",
    stack: ["Next.js", "PostgreSQL", "Docker", "Mercado Pago"],
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
    imageSrc: "/clocklog-screenshot.png",
    imageAlt: "Captura del temporizador ClockLog",
    demoUrl: "https://clocklog.net/",
    repoUrl: "https://github.com/luca-avila/ClockLog",
    featured: false,
  },
];
