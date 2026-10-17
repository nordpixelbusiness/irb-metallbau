"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";
import { company } from "@/lib/data";

/** Statische Seite: Das Formular öffnet das Mailprogramm der Besucher (mailto). */
export default function ContactForm({ job }: { job?: string }) {
  const [sent, setSent] = useState(false);
  // Bewerbungen duzen, Projektanfragen siezen
  const t = job
    ? { name: "Dein Name", mail: "Deine E-Mail-Adresse", msg: "Deine Nachricht", mailer: "Dein Mailprogramm sollte sich geöffnet haben. Falls nicht, schreib uns direkt an" }
    : { name: "Ihr Name", mail: "Ihre E-Mail-Adresse", msg: "Ihre Nachricht", mailer: "Ihr Mailprogramm sollte sich geöffnet haben. Falls nicht, schreiben Sie uns direkt an" };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // Honeypot
    const subject = job ? `Bewerbung: ${job}` : String(f.get("subject") || "Anfrage über die Website");
    const body = [
      `Name: ${f.get("name")}`,
      `E-Mail: ${f.get("email")}`,
      f.get("phone") ? `Telefon: ${f.get("phone")}` : null,
      "",
      String(f.get("message") || ""),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const label = "block mb-2 font-display text-xs uppercase tracking-[0.18em] text-muted";
  const field =
    "w-full border border-line bg-paper/60 px-4 py-3.5 transition-colors placeholder:text-muted/50 focus:border-accent focus:bg-white focus:outline-none";
  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label>
        <span className={label}>{t.name} *</span>
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label>
        <span className={label}>{t.mail} *</span>
        <input required type="email" name="email" autoComplete="email" className={field} />
      </label>
      <label>
        <span className={label}>Telefon {job ? "" : "(optional)"}</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      {job ? (
        <div className="hidden sm:block" />
      ) : (
        <label>
          <span className={label}>Betreff *</span>
          <input required name="subject" placeholder="z. B. Dachgeschossausbau" className={field} />
        </label>
      )}
      <label className="sm:col-span-2">
        <span className={label}>{t.msg} {job ? "(optional)" : ""}</span>
        <textarea
          name="message"
          rows={6}
          placeholder={job ? "" : "Beschreiben Sie kurz Ihr Vorhaben …"}
          className={field}
        />
      </label>
      {job && (
        <p className="sm:col-span-2 text-sm text-muted">
          Bitte hänge deinen Lebenslauf in deinem Mailprogramm an die Nachricht an.
        </p>
      )}
      <label className="sm:col-span-2 flex gap-3 items-start text-sm">
        <input required type="checkbox" className="mt-1 h-4 w-4 accent-[var(--accent)]" />
        <span className="text-muted">
          Ich habe die{" "}
          <Link href="/datenschutz/" className="underline hover:text-accent">
            Datenschutzerklärung
          </Link>{" "}
          zur Kenntnis genommen.
          {job && " Meine personenbezogenen Daten werden ausschließlich zur Bearbeitung meiner Bewerbung verarbeitet."}
        </span>
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn w-full justify-center sm:w-auto">
          {job ? "Jetzt bewerben" : "Anfrage absenden"} <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
      {sent && (
        <p role="status" className="sm:col-span-2 text-sm text-muted">
          {t.mailer}{" "}
          <a className="underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
