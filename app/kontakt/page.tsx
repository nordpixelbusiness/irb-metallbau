import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { company, contacts } from "@/lib/data";

export const metadata: Metadata = { title: "Kontakt" };

const tel = (n: string) => "tel:" + n.replace(/[^+\d]/g, "");

export default function Kontakt() {
  return (
    <>
      <PageHero title="Kontakte" sub="Wir sind für Sie erreichbar – ob per Telefon, Fax oder Nachricht." />
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c) => (
              <div key={c.mail} className="border-t-4 border-accent bg-paper p-6">
                <h2 className="text-xl">{c.name}</h2>
                <p className="text-muted mb-3">{c.role}</p>
                <p className="text-sm leading-7">
                  {c.tel && (
                    <>
                      Tel: <a href={tel(c.tel)} className="hover:text-accent">{c.tel}</a>
                      <br />
                    </>
                  )}
                  {c.mobil && (
                    <>
                      Mobil: <a href={tel(c.mobil)} className="hover:text-accent">{c.mobil}</a>
                      <br />
                    </>
                  )}
                  E-Mail: <a href={`mailto:${c.mail}`} className="hover:text-accent break-all">{c.mail}</a>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="border-t-4 border-accent bg-paper p-6">
              <h2 className="text-xl mb-3">Postanschrift</h2>
              <p className="leading-7">
                {company.name}
                <br />
                {company.street}
                <br />
                {company.city}
              </p>
              <p className="mt-3 text-sm leading-7">
                Telefon: <a href={company.phoneHref} className="hover:text-accent">{company.phone}</a>
                <br />
                Fax: {company.fax}
                <br />
                E-Mail: <a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a>
              </p>
              <p className="mt-3 text-sm leading-7">
                Geschäftsführung: Gerold Jürgens, Edwin Engelmann
              </p>
            </div>
            <div className="border-t-4 border-accent bg-paper p-6">
              <h2 className="text-xl mb-3">Lage</h2>
              <p className="text-muted">
                Unser Hauptsitz in Lubmin ist direkt an das überregionale Straßen- und Schienennetz sowie den
                Industriehafen angebunden. Zusätzlich haben wir ein Büro in Greifswald.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={company.maps} target="_blank" rel="noopener noreferrer" className="btn">
                  Lubmin
                </a>
                <a
                  href={company.mapsGreifswald}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-ink hover:bg-black"
                >
                  Greifswald
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl bar mb-10">Projekt anfragen</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
