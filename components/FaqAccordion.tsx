export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t-4 border-accent">
      {items.map((it) => (
        <details key={it.q} className="group border-b border-neutral-300 bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display uppercase tracking-wide [&::-webkit-details-marker]:hidden">
            <span>{it.q}</span>
            <span aria-hidden="true" className="text-accent text-2xl leading-none transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
