import { profile } from "@/content/profile";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="font-meta mx-auto max-w-5xl text-center text-xs tracking-[0.08em] text-neutral-500 uppercase">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
