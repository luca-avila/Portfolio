import Image from "next/image";
import type { Project } from "@/content/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}): React.JSX.Element {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-300"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="text-neutral-300">{project.description}</p>
        </div>
      </div>
    </article>
  );
}
