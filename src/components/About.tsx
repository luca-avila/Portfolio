import Image from "next/image";
import { DownloadIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StackPills from "@/components/StackPills";
import { profiles } from "@/content/profile";
import { dictionaries, sectionIndex } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function About({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const profile = profiles[locale];
  const { about, sections } = dictionaries[locale];

  return (
    <section
      id={sections.about}
      aria-labelledby="about-title"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 md:px-6"
    >
      <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        <Reveal>
          <SectionHeading
            index={sectionIndex.about}
            eyebrow={about.eyebrow}
            title={about.title}
            id="about-title"
          />
          <div className="mt-10 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/15">
              <Image
                src="/profile.jpeg"
                alt=""
                fill
                sizes="64px"
                className="object-cover object-[center_20%] grayscale"
              />
            </div>
            <div className="min-w-0">
              <p className="font-editorial text-2xl text-neutral-50">
                {profile.name}
              </p>
              <p className="text-sm text-neutral-400">{profile.role}</p>
            </div>
          </div>
          <a
            href="/cv.pdf"
            download
            aria-label={about.downloadCvLabel(profile.name)}
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
          >
            <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            {about.downloadCv}
          </a>
        </Reveal>
        <Reveal index={1}>
          <p className="text-xl leading-relaxed text-pretty text-neutral-200 sm:text-2xl sm:leading-relaxed">
            {profile.bio}
          </p>
          <div className="mt-8 flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <span className="font-meta text-accent pt-0.5 text-[0.6875rem] tracking-[0.18em] uppercase">
              {about.nowLabel}
            </span>
            <p className="leading-relaxed text-neutral-300">{profile.now}</p>
          </div>
          <dl className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-6 md:grid-cols-1 lg:grid-cols-3">
            {profile.skillGroups.map((group) => (
              <div
                key={group.label}
                className="md:max-lg:flex md:max-lg:items-center md:max-lg:gap-4"
              >
                <dt className="font-meta md:max-lg:w-40 md:max-lg:shrink-0 text-[0.6875rem] tracking-[0.18em] text-neutral-400 uppercase">
                  {group.label}
                </dt>
                <dd className="mt-3 md:max-lg:mt-0">
                  <StackPills items={group.items} label={group.label} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
