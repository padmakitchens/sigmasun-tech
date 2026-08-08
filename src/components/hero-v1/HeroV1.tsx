"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { HERO_SLIDES, HERO_DWELL_MS, HERO_FADE_MS } from "./slides";

/**
 * Hero V1 — full-bleed dark carousel.
 *
 * Mechanic mirrors sphengineering.com: 4 slides, 7s dwell, 800ms crossfade.
 * The difference is the treatment stack. The reference gets legibility from
 * commissioned artwork with built-in negative space; we get it from a grade +
 * duotone + scrim built in code, because the source photos are shop-floor
 * snapshots. See globals.css (.hero-v1-*) for those layers.
 *
 * No carousel library — this repo hand-rolls its motion (see
 * TestimonialCarousel.tsx for the same autoplay + pagination pattern).
 */
export default function HeroV1() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const count = HERO_SLIDES.length;

  const go = useCallback(
    (next: number) => setActive(((next % count) + count) % count),
    [count],
  );

  // Respect the OS setting. The global prefers-reduced-motion block in
  // globals.css zeroes animation durations but cannot stop a JS timer, so the
  // autoplay has to opt out here explicitly.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Don't advance slides in a background tab. Deliberately the *only* pause:
  // the hero autoplays continuously, and users steer with the gauge instead.
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % count), HERO_DWELL_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, count, active]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Sigmasun capabilities"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(active + 1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(active - 1);
        }
      }}
      className="relative isolate flex min-h-[calc(100svh-5rem)] w-full flex-col justify-end overflow-hidden bg-[#020003] lg:h-[calc(100svh-104px)] lg:min-h-[600px] lg:max-h-[880px] lg:justify-center"
    >
      {/* ---- Layer 2: photography, cropped into the machine geometry ---- */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.image}
          aria-hidden={i !== active}
          className="absolute inset-0 -z-30 transition-opacity ease-[var(--ease-out)]"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: `${HERO_FADE_MS}ms`,
          }}
        >
          {/* Ken Burns is a transition, not an animation, so the <Image>
              element stays mounted and every slide is decoded up front —
              keying it would restart the load and flash black mid-crossfade. */}
          <div
            className="absolute inset-0 transition-transform ease-[var(--ease-out)]"
            style={{
              transform: i === active ? "scale(1)" : "scale(1.08)",
              transitionDuration: "9000ms",
            }}
          >
            <Image
              src={s.image}
              alt={i === active ? s.alt : ""}
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority={i === 0 ? "high" : "low"}
              style={{ objectPosition: s.focus }}
              className="hero-v1-grade object-cover"
            />
          </div>
        </div>
      ))}

      {/* ---- Layer 3: duotone, unifying four rooms into one palette ---- */}
      <div aria-hidden className="hero-v1-duotone pointer-events-none absolute inset-0 -z-20" />

      {/* ---- Layer 4: scrim. Guarantees contrast whatever is behind ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_top,#020003_0%,rgba(2,0,3,0.86)_38%,rgba(2,0,3,0.45)_100%)] md:bg-[linear-gradient(100deg,#020003_0%,rgba(2,0,3,0.92)_36%,rgba(2,0,3,0.42)_70%,rgba(2,0,3,0.78)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(to_top,rgba(2,0,3,0.9),transparent)]"
      />

      {/* ---- Layer 5: CAD overlay. Code-drawn, no assets ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="hv1-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            </pattern>
            <linearGradient id="hv1-gridfade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity="0" />
              <stop offset="0.4" stopColor="#fff" stopOpacity="0.25" />
              <stop offset="1" stopColor="#fff" stopOpacity="1" />
            </linearGradient>
            <mask id="hv1-gridmask">
              <rect width="100%" height="100%" fill="url(#hv1-gridfade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hv1-grid)" mask="url(#hv1-gridmask)" />
        </svg>

        {/* Slow gear outline, echoing the logo mark */}
        <svg
          viewBox="0 0 400 400"
          className="hero-v1-gear absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 text-white opacity-[0.05]"
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="currentColor"
            strokeWidth="34"
            strokeDasharray="30 32"
          />
          <circle cx="200" cy="200" r="112" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="52" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        {/* Registration crosshair + dimension ticks */}
        <svg
          viewBox="0 0 120 120"
          className="absolute right-10 top-10 h-8 w-8 text-[var(--color-primary)] opacity-40"
        >
          <path d="M60 0v120M0 60h120" stroke="currentColor" strokeWidth="4" />
          <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
        <svg
          viewBox="0 0 8 200"
          preserveAspectRatio="none"
          className="absolute right-10 top-1/2 h-48 w-2 -translate-y-1/2 text-[var(--color-primary)] opacity-30"
        >
          {Array.from({ length: 11 }, (_, i) => (
            <path
              key={i}
              d={`M${i % 5 === 0 ? 0 : 4} ${i * 20} H8`}
              stroke="currentColor"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* ---- Layer 6: grain ---- */}
      <div aria-hidden className="hero-v1-grain pointer-events-none absolute inset-0 -z-10" />

      {/* ---- Layer 7: content ---- */}
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-28 pt-24 sm:px-6 lg:px-10 lg:pb-24">
        {/* key remounts the block so .animate-fade-up replays on every slide */}
        <div key={active} className="max-w-2xl">
          <div
            className="animate-fade-up flex items-center gap-3 text-xs font-bold tabular-nums tracking-[0.2em] text-[var(--color-accent-gold)]"
            style={{ animationDelay: "0ms" }}
          >
            {String(active + 1).padStart(2, "0")}
            <span className="h-px w-6 bg-[var(--color-accent-gold)]/40" />
            {String(count).padStart(2, "0")}
          </div>

          <div
            className="animate-fade-up mt-6 flex items-center gap-3"
            style={{ animationDelay: "70ms" }}
          >
            <span className="h-[3px] w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">
              {slide.eyebrow}
            </span>
          </div>

          {/* fontFamily is set inline: body hard-codes Arial, and Tailwind's
              bare font-[…] is ambiguous between family and weight. */}
          <h1
            className="animate-fade-up mt-5 text-[clamp(2rem,5.4vw,4.25rem)] font-bold uppercase leading-[1.03] tracking-[-0.02em] text-white"
            style={{ animationDelay: "140ms", fontFamily: "var(--font-heading)" }}
          >
            {slide.headline}
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/70 lg:text-lg"
            style={{ animationDelay: "210ms" }}
          >
            {slide.subline}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "280ms" }}
          >
            <Link
              href={slide.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all duration-[var(--duration-fast)] hover:scale-[1.02] hover:bg-[var(--color-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {slide.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {slide.secondaryCta && (
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-[var(--duration-fast)] hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {slide.secondaryCta.label}
              </Link>
            )}
          </div>

          <ul
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-white/55"
            style={{ animationDelay: "350ms" }}
          >
            {slide.specs.map((spec, i) => (
              <li key={spec} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-white/30" />}
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- Pagination: a gauge, not a dot ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex w-full max-w-[1280px] items-center gap-3 px-4 pb-6 sm:px-6 lg:px-10 lg:pb-10">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
            aria-current={i === active ? "true" : undefined}
            className="group relative h-10 max-w-[120px] flex-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/20 transition-colors group-hover:bg-white/35">
              {i === active && (
                <span
                  key={active}
                  data-paused={paused || reduceMotion}
                  className="hero-progress-fill absolute inset-0 block bg-[var(--color-primary)]"
                  style={{ ["--hero-dwell" as string]: `${HERO_DWELL_MS}ms` }}
                />
              )}
              {i < active && <span className="absolute inset-0 block bg-white/50" />}
            </span>
          </button>
        ))}
      </div>

      {/* Screen-reader announcement of the current slide */}
      <div aria-live="polite" className="sr-only">
        {`Slide ${active + 1} of ${count}: ${slide.headline}`}
      </div>
    </section>
  );
}
