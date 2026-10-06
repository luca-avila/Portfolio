import Image from "next/image";
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
      <em className="font-editorial-em text-accent text-[1.05em]">{accent}</em>
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
  const { hero, sections } = dictionaries[locale];

  return (
    <section
      id={sections.home}
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl scroll-mt-20 pb-16 md:flex md:min-h-[calc(100svh-65px)] md:items-center md:px-4 md:py-10"
    >
      <Reveal className="w-full">
        <div className="grid items-center md:grid-cols-[0.94fr_1.06fr] md:gap-12 lg:gap-20">
          <div className="relative h-[clamp(15rem,36svh,22rem)] w-full overflow-hidden border-b border-white/10 md:h-[min(68svh,34rem)] md:rounded-3xl md:border">
            <Image
              src="/profile.jpeg"
              alt={hero.portraitAlt(profile.name)}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 45vw"
              className="grayscale object-cover object-[center_22%] brightness-[0.85] md:object-top md:brightness-100"
            />
          </div>
          <div className="flex min-w-0 flex-col px-5 pt-6 sm:px-8 sm:pt-9 md:px-0 md:pt-0">
            <p className="font-meta text-accent text-xs tracking-[0.18em] uppercase">
              {profile.role}
            </p>
            <h1
              id="hero-title"
              className="font-editorial mt-3 text-[clamp(2.25rem,10.5vw,3.5rem)] text-neutral-50 sm:mt-4 sm:text-5xl lg:text-6xl"
            >
              {renderAccent(profile.heroTitle, profile.heroTitleAccent)}
            </h1>
            <p className="mt-4 max-w-[35ch] leading-relaxed text-neutral-300 sm:text-lg">
              {profile.heroLead}
            </p>
            <div className="mt-6 flex gap-2.5 sm:mt-7 sm:gap-3">
              <a
                href={`#${sections.projects}`}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-900 transition-all hover:bg-white active:scale-[0.98] sm:flex-none sm:px-6"
              >
                {hero.viewProjects}
              </a>
              <a
                href={`#${sections.contact}`}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-white/15 px-3 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98] sm:flex-none sm:px-6"
              >
                {hero.contact}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
