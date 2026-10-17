import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { company, services } from "@/lib/data";

export const metadata: Metadata = { title: "Leistungen" };

export default function Leistungen() {
  return (
    <>
      <PageHero
        eyebrow="Leistungsspektrum"
        title="Unsere Leistungen"
        sub="Fachgerechter Trockenbau für private und gewerbliche Kunden – vom einzelnen Raum bis zum Großprojekt."
        image="/images/leistungen/akustikdecken-neu.webp"
      />

      <nav aria-label="Leistungen" className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur lg:top-[116px]">
        <div className="container-x flex gap-2 overflow-x-auto py-3">
          {services.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 border border-line px-4 py-2 font-display text-sm uppercase tracking-wider transition-colors hover:border-accent hover:text-accent"
            >
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="section">
        <div className="container-x space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="grid items-center gap-10 scroll-mt-48 lg:grid-cols-2 lg:gap-20"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="flex items-center gap-4 font-display text-5xl leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                  <span className="h-px w-16 bg-line" />
                </p>
                <h2 className="h-section mt-5">{s.title}</h2>
                <p className="lead mt-6">{s.text}</p>
                <Link href="/kontakt/#anfrage" className="link-arrow mt-8">
                  Projekt anfragen <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <div className="frame-accent">
                <Image
                  src={s.image.src}
                  alt={s.title}
                  width={s.image.w}
                  height={s.image.h}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 grid-lines" />
        <div className="container-x flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Unverbindlich</p>
            <h2 className="h-section">Ihr Projekt – unser Handwerk</h2>
            <p className="mt-4 max-w-xl text-white/70">
              Wir vereinbaren einen Termin zur Begehung und erstellen Ihnen ein unverbindliches Angebot.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt/#anfrage" className="btn">
              Anfrage stellen <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={company.phoneHref} className="btn btn-ghost">
              <Icon name="phone" className="h-4 w-4" /> Anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
