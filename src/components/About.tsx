import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StackPills from "@/components/StackPills";
import { profile } from "@/content/profile";

export default function About(): React.JSX.Element {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="mx-auto max-w-3xl scroll-mt-20 border-t border-white/10 px-4 py-24 sm:py-32"
    >
      <Reveal>
        <SectionHeading eyebrow="Perfil" title="Sobre mí" id="about-title" />
      </Reveal>
      <Reveal index={1}>
        <p className="font-meta text-accent mt-10 text-xs tracking-[0.18em] uppercase">
          {profile.name} — {profile.role}
        </p>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-neutral-300">
          {profile.bio}
        </p>
        <div className="mt-10 border-t border-white/10 pt-8">
          <StackPills items={profile.skills} />
        </div>
      </Reveal>
    </section>
  );
}
