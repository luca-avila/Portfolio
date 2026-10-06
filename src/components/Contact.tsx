import CopyEmailButton from "@/components/CopyEmailButton";
import { ArrowUpRightIcon, SocialIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profiles } from "@/content/profile";
import { dictionaries, sectionIndex } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function Contact({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const profile = profiles[locale];
  const { contact, sections, newTab } = dictionaries[locale];
  const socialLinks = profile.contactLinks.filter(
    (link) => link.label !== "Email",
  );

  return (
    <section
      id={sections.contact}
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 md:px-6"
    >
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-16">
            <div>
              <SectionHeading
                index={sectionIndex.contact}
                eyebrow={contact.eyebrow}
                title={contact.title}
                id="contact-title"
              />
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-pretty text-neutral-400">
                {contact.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${profile.email}`}
                  aria-label={contact.emailLabel(profile.email)}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-neutral-100 px-6 py-2 text-sm font-semibold text-neutral-950 transition-all hover:bg-white active:scale-[0.98]"
                >
                  <SocialIcon label="Email" className="h-4 w-4" />
                  {contact.emailCta}
                  <span className="hidden font-normal text-neutral-600 min-[400px]:inline">
                    {profile.email}
                  </span>
                </a>
                <CopyEmailButton
                  email={profile.email}
                  label={contact.copyEmail}
                  copiedLabel={contact.emailCopied}
                />
              </div>
            </div>
            <ul aria-label={contact.listLabel} className="grid gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${contact.profileLabel(link.label, profile.name)} ${newTab}`}
                    className="group flex min-h-14 items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/60 px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-neutral-200">
                      <SocialIcon label={link.label} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-neutral-100">
                        {link.label}
                      </span>
                      <span className="font-meta block truncate text-xs text-neutral-400">
                        {link.handle}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="group-hover:text-accent h-4 w-4 text-neutral-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
