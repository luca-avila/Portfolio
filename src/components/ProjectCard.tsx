import Image from "next/image";
import BrowserFrame from "@/components/BrowserFrame";
import { ArrowRightIcon } from "@/components/Icons";
import StackPills from "@/components/StackPills";
import type { Project } from "@/content/projects";
import { dictionaries } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function ProjectCard({
  project,
  index,
  locale,
  spotlight = false,
  onOpen,
}: {
  project: Project;
  index: number;
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
      className={`card-lift group w-full cursor-pointer overflow-hidden rounded-3xl border text-left ${
        spotlight
          ? "border-white/[0.12] bg-white/[0.035]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-[7fr_5fr] md:items-center md:gap-10 lg:p-8">
        <BrowserFrame url={project.demoUrl}>
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            priority={spotlight}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </BrowserFrame>
        <div className="flex min-w-0 flex-col gap-5 px-1 pb-1 md:px-0 md:pb-0">
          <div className="font-meta flex items-center justify-between gap-4 text-[0.6875rem] tracking-[0.14em] uppercase">
            <span className="text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            {project.demoUrl !== "" && (
              <span className="flex items-center gap-2 text-neutral-400">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                {t.projects.liveLabel}
              </span>
            )}
          </div>
          <div>
            <h3
              className={`font-editorial text-neutral-50 ${
                spotlight ? "text-4xl lg:text-5xl" : "text-4xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed text-pretty text-neutral-400 sm:text-lg">
              {project.summary}
            </p>
          </div>
          <StackPills items={project.stack} label={t.stackLabel} />
          <p className="border-t border-white/10 pt-4 text-xs leading-relaxed text-neutral-400">
            <span className="font-meta mr-2 tracking-[0.14em] text-neutral-300 uppercase">
              {t.projects.deployLabel}
            </span>
            {project.deployment}
          </p>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-200 transition-colors group-hover:text-accent"
          >
            {t.projects.viewProject}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  );
}
