"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/data";

export default function Gallery({
  photos,
  alt,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
  initial,
}: {
  photos: Photo[];
  alt: string;
  cols?: string;
  /** Anzahl zuerst sichtbarer Bilder; weitere per „Mehr laden“ */
  initial?: number;
}) {
  const [visible, setVisible] = useState(initial ?? photos.length);
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (d: number) => setIdx((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (idx === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [idx, close, step]);

  return (
    <>
      <div className={`grid gap-3 grid-cols-1 ${cols}`}>
        {photos.slice(0, visible).map((p, i) => (
          <button
            key={p.src}
            onClick={() => setIdx(i)}
            className="relative aspect-[4/3] overflow-hidden group bg-paper"
            aria-label={`${alt} – Bild ${i + 1} vergrößern`}
          >
            <Image
              src={p.src}
              alt={`${alt} ${i + 1}`}
              width={p.w}
              height={p.h}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/45">
              <span className="flex h-12 w-12 scale-75 items-center justify-center bg-accent text-2xl text-white opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                +
              </span>
            </span>
          </button>
        ))}
      </div>
      {visible < photos.length && (
        <div className="mt-10 text-center">
          <button className="btn btn-outline" onClick={() => setVisible((v) => v + (initial ?? 6))}>
            Mehr laden
          </button>
        </div>
      )}
      {idx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button className="absolute top-4 right-5 text-white text-4xl" aria-label="Schließen" onClick={close}>
            ×
          </button>
          <button
            className="absolute left-3 md:left-6 text-white text-5xl px-3"
            aria-label="Zurück"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <Image
            src={photos[idx].src}
            alt={`${alt} ${idx + 1}`}
            width={photos[idx].w}
            height={photos[idx].h}
            className="max-h-[90vh] w-auto max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-3 md:right-6 text-white text-5xl px-3"
            aria-label="Weiter"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
