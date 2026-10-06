// Marco de navegador para capturas: muestra el dominio real del proyecto.
export default function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}): React.JSX.Element {
  const host = url === "" ? "" : new URL(url).host;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_30px_80px_-40px_var(--color-shadow)]">
      <div
        aria-hidden="true"
        className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-3.5 py-2.5"
      >
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        {host !== "" && (
          <span className="font-meta mx-auto truncate rounded-md bg-white/[0.05] px-3 py-0.5 text-[0.6875rem] text-neutral-400">
            {host}
          </span>
        )}
        <span className="w-[2.625rem]" />
      </div>
      <div className="relative aspect-[500/255] w-full">{children}</div>
    </div>
  );
}
