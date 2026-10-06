// Encabezado de sección: número (coincide con la navbar) + eyebrow + título.
export default function SectionHeading({
  index,
  eyebrow,
  title,
  id,
}: {
  index: string;
  eyebrow: string;
  title: string;
  id: string;
}): React.JSX.Element {
  return (
    <div>
      <p className="font-meta flex items-center gap-3 text-xs tracking-[0.18em] uppercase">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-white/20" />
        <span className="text-neutral-400">{eyebrow}</span>
      </p>
      <h2
        id={id}
        className="font-editorial mt-4 text-4xl text-neutral-50 sm:text-5xl"
      >
        {title}
      </h2>
    </div>
  );
}
