import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import MapConsent from "@/components/MapConsent";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { company, contacts } from "@/lib/data";

export const metadata: Metadata = { title: "Kontakt" };

const tel = (n: string) => "tel:" + n.replace(/[^+\d]/g, "");
const initials = (n: string) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("");

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Sprechen Sie uns an"
        title="Kontakt"
        sub="Wir sind für Sie erreichbar – ob per Telefon, Fax oder Nachricht."
      />

      <div className="relative z-10 -mt-px bg-white">
        <div className="container-x">
          <div className="grid gap-px border-x border-b border-line bg-line md:grid-cols-3">
            {[
              {
                icon: "phone" as const,
                k: "Telefon",
                v: company.phone,
                href: company.phoneHref,
              },
              {
                icon: "mail" as const,
                k: "E-Mail",
                v: company.email,
                href: `mailto:${company.email}`,
              },
              {
                icon: "pin" as const,
                k: "Adresse",
                v: `${company.street}, ${company.city}`,
                href: company.maps,
              },
            ].map((c) => (
              <a
                key={c.k}
                href={c.href}
                {...(c.icon === "pin"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-5 bg-white p-7 transition-colors hover:bg-paper"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-white">
                  <Icon name={c.icon} />
                </span>
                <span>
                  <span className="block text-sm text-muted">{c.k}</span>
                  <span className="font-display text-lg uppercase tracking-wide group-hover:text-accent break-all">
                    {c.v}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Ansprechpartner"
            title="Ihr direkter Draht zu uns"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c) => (
              <div key={c.mail} className="card p-7">
                <span className="flex h-14 w-14 items-center justify-center bg-ink font-display text-xl text-white">
                  {initials(c.name)}
                </span>
                <h3 className="mt-5 text-xl">{c.name}</h3>
                <p className="text-sm text-accent">{c.role}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
                  {c.tel && (
                    <li>
                      <a
                        href={tel(c.tel)}
                        className="flex items-center gap-3 hover:text-accent"
                      >
                        <Icon name="phone" className="h-4 w-4 text-accent" />{" "}
                        {c.tel}
                      </a>
                    </li>
                  )}
                  {c.mobil && (
                    <li>
                      <a
                        href={tel(c.mobil)}
                        className="flex items-center gap-3 hover:text-accent"
                      >
                        <Icon name="phone" className="h-4 w-4 text-accent" />{" "}
                        {c.mobil}
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      href={`mailto:${c.mail}`}
                      className="flex items-center gap-3 hover:text-accent break-all"
                    >
                      <Icon
                        name="mail"
                        className="h-4 w-4 shrink-0 text-accent"
                      />{" "}
                      {c.mail}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="anfrage" className="section bg-paper scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Anfrage</p>
            <h2 className="h-section">Projekt anfragen</h2>
            <p className="lead mt-6">
              Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns, vereinbaren
              einen Termin zur Begehung und erstellen Ihnen ein unverbindliches
              Angebot.
            </p>
            <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
              <div>
                <dt className="text-muted">Postanschrift</dt>
                <dd className="mt-1">
                  {company.name}
                  <br />
                  {company.street}, {company.city}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Fax</dt>
                <dd className="mt-1">{company.fax}</dd>
              </div>
              <div>
                <dt className="text-muted">Geschäftsführung</dt>
                <dd className="mt-1">Gerold Jürgens, Edwin Engelmann</dd>
              </div>
            </dl>
          </div>
          <div className="bg-white p-6 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.4)] md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="eyebrow">Anfahrt</p>
            <h2 className="h-section">So finden Sie uns</h2>
            <p className="lead mt-6">
              Unser Hauptsitz in Lubmin ist direkt an das überregionale Straßen-
              und Schienennetz sowie den Industriehafen angebunden. Zusätzlich
              haben wir ein Büro in Greifswald.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={company.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Icon name="pin" className="h-4 w-4" /> Lubmin
              </a>
              <a
                href={company.mapsGreifswald}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Icon name="pin" className="h-4 w-4" /> Greifswald
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
    </>
  );
}
