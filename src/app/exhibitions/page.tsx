"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EXHIBITION_IMAGES = [
  "/Exibition/exi1.jpg",
  "/Exibition/exi2.jpg",
  "/Exibition/exi3.png",
  "/Exibition/exi4.png",
  "/Exibition/exi5.png",
  "/Exibition/exi6.png",
  "/Exibition/exi7.png",
  "/Exibition/exi8.png",
  "/Exibition/exi9.png",
  "/Exibition/exi10.png",
  "/Exibition/photo_20_2026-07-09_19-15-13.jpg",
  "/Exibition/photo_73_2026-07-09_19-15-13.jpg",
];

export default function ExhibitionsPage() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
          On the Floor
        </span>
        <h1 className="mt-3 text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
          Exhibitions
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
          Moments from the trade shows and industry events where we&apos;ve shown our
          machines and met the manufacturers building alongside us.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXHIBITION_IMAGES.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-lg)]"
            >
              <Image
                src={src}
                alt="Sigmasun Technologies exhibition photo"
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            &times;
          </button>
          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active}
              alt="Sigmasun Technologies exhibition photo, full size"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
