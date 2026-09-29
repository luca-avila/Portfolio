"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/content/projects";
import type { Project } from "@/content/projects";

export default function Projects(): React.JSX.Element {
  const [selected, setSelected] = useState<Project | null>(null);

  function handleOpen(project: Project): void {
    setSelected(project);
  }

  function handleClose(): void {
    setSelected(null);
  }

  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:py-24"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Trabajo seleccionado"
          title="Proyectos"
          id="projects-title"
        />
      </Reveal>
      <div className="mt-10">
        <Reveal>
          <h3
            id="destacados-title"
            className="font-meta text-accent flex items-baseline gap-3 text-xs tracking-[0.18em] uppercase"
          >
            Destacado
            <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-6">
          {featured.map((project) => (
            <li key={project.slug}>
              <Reveal>
                <ProjectCard
                  project={project}
                  spotlight
                  onOpen={() => handleOpen(project)}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      {secondary.length > 0 && (
        <div className="mt-12">
          <Reveal>
            <h3 className="font-meta text-accent flex items-baseline gap-3 text-xs tracking-[0.18em] uppercase">
              También construí
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-6">
            {secondary.map((project, i) => (
              <li key={project.slug}>
                <Reveal index={i}>
                  <ProjectCard
                    project={project}
                    onOpen={() => handleOpen(project)}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selected !== null && (
        <ProjectModal project={selected} onClose={handleClose} />
      )}
    </section>
  );
}
