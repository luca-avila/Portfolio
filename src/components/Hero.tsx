import Image from "next/image";
import { ArrowRightIcon, SocialIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { profiles } from "@/content/profile";
import { dictionaries } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

function renderAccent(text: string, accent: string): React.ReactNode {
  const index = text.indexOf(accent);
  if (accent === "" || index === -1) {
    return text;
  }
  return (
    <>
      {text.slice(0, index)}
      <em className="font-editorial-em text-accent">{accent}</em>
      {text.slice(index + accent.length)}
    </>
  );
}

export default function Hero({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const profile = profiles[locale];
  const { hero, sections, newTab } = dictionaries[locale];
  const socialLinks = profile.contactLinks.filter(
    (link) => link.label === "GitHub" || link.label === "LinkedIn",
  );

  return (
    <section
      id={sections.home}
      aria-labelledby="hero-title"
      className="relative scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 hidden md:block"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col pb-16 md:min-h-[calc(100svh-4.5rem)] md:justify-center md:px-6 md:py-14">
        <Reveal className="w-full">
          <div className="grid items-center md:grid-cols-[5fr_7fr] md:gap-12 lg:gap-16">
            <div className="relative h-[clamp(17rem,44svh,24rem)] w-full overflow-hidden md:aspect-[4/5] md:h-auto md:max-h-[34rem] md:rounded-3xl md:border md:border-white/10">
              <Image
                src="/profile.jpeg"
                alt={hero.portraitAlt(profile.name)}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 40vw"
                className="object-cover object-[center_22%] brightness-[0.82] contrast-[1.08] grayscale md:object-top"
              />
              {/* Funde la foto con el fondo: abajo en móvil, sutil en escritorio. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] md:via-transparent md:to-black/40"
              />
            </div>
            <div className="-mt-10 flex min-w-0 flex-col px-5 sm:px-8 md:mt-0 md:px-0">
              <p className="font-meta inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-[#0a0a0a]/80 py-1.5 pr-3.5 pl-3 text-[0.6875rem] tracking-[0.12em] text-neutral-300 uppercase backdrop-blur">
                <span
                  aria-hidden="true"
                  className="status-dot relative h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                {profile.availability}
              </p>
              <h1
                id="hero-title"
                className="font-editorial mt-6 text-[clamp(2.4rem,10vw,3.5rem)] text-balance text-neutral-50 sm:text-6xl lg:text-[4.25rem]"
              >
                {renderAccent(profile.heroTitle, profile.heroTitleAccent)}
              </h1>
              <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-pretty text-neutral-400 sm:text-lg">
                {profile.heroLead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`#${sections.projects}`}
                  className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-neutral-100 px-6 py-2 text-sm font-semibold text-neutral-950 transition-all hover:bg-white active:scale-[0.98] sm:flex-none"
                >
                  {hero.viewProjects}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`#${sections.contact}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-white/15 px-6 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98] sm:flex-none"
                >
                  {hero.contact}
                </a>
                <ul
                  aria-label={hero.socialLabel}
                  className="-ml-3 flex items-center gap-1 sm:ml-1"
                >
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-neutral-400 transition-colors hover:bg-white/5 hover:text-neutral-100"
                      >
                        <SocialIcon label={link.label} />
                        <span className="sr-only">
                          {link.label} {newTab}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal index={1} className="w-full">
          <dl
            aria-label={hero.highlightsLabel}
            className="mx-5 mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mx-8 sm:grid-cols-3 md:mx-0 md:mt-16"
          >
            {profile.highlights.map((item) => (
              <div key={item.label} className="bg-[#0d0d0d] px-5 py-4">
                <dt className="font-meta text-[0.6875rem] tracking-[0.14em] text-neutral-400 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm text-neutral-200">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
