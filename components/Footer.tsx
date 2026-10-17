import Link from "next/link";
import { company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x pt-20 pb-16 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="text-white text-xl mb-4">Anfahrt</h3>
          <p>
            {company.street}
            <br />
            {company.city}
          </p>
          <a href={company.maps} target="_blank" rel="noopener noreferrer" className="btn mt-5">
            Google Maps
          </a>
        </div>
        <div>
          <h3 className="text-white text-xl mb-4">Kontakt</h3>
          <p>
            Telefon:{" "}
            <a href={company.phoneHref} className="hover:text-accent">
              {company.phone}
            </a>
            <br />
            <a href={`mailto:${company.email}`} className="hover:text-accent">
              {company.email}
            </a>
          </p>
          <Link href="/kontakt/" className="btn mt-5">
            Alle Kontakte
          </Link>
        </div>
        <div>
          <h3 className="text-white text-xl mb-4">{company.name}</h3>
          <p>Seit {company.founded} Ihr Partner für Trocken- und Akustikbau, Dachgeschossausbau und Brandschutz in Vorpommern.</p>
          <a
            href={company.isoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent mt-3 inline-block"
          >
            Zu Iso-Rüst-Bau ↗
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-7 text-sm">
        <div className="container-x flex flex-wrap gap-4 justify-between">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>
            <Link href="/impressum/" className="hover:text-accent">
              Impressum
            </Link>
            {" | "}
            <Link href="/datenschutz/" className="hover:text-accent">
              Datenschutzerklärung
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
