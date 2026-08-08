"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { HERO_V2_SLIDES, HERO_DWELL_MS, HERO_FADE_MS } from "./slides";

/**
 * Hero V2 — light split layout.
 *
 * Same mechanic as V1 (4 slides, 7s dwell, 800ms crossfade, gauge pagination,
 * autoplay that never pauses under the cursor), but the composition is
 * inverted: copy sits on white at the left, photography lives in its own panel
 * at the right.
 *
 * The reason is not decorative. A dark hero can hide weak photography behind a
 * scrim; a light one cannot, and text laid over a bright photo loses contrast.
 * Splitting them means the type is always on a clean surface and the images are
 * shown honestly — so this version rewards good photography and punishes bad.
 *
 * Follows the site's own visual language: the giant ghost numeral echoes
 * HowItWorksStack, and the palette is straight from globals.css.
 */
export default function HeroV2() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const count = HERO_V2_SLIDES.length;
  const go = useCallback(
    (next: number) => setActive(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Background tabs only. Hovering deliberately does not pause.
  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (hidden || reduceMotion) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % count), HERO_DWELL_MS);
    return () => clearInterval(id);
  }, [hidden, reduceMotion, count, active]);

  const slide = HERO_V2_SLIDES[active];
  const stalled = hidden || reduceMotion;

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
      className="relative isolate w-full overflow-hidden bg-[var(--color-background)]"
    >
      {/* Faint technical grid behind the copy column */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-1/2 lg:block"
      >
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="hv2-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(2,0,3,0.05)" strokeWidth="1" />
            </pattern>
            <linearGradient id="hv2-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity="1" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="hv2-mask">
              <rect width="100%" height="100%" fill="url(#hv2-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hv2-grid)" mask="url(#hv2-mask)" />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-stretch lg:min-h-[calc(100svh-104px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        {/* ---------------- Copy column ---------------- */}
        <div className="relative order-2 flex flex-col justify-center px-4 py-14 sm:px-6 lg:order-1 lg:py-20 lg:pl-10 lg:pr-16 xl:pl-16">
          {/* Ghost numeral — same motif as HowItWorksStack */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 right-6 select-none text-[7rem] font-bold leading-none text-[var(--color-accent-gold)]/10 lg:right-10 lg:text-[14rem]"
          >
            {String(active + 1).padStart(2, "0")}
          </span>

          {/* key remounts so .animate-fade-up replays on every slide */}
          <div key={active} className="relative max-w-xl">
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
                {slide.eyebrow}
              </span>
            </div>

            <h1
              className="animate-fade-up mt-5 text-[clamp(1.9rem,3.6vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]"
              style={{ animationDelay: "140ms", fontFamily: "var(--font-heading)" }}
            >
              {slide.headline}
            </h1>

            <p
              className="animate-fade-up mt-6 text-base leading-relaxed text-[var(--color-text-muted)] lg:text-lg"
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all duration-[var(--duration-fast)] hover:scale-[1.02] hover:bg-[var(--color-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                {slide.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              {slide.secondaryCta && (
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] transition-colors duration-[var(--duration-fast)] hover:border-[var(--color-text)] hover:bg-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  {slide.secondaryCta.label}
                </Link>
              )}
            </div>

            <ul
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
              style={{ animationDelay: "350ms" }}
            >
              {slide.specs.map((spec, i) => (
                <li key={spec} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
                  )}
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- Gauge pagination ---------------- */}
          <div className="relative mt-12 flex items-center gap-3">
            {HERO_V2_SLIDES.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                aria-current={i === active ? "true" : undefined}
                className="group relative h-10 max-w-[120px] flex-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-[var(--color-border)] transition-colors group-hover:bg-[var(--color-text-muted)]">
                  {i === active && (
                    <span
                      key={active}
                      data-paused={stalled}
                      className="hero-progress-fill absolute inset-0 block bg-[var(--color-primary)]"
                      style={{ ["--hero-dwell" as string]: `${HERO_DWELL_MS}ms` }}
                    />
                  )}
                  {i < active && (
                    <span className="absolute inset-0 block bg-[var(--color-text-muted)]/60" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- Image panel ---------------- */}
        <div className="relative order-1 min-h-[300px] overflow-hidden bg-[var(--color-surface)] sm:min-h-[420px] lg:order-2 lg:min-h-0">
          {HERO_V2_SLIDES.map((s, i) => (
            <div
              key={s.image}
              aria-hidden={i !== active}
              className="absolute inset-0 transition-opacity ease-[var(--ease-out)]"
              style={{
                opacity: i === active ? 1 : 0,
                transitionDuration: `${HERO_FADE_MS}ms`,
              }}
            >
              <div
                className="absolute inset-0 transition-transform ease-[var(--ease-out)]"
                style={{
                  transform: i === active ? "scale(1)" : "scale(1.07)",
                  transitionDuration: "9000ms",
                }}
              >
                <Image
                  src={s.image}
                  alt={i === active ? s.alt : ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  loading="eager"
                  fetchPriority={i === 0 ? "high" : "low"}
                  style={{ objectPosition: s.focus }}
                  className="hero-v2-grade object-cover"
                />
              </div>
            </div>
          ))}

          {/* Feathered seam so the panel meets the white column softly */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-[linear-gradient(to_right,var(--color-background),transparent)] lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,var(--color-background),transparent)] lg:hidden"
          />

          {/* Registration crosshair, matching V1's CAD language */}
          <svg
            aria-hidden
            viewBox="0 0 120 120"
            className="absolute right-6 top-6 h-8 w-8 text-[var(--color-primary)] opacity-70 lg:right-10 lg:top-10"
          >
            <path d="M60 0v120M0 60h120" stroke="currentColor" strokeWidth="4" />
            <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>
      </div>

      <div aria-live="polite" className="sr-only">
        {`Slide ${active + 1} of ${count}: ${slide.headline}`}
      </div>
    </section>
  );
}
