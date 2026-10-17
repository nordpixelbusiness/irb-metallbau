export default function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-ink text-white py-16 md:py-20">
      <div className="container-x">
        <h1 className="text-4xl md:text-5xl bar">{title}</h1>
        {sub && <p className="mt-6 max-w-3xl text-white/80 text-lg">{sub}</p>}
      </div>
    </section>
  );
}
