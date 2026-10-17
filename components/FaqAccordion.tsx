export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <details
          key={it.q}
          name="faq"
          className="group border border-line bg-white transition-colors open:border-ink open:shadow-[0_14px_30px_-18px_rgb(0_0_0/0.35)]"
        >
          <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1 font-display text-lg uppercase tracking-wide">{it.q}</span>
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-xl transition group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
            >
              +
            </span>
          </summary>
          <p className="px-6 pb-6 pl-[3.6rem] text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
