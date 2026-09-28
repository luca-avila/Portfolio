import { profile } from "@/content/profile";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="font-meta mx-auto flex max-w-5xl flex-col gap-2 text-xs tracking-[0.08em] text-neutral-500 uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Hecho con Next.js y Tailwind CSS</p>
      </div>
    </footer>
  );
}
