"use client";

import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

const AUTO_ADVANCE_MS = 6000;

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [testimonials.length, paused]);

  if (testimonials.length === 0) return null;
  const current = testimonials[active];

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="text-5xl leading-none text-[var(--color-accent-gold)]">&ldquo;</span>
      <p key={active} className="animate-fade-up text-lg leading-relaxed text-[var(--color-text)] sm:text-xl">
        {current.quote}
      </p>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-sm font-semibold text-[var(--color-text)]">{current.name}</span>
        <span className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
          {current.location}
        </span>
      </div>
      {testimonials.length > 1 && (
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-[var(--duration-fast)] ${
                i === active ? "w-6 bg-[var(--color-accent-gold)]" : "w-2 bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
