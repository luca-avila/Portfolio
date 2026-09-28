import Image from "next/image";
import { profile } from "@/content/profile";

export default function About(): React.JSX.Element {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16"
    >
      <h2 id="about-title" className="text-2xl font-semibold tracking-tight">
        Sobre mí
      </h2>
      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src="/profile.jpeg"
            alt="Retrato de Luca Avila"
            width={128}
            height={128}
            className="h-28 w-28 rounded-full object-cover object-top grayscale sm:h-32 sm:w-32"
          />
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {profile.name}
            </h3>
            <p className="text-sm font-medium text-neutral-400">
              {profile.role}
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-prose text-neutral-300">{profile.bio}</p>
        <ul aria-label="Tecnologías" className="mt-8 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
