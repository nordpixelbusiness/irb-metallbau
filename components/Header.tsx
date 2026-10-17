"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/kontakt/", label: "Kontakt" },
  { href: "/karriere/", label: "Karriere" },
  { href: "/projekte/", label: "Projekte" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white text-ink shadow-md">
      <div className="container-x flex items-center justify-between h-20">
        <Link
          href="/"
          aria-label="IRB Metallbau GmbH & Co. KG – Startseite"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image src="/images/logo.webp" alt="" width={130} height={95} priority className="h-14 w-auto" />
          <span className="font-display uppercase leading-none">
            <span className="block text-2xl tracking-wide">IRB Metallbau</span>
            <span className="block text-sm tracking-[0.3em] text-muted mt-1">GmbH &amp; Co. KG</span>
          </span>
        </Link>
        <nav aria-label="Hauptmenü" className="hidden md:flex gap-8 font-display uppercase tracking-wider">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-accent transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-7 h-0.5 bg-ink mb-1.5" />
          <span className="block w-7 h-0.5 bg-ink mb-1.5" />
          <span className="block w-7 h-0.5 bg-ink" />
        </button>
      </div>
      {open && (
        <nav aria-label="Mobiles Menü" className="md:hidden bg-white border-t border-neutral-200">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block container-x py-3 font-display uppercase tracking-wider border-b border-neutral-200"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
