"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { type LightboxItem } from "@/components/Lightbox";

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

const lightboxItems: LightboxItem[] = EXHIBITION_IMAGES.map((src) => ({
  type: "image",
  src,
  title: "Sigmasun Technologies exhibition photo",
}));

export default function ExhibitionsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
          {EXHIBITION_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
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

      <Lightbox
        items={lightboxItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
