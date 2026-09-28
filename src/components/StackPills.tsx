// Pills sobrias en un único tono neutro: la jerarquía la da el contexto,
// no el color. `muted` atenúa para superficies secundarias.
export default function StackPills({
  items,
  muted = false,
}: {
  items: string[];
  muted?: boolean;
}): React.JSX.Element {
  return (
    <ul aria-label="Tecnologías" className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`font-meta rounded-full border px-3 py-1 text-xs tracking-[0.05em] uppercase ${
            muted
              ? "border-white/10 bg-white/[0.03] text-neutral-500"
              : "border-white/15 bg-white/[0.05] text-neutral-300"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
