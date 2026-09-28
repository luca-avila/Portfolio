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
        className={`card-lift group w-full cursor-pointer overflow-hidden text-left focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none ${
          primary
            ? "rounded-3xl border border-white/15 bg-white/[0.05]"
            : "rounded-2xl border border-white/10 bg-white/[0.02]"
        }`}
      >
        <div
          className={`grid gap-6 md:grid-cols-2 md:items-center ${
            primary ? "p-6 sm:p-10 md:gap-10" : "p-5 sm:p-6 md:gap-6"
          }`}
        >
          <div className="relative aspect-[500/255] w-full overflow-hidden rounded-xl border border-white/10">
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
            <h3
              className={`font-editorial text-neutral-50 ${
                primary ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <StackPills items={project.stack} muted={!primary} />
            <p
              className={`leading-relaxed ${
                primary ? "text-neutral-300" : "text-neutral-500"
              }`}
            >
              {project.summary}
            </p>
            <span
              aria-hidden="true"
              className="font-meta text-xs tracking-[0.18em] text-neutral-500 uppercase transition-colors group-hover:text-accent"
            >
              Ver proyecto →
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
