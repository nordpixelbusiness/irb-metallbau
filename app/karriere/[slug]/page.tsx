import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
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
      <PageHero title={j.title} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            {j.intro.map((t, i) => (
              <p key={i} className={i === 0 ? "text-xl font-semibold mb-4" : "mb-4 text-muted"}>
                {t}
              </p>
            ))}
            {j.sections.map((s) => (
              <div key={s.title} className="mt-8">
                <h2 className="text-2xl mb-3">{s.title}</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="mt-8 text-lg font-semibold">Interessiert? Dann freuen wir uns auf deine Bewerbung!</p>
          </div>
          <aside className="border-t-4 border-accent bg-paper p-6 self-start text-sm leading-8">
            <p>
              <strong>Ort:</strong> {j.meta.ort}
            </p>
            <p>
              <strong>Art:</strong> {j.meta.art}
            </p>
            <p>
              <strong>Bereich:</strong> {j.meta.bereich}
            </p>
          </aside>
        </div>
      </section>
      <section id="bewerben" className="section bg-paper scroll-mt-24">
        <div className="container-x">
          <h2 className="text-3xl bar mb-10">Jetzt bewerben</h2>
          <ContactForm job={j.title} />
        </div>
      </section>
    </>
  );
}
