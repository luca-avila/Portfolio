export type ContactLink = {
  label: "Email" | "GitHub" | "LinkedIn" | "X";
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  contactLinks: ContactLink[];
};

// Datos reales tomados de docs/content.md.
export const profile: Profile = {
  name: "Luca Avila",
  role: "Software engineer",
  tagline:
    "Fullstack developer enfocado en backend, sistemas e infraestructura.",
  bio: "Disfruto construir productos de punta a punta y entender cada capa del sistema, desde la aplicación hasta la infraestructura. Actualmente estoy profundizando en arquitectura, Linux, cloud y DevOps.",
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
