import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/content/profile";

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

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-[calc(100svh-65px)] max-w-6xl scroll-mt-20 flex-col justify-center px-4 py-6 sm:py-8 lg:py-10"
    >
      <Reveal>
        <div className="grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-14">
          <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
            <p className="font-meta text-accent text-xs tracking-[0.18em] uppercase">
              {profile.role}
            </p>
            <h1
              id="hero-title"
              className="font-editorial text-4xl text-neutral-50 sm:text-5xl lg:text-6xl"
            >
              {renderAccent(profile.heroTitle, profile.heroTitleAccent)}
            </h1>
            <p className="max-w-prose leading-relaxed text-neutral-300 sm:text-lg">
              {profile.heroLead}
            </p>
            <div className="mt-1 flex gap-3">
              <a
                href="#proyectos"
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-2xl bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 transition-all hover:bg-white active:scale-[0.98] sm:flex-none sm:px-6"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-2xl border border-white/15 px-4 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98] sm:flex-none sm:px-6"
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-[min(28svh,14rem)] w-full max-w-[17rem] overflow-hidden rounded-3xl border border-white/10 sm:h-[min(32svh,19rem)] sm:max-w-[22rem] md:h-[min(68svh,34rem)] md:max-w-none">
            <Image
              src="/profile.jpeg"
              alt="Retrato de Luca Avila"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="grayscale object-cover object-[center_20%] md:object-top"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
