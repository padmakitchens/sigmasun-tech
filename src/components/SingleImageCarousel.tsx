"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATE_MS = 3500;

export default function SingleImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [images.length, paused]);

  if (images.length === 0) return null;

  return (
    <div
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--color-border)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          loading={i === 0 ? "eager" : "lazy"}
          className={`object-cover transition-opacity duration-700 ease-[var(--ease-out)] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity duration-[var(--duration-fast)] group-hover:opacity-100">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-[var(--duration-fast)] ${
                i === active ? "w-4 bg-[var(--color-accent-gold)]" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
