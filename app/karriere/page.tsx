import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { benefits, company, jobFaqs, jobs } from "@/lib/data";

export const metadata: Metadata = { title: "Karriere" };

export default function Karriere() {
  return (
    <>
      <PageHero
        eyebrow="Jobs bei IRB Metallbau"
        title="Werde Teil unseres Teams"
        sub="Handwerk, das bleibt. Ein Team, das zusammenhält – mit krisenfester Zukunft und maximaler Abwechslung vom privaten Wohnbau bis zu Großprojekten im Bildungs- und Gesundheitswesen."
        image="/images/karriere-hero.webp"
      />

      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Offene Stellen"
            title="Aktuelle Jobangebote"
            lead="Schnellbewerbung ohne Anschreiben – wir lernen dich lieber persönlich kennen."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {jobs.map((j) => (
              <Link key={j.slug} href={`/karriere/${j.slug}/`} className="card group flex flex-col p-8">
                <div className="flex flex-wrap gap-2">
                  {[j.meta.art, j.meta.ort, j.meta.bereich].map((t) => (
                    <span key={t} className="bg-paper px-3 py-1 text-xs uppercase tracking-widest text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl transition-colors group-hover:text-accent md:text-3xl">{j.title}</h3>
                <p className="mt-4 flex-1 text-muted">{j.teaser}</p>
                <span className="link-arrow mt-6">
                  Zur Schnellbewerbung <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 border border-dashed border-line p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-xl uppercase">Nichts Passendes dabei?</p>
              <p className="text-muted">Schick uns einfach deine Initiativbewerbung.</p>
            </div>
            <a href={`mailto:${company.email}?subject=Initiativbewerbung`} className="btn btn-dark">
              <Icon name="mail" className="h-4 w-4" /> Initiativ bewerben
            </a>
          </div>
        </div>
      </section>

      <section className="section relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 grid-lines" />
        <div className="container-x">
          <SectionHead dark eyebrow="Benefits" title="Das bieten wir dir" />
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {benefits.map((b, i) => (
              <div key={b.title} className="bg-ink p-8 md:p-10">
                <p className="font-display text-4xl text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-2xl">{b.title}</h3>
                <p className="mt-3 text-white/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="eyebrow">FAQ</p>
            <h2 className="h-section">Häufige Fragen</h2>
            <p className="lead mt-6">Weitere Fragen? Ruf uns einfach an – wir sind gerne persönlich für dich da.</p>
            <a href={company.phoneHref} className="btn mt-8">
              <Icon name="phone" className="h-4 w-4" /> {company.phone}
            </a>
          </div>
          <FaqAccordion items={jobFaqs} />
        </div>
      </section>
    </>
  );
}
