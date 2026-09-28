import { profile } from "@/content/profile";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Hecho con Next.js y Tailwind CSS</p>
      </div>
    </footer>
  );
}
