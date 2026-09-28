import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function Projects(): React.JSX.Element {
  const featured = projects.filter((project) => project.featured);
  const building = projects.filter((project) => !project.featured);

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16"
    >
      <h2 id="projects-title" className="text-2xl font-semibold tracking-tight">
        Proyectos
      </h2>
      <div className="mt-8">
        <h3
          id="destacados-title"
          className="text-lg font-semibold text-neutral-100"
        >
          Destacados
        </h3>
        <ul className="mt-4 grid gap-6">
          {featured.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <h3
          id="en-desarrollo-title"
          className="text-lg font-semibold text-neutral-100"
        >
          En desarrollo
        </h3>
        <ul className="mt-4 grid gap-6">
          {building.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
