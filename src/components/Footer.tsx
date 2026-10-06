import { ArrowUpIcon } from "@/components/Icons";
import { profiles } from "@/content/profile";
import { dictionaries } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export default function Footer({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  const { footer, sections } = dictionaries[locale];

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-6">
        <p>
          © {new Date().getFullYear()} {profiles[locale].name}
          <span aria-hidden="true" className="mx-2 text-neutral-600">
            /
          </span>
          <span className="text-neutral-400">{footer.builtWith}</span>
        </p>
        <a
          href={`#${sections.home}`}
          className="group inline-flex w-fit items-center gap-2 rounded-md transition-colors hover:text-neutral-200"
        >
          {footer.backToTop}
          <ArrowUpIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
