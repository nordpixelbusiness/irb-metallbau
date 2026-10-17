"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/data";

/** Statische Seite: Das Formular öffnet das Mailprogramm der Besucher (mailto). */
export default function ContactForm({ job }: { job?: string }) {
  const [sent, setSent] = useState(false);

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

  const field = "w-full border border-neutral-300 px-4 py-3 bg-white focus:outline-none focus:border-accent";
  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label>
        <span className="sr-only">Dein Name</span>
        <input required name="name" placeholder="Dein Name" className={field} />
      </label>
      <label>
        <span className="sr-only">Deine E-Mail-Adresse</span>
        <input required type="email" name="email" placeholder="Deine E-Mail-Adresse" className={field} />
      </label>
      {job ? (
        <label>
          <span className="sr-only">Deine Telefonnummer</span>
          <input name="phone" type="tel" placeholder="Deine Telefonnummer" className={field} />
        </label>
      ) : (
        <label>
          <span className="sr-only">Betreff</span>
          <input required name="subject" placeholder="Betreff" className={field} />
        </label>
      )}
      <label>
        <span className="sr-only">Deine Nachricht</span>
        <textarea name="message" rows={6} placeholder="Deine Nachricht (optional)" className={field} />
      </label>
      {job && (
        <p className="text-sm text-muted">
          Bitte hänge deinen Lebenslauf in deinem Mailprogramm an die Nachricht an.
        </p>
      )}
      <label className="flex gap-3 items-start text-sm">
        <input required type="checkbox" className="mt-1" />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz/" className="underline">
            Datenschutzerklärung
          </Link>{" "}
          zur Kenntnis genommen.
          {job && " Meine personenbezogenen Daten werden ausschließlich zur Bearbeitung meiner Bewerbung verarbeitet."}
        </span>
      </label>
      <div>
        <button type="submit" className="btn">
          {job ? "Jetzt bewerben" : "Absenden"}
        </button>
      </div>
      {sent && (
        <p role="status" className="text-sm text-muted">
          Ihr Mailprogramm sollte sich geöffnet haben. Falls nicht, schreiben Sie uns direkt an{" "}
          <a className="underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
