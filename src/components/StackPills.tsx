// Pills sobrias en un único tono neutro: la jerarquía la da el contexto,
// no el color.
export default function StackPills({
  items,
  label,
}: {
  items: string[];
  label: string;
}): React.JSX.Element {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="font-meta rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.6875rem] tracking-[0.06em] text-neutral-300 uppercase"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
