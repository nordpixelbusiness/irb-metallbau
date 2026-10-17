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
    <div
      className={`relative min-h-[22rem] border-t-4 border-accent bg-white ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, #d4d4d0 1px, transparent 1px), linear-gradient(to bottom, #d4d4d0 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
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
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="flex max-w-md flex-col items-center gap-4 bg-white/95 p-6 text-center shadow-md">
          <h3 className="text-xl">Karte von Google Maps</h3>
          <p className="text-sm text-muted">
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
        </div>
      )}
    </div>
  );
}
