"use client";

import { useState } from "react";

/** Google Maps wird erst nach ausdrücklicher Zustimmung geladen (keine Speicherung der Entscheidung). */
export default function MapConsent({
  query,
  title,
  className = "",
}: {
  query: string;
  title: string;
  className?: string;
}) {
  const [load, setLoad] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=de&z=14&output=embed`;

  return (
    <div className={`relative bg-paper border-t-4 border-accent ${className}`}>
      {load ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <h3 className="text-xl">Karte von Google Maps</h3>
          <p className="max-w-md text-sm text-muted">
            Mit dem Laden der Karte werden Daten (u. a. Ihre IP-Adresse) an Google Ireland Limited übertragen und
            gegebenenfalls in die USA übermittelt. Nähere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz/#google-maps" className="underline hover:text-accent">
              Datenschutzerklärung
            </a>
            .
          </p>
          <button type="button" className="btn" onClick={() => setLoad(true)}>
            Karte laden
          </button>
        </div>
      )}
    </div>
  );
}
