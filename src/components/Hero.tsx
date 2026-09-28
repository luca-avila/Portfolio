import Image from "next/image";
import { profile } from "@/content/profile";

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16"
    >
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2">
        <div className="relative h-72 w-full sm:h-80 md:h-auto md:min-h-[420px]">
          <Image
            src="/profile.jpeg"
            alt="Retrato de Luca Avila"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="grayscale object-cover object-top"
          />
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-4 p-6 sm:p-8 md:p-10">
          <h1
            id="hero-title"
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {profile.name}
          </h1>
          <p className="text-lg font-medium text-neutral-200">{profile.role}</p>
          <p className="max-w-prose text-neutral-300">{profile.tagline}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white sm:w-auto"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
