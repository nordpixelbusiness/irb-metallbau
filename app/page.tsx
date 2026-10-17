import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Gallery from "@/components/Gallery";
import MapConsent from "@/components/MapConsent";
import { company, faqs, homePhotos, projects, services } from "@/lib/data";

const highlights = [
  { title: "Seit 1995 am Markt", text: "Über drei Jahrzehnte verlässliche Handwerksqualität im Trocken- und Akustikbau in Vorpommern." },
  { title: "Das komplette Spektrum", text: "Trockenbauwände, Gips- und Akustikdecken, Dachgeschossausbau, Trockenestrich, Innentüren und Brandschutz." },
  { title: "Starkes Team & Systemqualität", text: "15 Fachkräfte, regelmäßig geschult und nach den Richtlinien der Systemhersteller im Einsatz." },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-60"
          aria-hidden="true"
        />
        <div className="container-x py-28 md:py-44">
          <p className="font-display uppercase tracking-widest text-accent mb-4">Trocken- und Akustikbau</p>
          <h1 className="text-4xl md:text-6xl max-w-3xl">{company.name}</h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/90">
            Professioneller Trocken- und Akustikbau seit {company.founded} – termingerecht, qualitätssicher, zuverlässig.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/leistungen/" className="btn">
              Leistungen
            </Link>
            <Link href="/kontakt/" className="btn btn-ghost">
              Projekt anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl bar">Warum IRB Metallbau?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="border-t-4 border-accent bg-paper p-7">
                <h3 className="text-xl mb-3">{h.title}</h3>
                <p className="text-muted">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper border-y-4 border-accent">
        <div className="container-x py-14 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl bar">Kompetenz seit {company.founded}</h2>
            <p className="mt-6 text-lg text-muted">
              Ein Team von {company.employees} Fachkräften unter der Leitung von Betriebsleiter Rainer Winkler – für
              anspruchsvolle Innenausbau-Projekte bis zu einem Auftragsvolumen von 0,75 Mio. €. Qualität ist unser
              Handwerk.
            </p>
            <Link href="/kontakt/" className="btn mt-8">
              Kontakt
            </Link>
          </div>
          <Image
            src="/images/logo.webp"
            alt=""
            width={130}
            height={95}
            aria-hidden="true"
            className="h-28 w-auto md:h-36 shrink-0"
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl bar">Über uns</h2>
            <p className="mt-8 text-lg text-muted">
              <strong className="text-ink">Seit {company.founded} Ihr starker Partner für Trocken- und Akustikbau in Vorpommern.</strong>{" "}
              Stark im Team, präzise im Ausbau: Die IRB Metallbau GmbH &amp; Co. KG steht seit über drei Jahrzehnten
              für verlässliche Handwerksqualität.
            </p>
            <p className="mt-4 text-lg text-muted">
              <strong className="text-ink">Unser Fokus: das komplette Spektrum des modernen Trockenbaus.</strong> Wir
              kombinieren Ästhetik mit Technik – von Ständerwänden, Gips- und Akustikdecken über Trockenestrichfußböden
              bis hin zu zertifizierten Brandschutzarbeiten. Um diese Qualität langfristig zu sichern, bilden wir
              unsere Facharbeiter von morgen direkt im eigenen Betrieb aus.
            </p>
            <Link href="/karriere/" className="btn mt-8">
              Karriere bei uns
            </Link>
          </div>
          <Image
            src="/images/karriere-hero.webp"
            alt="Das Team von IRB Metallbau"
            width={1280}
            height={724}
            className="w-full aspect-[16/10] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl bar">Leistungen</h2>
            <ul className="mt-8 space-y-3 text-lg">
              {services.map((s) => (
                <li key={s.id} className="flex gap-3">
                  <span className="text-accent font-bold">▸</span>
                  {s.title}
                </li>
              ))}
            </ul>
            <Link href="/leistungen/" className="btn mt-8">
              Alle Leistungen
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {services.slice(0, 4).map((s) => (
              <Image
                key={s.id}
                src={s.image.src}
                alt=""
                width={s.image.w}
                height={s.image.h}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl bar">Eindrücke von unserer Arbeit</h2>
          <div className="mt-10">
            <Gallery photos={homePhotos} alt="Eindruck von unserer Arbeit" initial={6} />
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl bar">Unsere Projekte</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projekte/${p.slug}/`} className="group block">
                <div className="aspect-[16/10] overflow-hidden bg-white">
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
                  {p.ort} · {p.period}
                </p>
                <h3 className="text-xl group-hover:text-accent transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
          <Link href="/projekte/" className="btn mt-10">
            Alle ansehen
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl bar">Standorte</h2>
            <p className="mt-8 text-lg font-semibold">Standort Lubmin</p>
            <ul className="mt-3 space-y-3 text-muted text-lg">
              <li className="flex gap-3">
                <span className="text-accent font-bold">▸</span>
                Direkte Anbindung an das überregionale Straßen- und Schienennetz
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">▸</span>
                Strategische Lage mit Anbindung an den Industriehafen
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={company.maps} target="_blank" rel="noopener noreferrer" className="btn">
                Lubmin (Hauptsitz)
              </a>
              <a
                href={company.mapsGreifswald}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-ink hover:bg-black"
              >
                Greifswald (Büro)
              </a>
            </div>
          </div>
          <MapConsent
            query="Südring 1, 17509 Lubmin"
            title="Google Maps: IRB Metallbau in Lubmin"
            className="aspect-[16/10] w-full"
          />
        </div>
      </section>


      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl bar">Werde Teil unseres Teams</h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            Handwerk, das bleibt. Ein Team, das zusammenhält – mit krisenfester Zukunft und maximaler Abwechslung auf der
            Baustelle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/karriere/" className="btn">
              Offene Stellen
            </Link>
            <a href={company.isoUrl} target="_blank" rel="noopener noreferrer" className="btn bg-ink hover:bg-black">
              Zu Iso-Rüst-Bau ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <h2 className="text-3xl md:text-4xl bar">Häufige Fragen</h2>
            <p className="mt-6 text-muted">Weitere Fragen? Wir sind gerne persönlich für Sie da.</p>
            <a href={company.phoneHref} className="btn mt-6">
              {company.phone}
            </a>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
