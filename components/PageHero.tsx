import Image from "next/image";

export default function PageHero({
  title,
  sub,
  eyebrow,
  image = "/images/hero.webp",
}: {
  title: string;
  sub?: string;
  eyebrow?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 -z-10 grid-lines" />
      <div className="container-x py-20 md:py-28">
        {eyebrow && <p className="eyebrow rise">{eyebrow}</p>}
        <h1 className="rise rise-2 max-w-4xl text-4xl md:text-6xl">{title}</h1>
        {sub && <p className="rise rise-3 mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{sub}</p>}
      </div>
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-accent" />
    </section>
  );
}
