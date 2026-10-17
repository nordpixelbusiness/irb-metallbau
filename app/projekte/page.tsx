import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projekte" };

export default function Projekte() {
  return (
    <>
      <PageHero
        title="Projektübersicht"
        sub="Erhalten Sie hier eine Übersicht über ausgewählte Projekte – von Wohnbau bis zum denkmalgeschützten Schulzentrum."
      />
      <section className="section">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projekte/${p.slug}/`} className="group block">
              <div className="aspect-[16/10] overflow-hidden bg-paper">
                <Image
                  src={p.photos[0].src}
                  alt={p.title}
                  width={p.photos[0].w}
                  height={p.photos[0].h}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-sm text-muted">
                {p.ort} · {p.period} · {p.kategorie}
              </p>
              <h2 className="text-xl group-hover:text-accent transition-colors">{p.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
