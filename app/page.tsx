import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import MapConsent from "@/components/MapConsent";
import SectionHead from "@/components/SectionHead";
import { company, faqs, homePhotos, projects, services } from "@/lib/data";

const stats = [
  { value: "1995", label: "gegründet" },
  { value: "15", label: "Fachkräfte" },
  { value: "0,75 Mio. €", label: "Auftragsvolumen je Projekt" },
  { value: "Vorpommern", label: "Einsatzgebiet" },
];

const highlights = [
  "Zertifizierte Systeme für Schall-, Brand- und Strahlenschutz",
  "Arbeit nach den Richtlinien der Systemhersteller, regelmäßig geschult",
  "Vom Wohnbau bis zu Kitas, Pflegeheimen und Krankenhäusern",
  "Eigene Ausbildung – unsere Fachkräfte von morgen",
];

/* Bento-Raster: drei schmale, zwei breite Karten */
const span = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <div className="absolute inset-0 -z-10 grid-lines" />

        <div className="container-x flex min-h-[78vh] flex-col justify-center pt-24 pb-36 md:pb-44">
          <p className="eyebrow rise">Trocken- und Akustikbau · seit {company.founded}</p>
          <h1 className="rise rise-2 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
            Ihr Partner für <span className="text-accent">Trocken- und Akustikbau</span>
          </h1>
          <p className="rise rise-3 mt-7 max-w-xl text-lg text-white/80 md:text-xl">
            Termingerecht, qualitätssicher, zuverlässig – von der einzelnen Trennwand bis zum denkmalgeschützten
            Schulzentrum.
          </p>
          <div className="rise rise-4 mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt/#anfrage" className="btn">
              Projekt anfragen <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/leistungen/" className="btn btn-ghost">
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Kennzahlen (überlappt den Hero) ---------- */}
      <div className="relative z-10 -mt-20 md:-mt-24">
        <div className="container-x">
          <dl className="grid grid-cols-2 bg-white shadow-[0_24px_60px_-24px_rgb(0_0_0/0.35)] lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse border-line p-6 md:p-8 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${
                  i === 2 ? "lg:border-l" : ""
                }`}
              >
                <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                <dd className="font-display text-2xl uppercase md:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ---------- Über uns ---------- */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="frame-accent order-2 lg:order-1">
            <Image
              src="/images/projekte/frankenkrohnwerk-3.webp"
              alt="Trockenbau-Montage im Frankenkrohnwerk Stralsund"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-8 right-4 bg-accent px-7 py-5 text-white shadow-xl md:right-8">
              <p className="font-display text-4xl leading-none md:text-5xl">30+</p>
              <p className="mt-1 text-sm uppercase tracking-widest">Jahre Erfahrung</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Über uns</p>
            <h2 className="h-section">Stark im Team, präzise im Ausbau</h2>
            <p className="lead mt-6">
              Die {company.name} steht seit über drei Jahrzehnten für verlässliche Handwerksqualität. Unter der Leitung
              von Betriebsleiter Rainer Winkler realisiert unser Team das komplette Spektrum des modernen Trockenbaus –
              wir kombinieren Ästhetik mit Technik.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-accent text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt/" className="btn btn-dark">
                Ansprechpartner
              </Link>
              <a href={company.phoneHref} className="btn btn-outline">
                <Icon name="phone" className="h-4 w-4" /> {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Leistungen ---------- */}
      <section className="section relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 grid-lines" />
        <div className="container-x">
          <SectionHead
            dark
            eyebrow="Leistungsspektrum"
            title="Fachgerechter Trockenbau für private und gewerbliche Kunden"
          >
            <Link href="/leistungen/" className="btn btn-ghost">
              Alle Leistungen <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </SectionHead>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((s, i) => (
              <Link
                key={s.id}
                href={`/leistungen/#${s.id}`}
                className={`group relative flex min-h-[22rem] flex-col justify-end overflow-hidden bg-ink-2 ${span[i]} ${
                  i === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={s.image.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <span className="absolute top-5 left-6 font-display text-5xl text-white/25 transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative p-6 md:p-7">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm text-white/70">{s.text}</p>
                  <span className="link-arrow mt-4">
                    Mehr erfahren <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Projekte ---------- */}
      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Referenzen"
            title="Ausgewählte Projekte"
            lead="Vom Neubau mit maßgefertigter Lichtdecke bis zum Stahlleichtbau im Baudenkmal."
          >
            <Link href="/projekte/" className="btn btn-outline">
              Alle Projekte <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </SectionHead>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
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
                <div className="flex items-start justify-between gap-6 border-b border-line py-6">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted">
                      {p.ort} · {p.period}
                    </p>
                    <h3 className="mt-2 text-2xl transition-colors group-hover:text-accent">{p.title}</h3>
                  </div>
                  <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <Icon name="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Eindrücke ---------- */}
      <section className="section bg-paper">
        <div className="container-x">
          <SectionHead eyebrow="Baustellen-Einblicke" title="Eindrücke von unserer Arbeit" />
          <div className="mt-14">
            <Gallery photos={homePhotos} alt="Eindruck von unserer Arbeit" initial={6} />
          </div>
        </div>
      </section>

      {/* ---------- Standorte ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow">Präsenz in der Region</p>
            <h2 className="h-section">Standorte</h2>
            <p className="lead mt-6">
              Unser Hauptsitz in Lubmin liegt direkt am überregionalen Straßen- und Schienennetz und am Industriehafen.
              Ergänzend sind wir mit einem Büro in Greifswald vertreten.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href={company.maps} target="_blank" rel="noopener noreferrer" className="card group p-6">
                <Icon name="pin" className="h-7 w-7 text-accent" />
                <p className="mt-4 font-display text-xl uppercase">Lubmin</p>
                <p className="text-sm text-muted">Hauptsitz · {company.street}</p>
                <span className="link-arrow mt-4">
                  Route <Icon name="arrow" className="h-4 w-4" />
                </span>
              </a>
              <a href={company.mapsGreifswald} target="_blank" rel="noopener noreferrer" className="card group p-6">
                <Icon name="pin" className="h-7 w-7 text-accent" />
                <p className="mt-4 font-display text-xl uppercase">Greifswald</p>
                <p className="text-sm text-muted">Büro · Am Koppelberg 10</p>
                <span className="link-arrow mt-4">
                  Route <Icon name="arrow" className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
          <MapConsent
            query="Südring 1, 17509 Lubmin"
            title="Google Maps: IRB Metallbau in Lubmin"
            className="h-[26rem] w-full lg:h-auto lg:aspect-[4/3]"
          />
        </div>
      </section>

      {/* ---------- Karriere ---------- */}
      <section className="relative isolate overflow-hidden bg-accent text-white">
        <div className="absolute inset-0 -z-10 grid-lines" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src="/images/karriere-hero.webp"
            alt="Das Team von IRB Metallbau"
            fill
            sizes="50vw"
            className="object-cover [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]"
            loading="lazy"
          />
        </div>
        <div className="container-x grid items-center gap-10 pt-20 lg:grid-cols-2 lg:pt-0">
          <div className="lg:py-28">
            <p className="font-display text-sm uppercase tracking-[0.22em] text-white/80">Karriere</p>
            <h2 className="h-section mt-4">Werde Teil unseres Teams</h2>
            <p className="mt-6 max-w-lg text-lg text-white/90">
              Handwerk, das bleibt. Ein Team, das zusammenhält – mit krisenfester Zukunft, fairer Bezahlung und
              Profi-Werkzeug von Makita.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/karriere/" className="btn btn-dark">
                Offene Stellen <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/karriere/auszubildender-trockenbauer/" className="btn btn-ghost">
                Ausbildung
              </Link>
            </div>
          </div>
          <div className="relative -mx-5 h-72 sm:h-96 md:-mx-8 lg:hidden">
            <Image
              src="/images/karriere-hero.webp"
              alt="Das Team von IRB Metallbau"
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="eyebrow">FAQ</p>
            <h2 className="h-section">Häufige Fragen</h2>
            <p className="lead mt-6">Weitere Fragen? Wir sind gerne persönlich für Sie da.</p>
            <a href={company.phoneHref} className="btn mt-8">
              <Icon name="phone" className="h-4 w-4" /> {company.phone}
            </a>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
