import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";
import { benefits, company, jobFaqs, jobs } from "@/lib/data";

export const metadata: Metadata = { title: "Karriere" };

export default function Karriere() {
  return (
    <>
      <PageHero
        title="Werde Teil unseres Teams"
        sub="Handwerk, das bleibt. Ein Team, das zusammenhält. Bei IRB Metallbau verbindest du eine krisenfeste berufliche Zukunft mit maximaler Abwechslung auf der Baustelle – vom privaten Wohnbau bis zu hochsensiblen Großprojekten im Bildungs- und Gesundheitswesen."
      />

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl bar">Offene Stellen</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {jobs.map((j) => (
              <article key={j.slug} className="border-t-4 border-accent bg-paper p-7 flex flex-col">
                <h3 className="text-2xl">{j.title}</h3>
                <p className="mt-3 text-sm text-muted">
                  {j.meta.ort} · {j.meta.art} · {j.meta.bereich}
                </p>
                <p className="mt-4 text-muted flex-1">{j.teaser}</p>
                <div className="mt-6">
                  <Link href={`/karriere/${j.slug}/`} className="btn">
                    Zur Schnellbewerbung
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-muted">
            Nichts Passendes dabei? Schick uns einfach deine Initiativbewerbung an{" "}
            <a className="underline hover:text-accent" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl bar">Das bieten wir dir</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="border-t-4 border-accent bg-white p-7">
                <h3 className="text-xl mb-3">{b.title}</h3>
                <p className="text-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <h2 className="text-3xl md:text-4xl bar">Häufige Fragen</h2>
            <p className="mt-6 text-muted">Weitere Fragen? Ruf uns einfach an – wir sind gerne persönlich für dich da.</p>
            <a href={company.phoneHref} className="btn mt-6">
              {company.phone}
            </a>
          </div>
          <FaqAccordion items={jobFaqs} />
        </div>
      </section>
    </>
  );
}
