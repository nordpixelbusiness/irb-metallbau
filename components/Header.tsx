"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { company } from "@/lib/data";

const nav = [
  { href: "/", label: "Home" },
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/projekte/", label: "Projekte" },
  { href: "/karriere/", label: "Karriere" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.slice(0, -1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 text-ink backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgb(0_0_0/0.25)]" : "border-b border-line"
      }`}
    >
      <div className="hidden lg:block bg-ink text-white/75 text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-3.5 w-3.5 text-accent" />
            {company.street}, {company.city} · Trocken- und Akustikbau in ganz Vorpommern
          </span>
          <span className="flex items-center gap-6">
            <a href={company.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5 text-accent" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5 text-accent" />
              {company.email}
            </a>
          </span>
        </div>
      </div>
      <div className="container-x flex items-center justify-between h-20">
        <Link
          href="/"
          aria-label="IRB Metallbau GmbH & Co. KG – Startseite"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image src="/images/logo.webp" alt="" width={130} height={95} priority className="h-12 w-auto" />
          <span className="font-display uppercase leading-none">
            <span className="block text-[1.4rem] tracking-wide">IRB Metallbau</span>
            <span className="block text-[0.7rem] tracking-[0.32em] text-muted mt-1">GmbH &amp; Co. KG</span>
          </span>
        </Link>
        <nav aria-label="Hauptmenü" className="hidden md:flex items-center gap-8 font-display uppercase tracking-wider">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={`relative py-2 transition-colors hover:text-accent after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-accent after:transition-all ${
                active(n.href) ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/kontakt/#anfrage" className="btn !py-3 !px-5 hidden lg:inline-flex">
            Anfrage stellen
          </Link>
        </nav>
        <button
          className="md:hidden p-2 -mr-2"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-7 h-0.5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-7 h-0.5 bg-ink my-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-7 h-0.5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav aria-label="Mobiles Menü" className="md:hidden bg-white border-t border-line">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block container-x py-4 font-display text-lg uppercase tracking-wider border-b border-line ${
                active(n.href) ? "text-accent" : ""
              }`}
            >
              {n.label}
            </Link>
          ))}
          <div className="container-x py-5 flex flex-col gap-3">
            <a href={company.phoneHref} className="btn justify-center">
              <Icon name="phone" className="h-4 w-4" /> {company.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
