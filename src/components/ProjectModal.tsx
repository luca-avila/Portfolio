"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import StackPills from "@/components/StackPills";
import type { Project } from "@/content/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}): React.JSX.Element {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previousActive = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousActive?.focus();
    };
  }, [onClose]);

  function handleOverlayMouseDown(
    event: React.MouseEvent<HTMLDivElement>,
  ): void {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handlePanelKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
  ): void {
    if (event.key !== "Tab") {
      return;
    }

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );

    if (focusable === undefined || focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={handleOverlayMouseDown}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onKeyDown={handlePanelKeyDown}
        className="modal-panel max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-neutral-950 p-5 sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-meta text-accent text-xs tracking-[0.18em] uppercase">
              Proyecto
            </p>
            <h2
              id="project-modal-title"
              className="font-editorial mt-1 text-2xl text-neutral-50"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle"
            className="rounded-md border border-white/15 p-2 text-neutral-200 transition-colors hover:border-white/30 hover:text-neutral-100 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="relative mt-4 aspect-[500/255] w-full overflow-hidden rounded-xl border border-white/10">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 576px"
            className="object-cover"
          />
        </div>
        <p className="mt-4 leading-relaxed text-neutral-400">
          {project.description}
        </p>
        <div className="mt-4 border-t border-white/10 pt-4">
          <StackPills items={project.stack} />
        </div>
        <div className="mt-4 border-t border-white/10 pt-4">
          <h3 className="font-meta text-xs tracking-[0.18em] text-neutral-500 uppercase">
            Infraestructura
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            {project.infrastructure}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.demoUrl !== "" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 transition-all hover:bg-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
            >
              Ver proyecto
            </a>
          )}
          {project.repoUrl !== "" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
            >
              Repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
