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
  };
  hero: {
    portraitAlt: (name: string) => string;
    viewProjects: string;
    contact: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    featured: string;
    secondary: string;
    openDetail: (title: string) => string;
    deployLabel: string;
    viewProject: string;
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
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    listLabel: string;
    emailLabel: (email: string) => string;
    profileLabel: (network: string, name: string) => string;
  };
  stackLabel: string;
};

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
    },
    hero: {
      portraitAlt: (name) => `Retrato de ${name}`,
      viewProjects: "Ver proyectos",
      contact: "Contactar",
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos",
      featured: "Destacado",
      secondary: "También construí",
      openDetail: (title) => `Ver detalle de ${title}`,
      deployLabel: "Deploy: ",
      viewProject: "Ver proyecto",
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
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      lead: "Estoy abierto a oportunidades laborales en backend e infraestructura. Si tenés una búsqueda o querés charlar, escribime o encontrame en estas redes.",
      listLabel: "Vías de contacto",
      emailLabel: (email) => `Enviar correo a ${email}`,
      profileLabel: (network, name) => `${network} de ${name}`,
    },
    stackLabel: "Tecnologías",
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
    },
    hero: {
      portraitAlt: (name) => `Portrait of ${name}`,
      viewProjects: "View projects",
      contact: "Get in touch",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      featured: "Featured",
      secondary: "Also built",
      openDetail: (title) => `View details for ${title}`,
      deployLabel: "Deployment: ",
      viewProject: "View project",
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
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      lead: "I'm open to job opportunities in backend and infrastructure. If you're hiring or just want to chat, send me an email or find me on these networks.",
      listLabel: "Contact options",
      emailLabel: (email) => `Send an email to ${email}`,
      profileLabel: (network, name) => `${name} on ${network}`,
    },
    stackLabel: "Technologies",
  },
};
