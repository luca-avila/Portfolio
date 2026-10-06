import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StackPills from "@/components/StackPills";
import { profiles } from "@/content/profile";
import { dictionaries } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function About({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const profile = profiles[locale];
  const { about, sections, stackLabel } = dictionaries[locale];

  return (
    <section
      id={sections.about}
      aria-labelledby="about-title"
      className="mx-auto max-w-3xl scroll-mt-20 border-t border-white/10 px-4 py-24 sm:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          id="about-title"
        />
      </Reveal>
      <Reveal index={1}>
        <p className="font-meta text-accent mt-10 text-xs tracking-[0.18em] uppercase">
          {profile.name} — {profile.role}
        </p>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-neutral-300">
          {profile.bio}
        </p>
        <div className="mt-10 border-t border-white/10 pt-8">
          <StackPills items={profile.skills} label={stackLabel} />
        </div>
        <a
          href="/cv.pdf"
          download
          aria-label={about.downloadCvLabel(profile.name)}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-6 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
        >
          {about.downloadCv}
        </a>
      </Reveal>
    </section>
  );
}
