import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  // Ids de sección, usados como anclas (`#proyectos`, `#projects`, ...).
  sections: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  nav: {
    label: string;
    projects: string;
    about: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    switchTo: string;
    lightTheme: string;
    darkTheme: string;
  };
  hero: {
    portraitAlt: (name: string) => string;
    viewProjects: string;
    contact: string;
    highlightsLabel: string;
    socialLabel: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    featured: string;
    secondary: string;
    openDetail: (title: string) => string;
    deployLabel: string;
    viewProject: string;
    liveLabel: string;
    modalEyebrow: string;
    closeDetail: string;
    infrastructure: string;
    demo: string;
    repo: string;
  };
  about: {
    eyebrow: string;
    title: string;
    downloadCv: string;
    downloadCvLabel: (name: string) => string;
    nowLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    listLabel: string;
    emailCta: string;
    emailLabel: (email: string) => string;
    copyEmail: string;
    emailCopied: string;
    profileLabel: (network: string, name: string) => string;
  };
  footer: {
    builtWith: string;
    backToTop: string;
  };
  stackLabel: string;
  newTab: string;
};

// Numeración de secciones, compartida por la navbar y los encabezados.
export const sectionIndex = {
  projects: "01",
  about: "02",
  contact: "03",
} as const;

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    sections: {
      home: "inicio",
      projects: "proyectos",
      about: "sobre-mi",
      contact: "contacto",
    },
    nav: {
      label: "Navegación principal",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      languageLabel: "Idioma",
      switchTo: "Ver en inglés",
      lightTheme: "Activar modo claro",
      darkTheme: "Activar modo oscuro",
    },
    hero: {
      portraitAlt: (name) => `Retrato de ${name}`,
      viewProjects: "Ver proyectos",
      contact: "Contactar",
      highlightsLabel: "Resumen",
      socialLabel: "Redes",
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos",
      featured: "Destacado",
      secondary: "También construí",
      openDetail: (title) => `Ver detalle de ${title}`,
      deployLabel: "Deploy",
      viewProject: "Ver proyecto",
      liveLabel: "En producción",
      modalEyebrow: "Proyecto",
      closeDetail: "Cerrar detalle",
      infrastructure: "Infraestructura",
      demo: "Ver proyecto",
      repo: "Repositorio",
    },
    about: {
      eyebrow: "Perfil",
      title: "Sobre mí",
      downloadCv: "Descargar CV",
      downloadCvLabel: (name) => `Descargar CV de ${name} en PDF`,
      nowLabel: "Ahora",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      lead: "Estoy abierto a oportunidades laborales en backend e infraestructura. Si tenés una búsqueda o querés charlar, escribime o encontrame en estas redes.",
      listLabel: "Redes",
      emailCta: "Escribime",
      emailLabel: (email) => `Enviar correo a ${email}`,
      copyEmail: "Copiar email",
      emailCopied: "Email copiado",
      profileLabel: (network, name) => `${network} de ${name}`,
    },
    footer: {
      builtWith: "Sitio estático servido con nginx desde un VPS propio.",
      backToTop: "Volver arriba",
    },
    stackLabel: "Tecnologías",
    newTab: "(se abre en una pestaña nueva)",
  },
  en: {
    sections: {
      home: "home",
      projects: "projects",
      about: "about",
      contact: "contact",
    },
    nav: {
      label: "Main navigation",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language",
      switchTo: "View in Spanish",
      lightTheme: "Switch to light mode",
      darkTheme: "Switch to dark mode",
    },
    hero: {
      portraitAlt: (name) => `Portrait of ${name}`,
      viewProjects: "View projects",
      contact: "Get in touch",
      highlightsLabel: "Summary",
      socialLabel: "Social",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      featured: "Featured",
      secondary: "Also built",
      openDetail: (title) => `View details for ${title}`,
      deployLabel: "Deploy",
      viewProject: "View project",
      liveLabel: "Live",
      modalEyebrow: "Project",
      closeDetail: "Close details",
      infrastructure: "Infrastructure",
      demo: "View project",
      repo: "Repository",
    },
    about: {
      eyebrow: "Profile",
      title: "About me",
      // El CV publicado (`/cv.pdf`) está en español.
      downloadCv: "Download CV (Spanish)",
      downloadCvLabel: (name) => `Download ${name}'s CV as a PDF, in Spanish`,
      nowLabel: "Now",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      lead: "I'm open to job opportunities in backend and infrastructure. If you're hiring or just want to chat, send me an email or find me on these networks.",
      listLabel: "Social",
      emailCta: "Email me",
      emailLabel: (email) => `Send an email to ${email}`,
      copyEmail: "Copy email",
      emailCopied: "Email copied",
      profileLabel: (network, name) => `${name} on ${network}`,
    },
    footer: {
      builtWith: "Static site served by nginx from a self-managed VPS.",
      backToTop: "Back to top",
    },
    stackLabel: "Technologies",
    newTab: "(opens in a new tab)",
  },
};
