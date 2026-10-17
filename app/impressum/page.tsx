import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="section">
        <div className="container-x max-w-3xl space-y-6 leading-7">
          <h2 className="text-2xl">Angaben gemäß § 5 DDG</h2>
          <p>
            {company.name}
            <br />
            {company.street}
            <br />
            {company.city}
            <br />
            Deutschland
          </p>
          <p>
            Telefon: {company.phone}
            <br />
            Telefax: {company.fax}
            <br />
            E-Mail: <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            Vertreten durch die Geschäftsführung:
            <br />
            Dipl.-Ing. Gerold Jürgens
            <br />
            Dipl.-Ing. (FH) Edwin Engelmann
          </p>
          <h2 className="text-2xl">Registereintrag</h2>
          <p>
            Eingetragen im Handelsregister.
            <br />
            Registergericht: Amtsgericht Stralsund
            <br />
            Registernummer: HRA XXXXX
          </p>
          <h2 className="text-2xl">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE XXXXXXXXX</p>
          <h2 className="text-2xl">Haftung für Inhalte und Links</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für
            den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </div>
      </section>
    </>
  );
}
