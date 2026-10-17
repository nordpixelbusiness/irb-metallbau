import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { company, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x">
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl uppercase text-white md:text-3xl">
            Sie planen ein Projekt? <span className="text-accent">Sprechen wir darüber.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={company.phoneHref} className="btn">
              <Icon name="phone" className="h-4 w-4" /> Anrufen
            </a>
            <Link href="/kontakt/#anfrage" className="btn btn-ghost">
              Anfrage stellen
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-white p-1.5">
                <Image src="/images/logo.webp" alt="" width={130} height={95} className="h-10 w-auto" />
              </span>
              <span className="font-display uppercase leading-none text-white">
                <span className="block text-xl tracking-wide">IRB Metallbau</span>
                <span className="block text-[0.65rem] tracking-[0.32em] text-white/50 mt-1">GmbH &amp; Co. KG</span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm">
              Seit {company.founded} Ihr Partner für Trocken- und Akustikbau, Dachgeschossausbau und Brandschutz in
              Vorpommern.
            </p>
            <a
              href={company.isoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-6 !text-white hover:!text-accent"
            >
              Zu Iso-Rüst-Bau <Icon name="external" className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h3 className="text-white text-sm tracking-[0.2em] mb-5">Leistungen</h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/leistungen/#${s.id}`} className="hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm tracking-[0.2em] mb-5">Unternehmen</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/projekte/", "Projekte"],
                ["/karriere/", "Karriere"],
                ["/kontakt/", "Ansprechpartner"],
                ["/impressum/", "Impressum"],
                ["/datenschutz/", "Datenschutz"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm tracking-[0.2em] mb-5">Kontakt</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="pin" className="h-5 w-5 shrink-0 text-accent" />
                <a href={company.maps} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {company.street}
                  <br />
                  {company.city}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-accent" />
                <a href={company.phoneHref} className="hover:text-accent">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-accent break-all">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-xs">
        <div className="container-x flex flex-wrap gap-4 justify-between text-white/50">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>Qualität ist unser Handwerk.</span>
        </div>
      </div>
    </footer>
  );
}
