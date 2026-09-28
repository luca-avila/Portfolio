export default function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id: string;
}): React.JSX.Element {
  return (
    <div>
      <p className="font-meta text-accent text-xs tracking-[0.18em] uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-editorial mt-3 text-3xl text-neutral-50 sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
