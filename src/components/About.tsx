import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StackPills from "@/components/StackPills";
import { profile } from "@/content/profile";

export default function About(): React.JSX.Element {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-24 sm:py-32"
    >
      <Reveal>
        <SectionHeading eyebrow="Perfil" title="Sobre mí" id="about-title" />
      </Reveal>
      <Reveal index={1}>
        <div className="card-lift mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 md:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="/profile.jpeg"
              alt="Retrato de Luca Avila"
              width={128}
              height={128}
              className="h-24 w-24 rounded-2xl border border-white/10 object-cover object-top grayscale sm:h-28 sm:w-28"
            />
            <div className="min-w-0">
              <h3 className="font-editorial text-2xl text-neutral-50 sm:text-3xl">
                {profile.name}
              </h3>
              <p className="font-meta text-accent mt-2 text-xs tracking-[0.18em] uppercase">
                {profile.role}
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-prose leading-relaxed text-neutral-400">
            {profile.bio}
          </p>
          <div className="mt-8 border-t border-white/10 pt-8">
            <StackPills items={profile.skills} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
