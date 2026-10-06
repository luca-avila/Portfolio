import { profiles } from "@/content/profile";
import type { Locale } from "@/lib/i18n";

export default function Footer({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="font-meta mx-auto max-w-6xl text-center text-xs tracking-[0.08em] text-neutral-500 uppercase">
        <p>
          © {new Date().getFullYear()} {profiles[locale].name}
        </p>
      </div>
    </footer>
  );
}
