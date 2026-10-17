import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { jobs } from "@/lib/data";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: jobs.find((j) => j.slug === slug)?.title };
}

export default async function Job({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const j = jobs.find((x) => x.slug === slug);
  if (!j) notFound();

  return (
    <>
      <PageHero eyebrow={`${j.meta.art} · ${j.meta.ort}`} title={j.title} sub={j.intro[0]} image="/images/karriere-hero.webp" />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-14">
            {j.sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-3xl bar">{s.title}</h2>
                <ul className="mt-8 space-y-4">
                  {s.items.map((it) => {
                    const [head, ...rest] = it.split(": ");
                    return (
                      <li key={it} className="flex gap-4">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-accent text-white">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        <span className="text-muted">
                          {rest.length ? (
                            <>
                              <strong className="text-ink">{head}:</strong> {rest.join(": ")}
                            </>
                          ) : (
                            it
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <aside className="self-start bg-ink p-8 text-white lg:sticky lg:top-36">
            <h2 className="text-2xl">Auf einen Blick</h2>
            <dl className="mt-6 divide-y divide-white/10">
              {[
                ["Art", j.meta.art],
                ["Standort", j.meta.ort],
                ["Bereich", j.meta.bereich],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3">
                  <dt className="text-white/60">{k}</dt>
                  <dd className="font-display uppercase tracking-wide">{v}</dd>
                </div>
              ))}
            </dl>
            <a href="#bewerben" className="btn mt-8 w-full justify-center">
              Jetzt bewerben <Icon name="arrow" className="h-4 w-4" />
            </a>
            <p className="mt-4 text-center text-sm text-white/60">Ohne Anschreiben – in 2 Minuten.</p>
          </aside>
        </div>
      </section>
      <section id="bewerben" className="section bg-paper scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">Schnellbewerbung</p>
            <h2 className="h-section">Jetzt bewerben</h2>
            <p className="lead mt-6">Interessiert? Dann freuen wir uns auf deine Bewerbung!</p>
          </div>
          <div className="bg-white p-6 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.4)] md:p-10">
            <ContactForm job={j.title} />
          </div>
        </div>
      </section>
    </>
  );
}
