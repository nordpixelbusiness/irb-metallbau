import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { projects } from "@/lib/data";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.title, description: p?.text };
}

export default async function Projekt({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const facts = [
    ["Ort", p.ort],
    ["Zeitraum", p.period],
    ["Bereich", p.kategorie],
    ["Auftragsvolumen", p.volumen],
  ];

  return (
    <>
      <PageHero eyebrow="Referenzprojekt" title={p.title} sub={p.text} image={p.photos[0].src} />

      <div className="relative z-10 -mt-px border-b border-line bg-white">
        <dl className="container-x grid grid-cols-2 md:grid-cols-4">
          {facts.map(([k, v], n) => (
            <div key={k} className={`flex flex-col-reverse py-6 ${n ? "md:border-l md:pl-8" : ""} border-line`}>
              <dt className="text-sm text-muted">{k}</dt>
              <dd className="font-display text-xl uppercase md:text-2xl">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow">Projektbeschreibung</p>
            {p.beschreibung.map((t) => (
              <p key={t} className="mb-5 text-lg text-muted">
                {t}
              </p>
            ))}
          </div>
          <aside className="self-start bg-paper p-8 lg:sticky lg:top-36">
            <h2 className="text-2xl">Unsere Leistungen</h2>
            <ul className="mt-6 space-y-4">
              {p.leistungen.map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-accent text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {l}
                </li>
              ))}
            </ul>
            <Link href="/kontakt/#anfrage" className="btn mt-8 w-full justify-center">
              Ähnliches Projekt anfragen
            </Link>
          </aside>
        </div>
      </section>

      <section className="section bg-paper !pt-16">
        <div className="container-x">
          <p className="eyebrow">Galerie</p>
          <h2 className="h-section mb-10">Bilder vom Projekt</h2>
          <Gallery photos={p.photos} alt={p.title} />
        </div>
      </section>

      {projects.length > 1 && (
        <Link href={`/projekte/${next.slug}/`} className="group block bg-ink text-white">
          <div className="container-x flex items-center justify-between gap-6 py-12">
            <div>
              <p className="eyebrow">Nächstes Projekt</p>
              <p className="font-display text-2xl uppercase transition-colors group-hover:text-accent md:text-4xl">
                {next.title}
              </p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-accent">
              <Icon name="arrow" className="h-6 w-6" />
            </span>
          </div>
        </Link>
      )}
    </>
  );
}
