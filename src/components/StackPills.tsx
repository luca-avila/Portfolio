// Pills sobrias en un único tono neutro: la jerarquía la da el contexto,
// no el color.
export default function StackPills({
  items,
}: {
  items: string[];
}): React.JSX.Element {
  return (
    <ul aria-label="Tecnologías" className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="font-meta rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs tracking-[0.05em] text-neutral-300 uppercase"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
