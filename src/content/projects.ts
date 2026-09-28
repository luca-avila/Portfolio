export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
};

// Los datos definitivos de proyectos se incorporan en el chunk 2.
export const projects: Project[] = [];
