"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lightbox, { type LightboxItem } from "./Lightbox";

export type MediaItem = {
  type: "image" | "video";
  src: string;
};

const AUTO_ADVANCE_MS = 4000;

function isVideo(src: string) {
  return /\.mp4$/i.test(src);
}

export default function MediaCarousel({
  media,
  title,
}: {
  media: string[];
  title: string;
}) {
  const items: MediaItem[] = media.map((src) => ({
    type: isVideo(src) ? "video" : "image",
    src,
  }));
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (items.length <= 1 || paused || lightboxIndex !== null) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length, paused, lightboxIndex]);

  const lightboxItems: LightboxItem[] = items.map((m) => ({ ...m, title }));

  if (items.length === 0) return null;

  return (
    <div
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[var(--color-surface)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        aria-label={`Open ${title} media viewer`}
        onClick={() => setLightboxIndex(active)}
        className="absolute inset-0 z-[1]"
      >
        {items[active].type === "video" ? (
          <video
            key={items[active].src}
            src={items[active].src}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
        ) : (
          <Image
            src={items[active].src}
            alt={title}
            fill
            className="object-cover transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-105"
          />
        )}
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous media"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i - 1 + items.length) % items.length);
            }}
            className="absolute left-2 top-1/2 z-[2] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-sm text-white opacity-0 transition-opacity duration-[var(--duration-fast)] group-hover:opacity-100"
          >
            &#8592;
          </button>
          <button
            type="button"
            aria-label="Next media"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i + 1) % items.length);
            }}
            className="absolute right-2 top-1/2 z-[2] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-sm text-white opacity-0 transition-opacity duration-[var(--duration-fast)] group-hover:opacity-100"
          >
            &#8594;
          </button>
          <div className="absolute bottom-2 left-1/2 z-[2] flex -translate-x-1/2 gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show media ${i + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-[var(--duration-fast)] ${
                  i === active ? "w-4 bg-[var(--color-accent-gold)]" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <Lightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => {
          setLightboxIndex(i);
          setActive(i);
        }}
      />
    </div>
  );
}
