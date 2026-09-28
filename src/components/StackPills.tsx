// Pasteles apagados de la skill, adaptados a fondo oscuro para contraste AA.
const tones = [
  "border-[#FDEBEC]/25 bg-[#FDEBEC]/10 text-[#f2b8bc]",
  "border-[#E1F3FE]/25 bg-[#E1F3FE]/10 text-[#9fd4f5]",
  "border-[#EDF3EC]/25 bg-[#EDF3EC]/10 text-[#a9d3ae]",
  "border-[#FBF3DB]/25 bg-[#FBF3DB]/10 text-[#e8cd85]",
] as const;

export default function StackPills({
  items,
}: {
  items: string[];
}): React.JSX.Element {
  return (
    <ul aria-label="Tecnologías" className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <li
          key={item}
          className={`font-meta rounded-full border px-3 py-1 text-xs tracking-[0.05em] uppercase ${tones[i % tones.length]}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
