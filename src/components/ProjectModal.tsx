"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import BrowserFrame from "@/components/BrowserFrame";
import { ArrowUpRightIcon, CloseIcon, SocialIcon } from "@/components/Icons";
import StackPills from "@/components/StackPills";
import type { Project } from "@/content/projects";
import { dictionaries } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function ProjectModal({
  project,
  locale,
  onClose,
}: {
  project: Project;
  locale: Locale;
  onClose: () => void;
}): React.JSX.Element {
  const t = dictionaries[locale];
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
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-scrim p-3 backdrop-blur-md sm:p-6"
      onMouseDown={handleOverlayMouseDown}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onKeyDown={handlePanelKeyDown}
        className="modal-panel max-h-[92svh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-surface-raised shadow-[0_40px_120px_-40px_var(--color-shadow)]"
      >
        <div className="flex items-start justify-between gap-4 p-5 sm:p-8 sm:pb-6">
          <div className="min-w-0">
            <p className="font-meta text-accent text-[0.6875rem] tracking-[0.18em] uppercase">
              {t.projects.modalEyebrow}
            </p>
            <h2
              id="project-modal-title"
              className="font-editorial mt-2 text-4xl text-neutral-50 sm:text-5xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t.projects.closeDetail}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-neutral-50"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="px-5 sm:px-8">
          <BrowserFrame url={project.demoUrl}>
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 704px"
              className="object-cover object-top"
            />
          </BrowserFrame>
        </div>
        <div className="p-5 sm:p-8">
          <p className="leading-relaxed text-pretty text-neutral-300 sm:text-lg">
            {project.description}
          </p>
          <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 sm:gap-10">
            <div>
              <h3 className="font-meta text-[0.6875rem] tracking-[0.18em] text-neutral-400 uppercase">
                {t.stackLabel}
              </h3>
              <div className="mt-3">
                <StackPills items={project.stack} label={t.stackLabel} />
              </div>
            </div>
            <div>
              <h3 className="font-meta text-[0.6875rem] tracking-[0.18em] text-neutral-400 uppercase">
                {t.projects.infrastructure}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {project.infrastructure}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.demoUrl !== "" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-neutral-100 px-6 py-2 text-sm font-semibold text-neutral-950 transition-all hover:bg-white active:scale-[0.98]"
              >
                {t.projects.demo}
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="sr-only">{t.newTab}</span>
              </a>
            )}
            {project.repoUrl !== "" && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
              >
                <SocialIcon label="GitHub" className="h-4 w-4" />
                {t.projects.repo}
                <span className="sr-only">{t.newTab}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
