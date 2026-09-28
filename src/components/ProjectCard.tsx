import Image from "next/image";
import StackPills from "@/components/StackPills";
import type { Project } from "@/content/projects";

export default function ProjectCard({
  project,
  primary = false,
  onOpen,
}: {
  project: Project;
  primary?: boolean;
  onOpen: () => void;
}): React.JSX.Element {
  return (
    <article>
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`Ver detalle de ${project.title}`}
        className="card-lift group w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
      >
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2 md:items-center md:gap-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={primary}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="font-editorial text-2xl text-neutral-50 sm:text-3xl">
              {project.title}
            </h3>
            <StackPills items={project.stack} />
            <p className="leading-relaxed text-neutral-400">
              {project.description}
            </p>
            <span
              aria-hidden="true"
              className="font-meta text-xs tracking-[0.18em] text-neutral-500 uppercase transition-colors group-hover:text-neutral-200"
            >
              Ver caso →
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
