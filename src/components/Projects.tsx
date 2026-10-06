"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Project } from "@/content/projects";
import { dictionaries, sectionIndex } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function Projects({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const [selected, setSelected] = useState<Project | null>(null);

  function handleOpen(project: Project): void {
    setSelected(project);
  }

  function handleClose(): void {
    setSelected(null);
  }

  const t = dictionaries[locale];
  const featured = projects[locale].filter((project) => project.featured);
  const secondary = projects[locale].filter((project) => !project.featured);

  return (
    <section
      id={t.sections.projects}
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 md:px-6"
    >
      <Reveal>
        <SectionHeading
          index={sectionIndex.projects}
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          id="projects-title"
        />
      </Reveal>
      <div className="mt-14">
        <Reveal>
          <h3 className="font-meta flex items-center gap-3 text-[0.6875rem] tracking-[0.18em] text-neutral-400 uppercase">
            {t.projects.featured}
            <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-6">
          {featured.map((project, i) => (
            <li key={project.slug}>
              <Reveal>
                <ProjectCard
                  project={project}
                  index={i}
                  locale={locale}
                  spotlight
                  onOpen={() => handleOpen(project)}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      {secondary.length > 0 && (
        <div className="mt-16">
          <Reveal>
            <h3 className="font-meta flex items-center gap-3 text-[0.6875rem] tracking-[0.18em] text-neutral-400 uppercase">
              {t.projects.secondary}
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-6">
            {secondary.map((project, i) => (
              <li key={project.slug}>
                <Reveal index={i}>
                  <ProjectCard
                    project={project}
                    index={featured.length + i}
                    locale={locale}
                    onOpen={() => handleOpen(project)}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selected !== null && (
        <ProjectModal
          project={selected}
          locale={locale}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
