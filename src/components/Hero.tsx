import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/content/profile";

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-24 sm:py-32"
    >
      <Reveal>
        <div className="card-lift grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:grid-cols-2">
          <div className="relative h-72 w-full sm:h-80 md:h-auto md:min-h-[440px]">
            <Image
              src="/profile.jpeg"
              alt="Retrato de Luca Avila"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="grayscale object-cover object-top"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-5 p-6 sm:p-10 md:p-12">
            <p className="font-meta text-xs tracking-[0.18em] text-neutral-500 uppercase">
              {profile.role}
            </p>
            <h1
              id="hero-title"
              className="font-editorial text-5xl text-neutral-50 sm:text-6xl"
            >
              {profile.name}
            </h1>
            <p className="max-w-prose leading-relaxed text-neutral-400">
              {profile.tagline}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:bg-white active:scale-[0.98] sm:w-auto"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98] sm:w-auto"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
