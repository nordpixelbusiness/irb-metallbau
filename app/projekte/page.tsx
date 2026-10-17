import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projekte" };

export default function Projekte() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Projektübersicht"
        sub="Ausgewählte Projekte – vom Neubau mit maßgefertigter Lichtdecke bis zum denkmalgeschützten Schulzentrum."
        image="/images/projekte/frankenkrohnwerk-1.webp"
      />
      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projekte/${p.slug}/`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src={p.photos[0].src}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-accent px-3 py-1.5 font-display text-xs uppercase tracking-widest text-white">
                  {p.kategorie}
                </span>
              </div>
              <div className="border-b border-line py-6">
                <p className="text-sm uppercase tracking-widest text-muted">
                  {p.ort} · {p.period} · Volumen {p.volumen}
                </p>
                <h2 className="mt-2 text-2xl transition-colors group-hover:text-accent md:text-3xl">{p.title}</h2>
                <p className="mt-3 text-muted">{p.text}</p>
                <span className="link-arrow mt-5">
                  Projekt ansehen <Icon name="arrow" className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
