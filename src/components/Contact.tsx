import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, type ContactLink } from "@/content/profile";

const iconClass = "h-5 w-5";

function ContactIcon({
  label,
}: {
  label: ContactLink["label"];
}): React.JSX.Element {
  switch (label) {
    case "Email":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "GitHub":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={iconClass}
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={iconClass}
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
    case "X":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={iconClass}
        >
          <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
        </svg>
      );
  }
}

function linkLabel(label: ContactLink["label"]): string {
  switch (label) {
    case "Email":
      return `Enviar correo a ${profile.email}`;
    case "GitHub":
      return `GitHub de ${profile.name}`;
    case "LinkedIn":
      return `LinkedIn de ${profile.name}`;
    case "X":
      return `X de ${profile.name}`;
  }
}

export default function Contact(): React.JSX.Element {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="mx-auto max-w-3xl scroll-mt-20 border-t border-white/10 px-4 py-24 sm:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          id="contact-title"
        />
      </Reveal>
      <Reveal index={1}>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-neutral-300">
          Estoy abierto a oportunidades laborales en backend e infraestructura.
          Si tenés una búsqueda o querés charlar, escribime o encontrame en
          estas redes.
        </p>
      </Reveal>
      <Reveal index={2}>
        <ul
          aria-label="Vías de contacto"
          className="mt-10 divide-y divide-white/10 border-y border-white/10"
        >
          {profile.contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={linkLabel(link.label)}
                {...(link.label === "Email"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex min-h-[44px] items-center justify-between gap-4 rounded-md py-4 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
              >
                <span className="flex min-w-0 items-center gap-3 text-neutral-200 transition-colors group-hover:text-white">
                  <ContactIcon label={link.label} />
                  <span className="truncate text-base">
                    {link.label === "Email" ? profile.email : link.label}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="font-meta text-xs tracking-[0.18em] text-neutral-500 uppercase transition-colors group-hover:text-accent"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
