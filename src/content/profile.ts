export type ContactLink = {
  label: "Email" | "GitHub" | "LinkedIn" | "X";
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  bio: string;
  email: string;
  contactLinks: ContactLink[];
};

// Nombre, rol y bio se reemplazan con la información real en los chunks 1 y 4.
// Los datos de contacto vienen de docs/content.md.
export const profile: Profile = {
  name: "Nombre pendiente",
  role: "Rol pendiente",
  bio: "Biografía pendiente.",
  email: "avilaluca61@gmail.com",
  contactLinks: [
    { label: "Email", href: "mailto:avilaluca61@gmail.com" },
    { label: "GitHub", href: "https://github.com/luca-avila" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luca-avila-dev/",
    },
  ],
};
