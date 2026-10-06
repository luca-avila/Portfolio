import Image from "next/image";
import StackPills from "@/components/StackPills";
import type { Project } from "@/content/projects";
import { dictionaries } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function ProjectCard({
  project,
  locale,
  spotlight = false,
  onOpen,
}: {
  project: Project;
  locale: Locale;
  spotlight?: boolean;
  onOpen: () => void;
}): React.JSX.Element {
  const t = dictionaries[locale];

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-label={t.projects.openDetail(project.title)}
      className={`card-lift group w-full cursor-pointer overflow-hidden rounded-3xl border text-left focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none ${
        spotlight
          ? "border-white/15 bg-white/[0.05]"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div className="grid items-center gap-6 p-5 sm:p-7 md:grid-cols-2 md:gap-8 lg:gap-10">
        <div className="relative aspect-[500/255] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={spotlight}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <h3
            className={`font-editorial text-neutral-50 ${
              spotlight ? "text-3xl sm:text-4xl" : "text-3xl"
            }`}
          >
            {project.title}
          </h3>
          <StackPills items={project.stack} label={t.stackLabel} />
          <p className="leading-relaxed text-neutral-300 sm:text-lg">
            {project.summary}
          </p>
          <p className="font-meta text-xs leading-relaxed text-neutral-500">
            <span className="sr-only">{t.projects.deployLabel}</span>
            {project.deployment}
          </p>
          <span
            aria-hidden="true"
            className="font-meta text-xs tracking-[0.18em] text-neutral-400 uppercase transition-colors group-hover:text-accent"
          >
            {t.projects.viewProject} →
          </span>
        </div>
      </div>
    </button>
  );
}
