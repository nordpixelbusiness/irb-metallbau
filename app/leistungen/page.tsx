import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Leistungen" };

export default function Leistungen() {
  return (
    <>
      <PageHero
        title="Unsere Leistungen"
        sub="Fachgerechter Trockenbau für private und gewerbliche Kunden. Stellen Sie gerne eine Anfrage für Ihr Projekt – wir sind Ihr kompetenter Partner für:"
      />
      <section className="section">
        <div className="container-x">
          <ul className="grid gap-2 md:grid-cols-2 text-lg mb-6">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-accent">
                  <span className="text-accent font-bold">▸ </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/kontakt/" className="btn">
            Projekt anfragen
          </Link>

          <div className="mt-16 space-y-20">
            {services.map((s, i) => (
              <article key={s.id} id={s.id} className="grid gap-8 md:grid-cols-2 items-center scroll-mt-28">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <h2 className="text-3xl bar">{s.title}</h2>
                  <p className="mt-6 text-muted text-lg">{s.text}</p>
                </div>
                <Image
                  src={s.image.src}
                  alt={s.title}
                  width={s.image.w}
                  height={s.image.h}
                  className="w-full aspect-[3/2] object-cover"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
