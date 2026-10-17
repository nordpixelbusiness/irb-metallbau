import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
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
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <PageHero title={p.title} sub={p.text} />
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="max-w-3xl">
              {p.beschreibung.map((t) => (
                <p key={t} className="mb-4 text-lg text-muted">
                  {t}
                </p>
              ))}
            </div>
            <aside className="border-t-4 border-accent bg-paper p-6 self-start text-sm leading-7">
              <p>
                <strong>Ort:</strong> {p.ort}
              </p>
              <p>
                <strong>Zeitraum:</strong> {p.period}
              </p>
              <p>
                <strong>Bereich:</strong> {p.kategorie}
              </p>
              <p>
                <strong>Auftragsvolumen:</strong> {p.volumen}
              </p>
              <p className="mt-4 font-display uppercase tracking-wider text-accent">Unsere Leistungen</p>
              <ul className="list-disc pl-5 space-y-1 text-muted">
                {p.leistungen.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </aside>
          </div>
          <div className="mt-12">
            <Gallery photos={p.photos} alt={p.title} />
          </div>
          {projects.length > 1 && (
            <div className="mt-14 flex flex-wrap justify-between gap-4 border-t pt-8">
              <Link href={`/projekte/${prev.slug}/`} className="hover:text-accent">
                ← {prev.title}
              </Link>
              <Link href={`/projekte/${next.slug}/`} className="hover:text-accent">
                {next.title} →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
