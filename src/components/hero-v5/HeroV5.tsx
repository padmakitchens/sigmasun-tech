"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_V5_SLIDES, HERO_DWELL_MS, HERO_FADE_MS } from "./slides";

/**
 * Hero V5 — full-bleed video carousel.
 *
 * Same mechanic as hero-v1 (4 slides, 7s dwell, 800ms crossfade, gauge
 * pagination, autoplay that never pauses under the cursor — see feedback
 * on hero-v1/HeroV1.tsx) but the background is looping video instead of
 * graded photography.
 *
 * All four clips stay mounted with `preload="auto"` so a switch never has
 * to wait for a network fetch. Only the active (and, briefly, the outgoing)
 * clip actually plays — the rest sit paused — so at most two videos are
 * decoding at once during a crossfade, not four continuously. Playing both
 * for the transition window (rather than hard-cutting) is what makes the
 * 800ms fade read as a blend instead of a jump cut.
 *
 * The clips are centre-framed, so — unlike V1's side-lit photos — copy sits
 * centred in the bottom third over a vignette + bottom scrim, leaving the
 * middle of the frame, where each clip's subject sits, the clearest part.
 */
export default function HeroV5() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const count = HERO_V5_SLIDES.length;
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

  // Advance slides.
  useEffect(() => {
    if (hidden || reduceMotion) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % count), HERO_DWELL_MS);
    return () => clearInterval(id);
  }, [hidden, reduceMotion, count, active]);

  // Play the active clip (paused instead, under reduced motion or a hidden
  // tab); pause every other clip once the crossfade has finished so at most
  // two clips are ever decoding at once.
  useEffect(() => {
    const activeVideo = videoRefs.current[active];
    if (activeVideo) {
      if (hidden || reduceMotion) activeVideo.pause();
      else void activeVideo.play().catch(() => {});
    }
    const settle = setTimeout(() => {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== active) v.pause();
      });
    }, HERO_FADE_MS + 100);
    return () => clearTimeout(settle);
  }, [active, hidden, reduceMotion]);

  const slide = HERO_V5_SLIDES[active];
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
      className="relative isolate flex min-h-[calc(100svh-5rem)] w-full items-end justify-center overflow-hidden bg-[#020003] lg:min-h-[calc(100svh-104px)]"
    >
      {HERO_V5_SLIDES.map((s, i) => (
        <video
          key={s.video}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          autoPlay={i === 0}
          className="absolute inset-0 -z-20 h-full w-full object-cover transition-opacity ease-[var(--ease-out)]"
          style={{
            objectPosition: s.focus,
            opacity: i === active ? 1 : 0,
            transitionDuration: `${HERO_FADE_MS}ms`,
          }}
        >
          <source src={s.video} type="video/mp4" />
        </video>
      ))}

      {/* Vignette: darkens the edges, leaves the centre — where each clip's
          own subject sits — the clearest part of the frame. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(2,0,3,0.6)_100%)]"
      />
      {/* Bottom scrim: the only part of the frame the copy actually needs. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[linear-gradient(to_top,#020003_0%,rgba(2,0,3,0.82)_40%,transparent_100%)]"
      />

      <div className="relative w-full max-w-[1280px] px-4 pb-14 pt-24 text-center sm:px-6 lg:px-10 lg:pb-16">
        {/* key remounts the block so .animate-fade-up replays on every slide */}
        <div key={active} className="mx-auto flex max-w-2xl flex-col items-center">
          <div
            className="animate-fade-up flex items-center gap-3 text-xs font-bold tabular-nums tracking-[0.2em] text-[var(--color-accent-gold)]"
            style={{ animationDelay: "0ms" }}
          >
            {String(active + 1).padStart(2, "0")}
            <span className="h-px w-6 bg-[var(--color-accent-gold)]/40" />
            {String(count).padStart(2, "0")}
          </div>

          <span
            className="animate-fade-up mt-4 rounded-full border border-white/30 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white/85"
            style={{ animationDelay: "70ms" }}
          >
            {slide.eyebrow}
          </span>

          <h1
            className="animate-fade-up mt-6 text-[clamp(1.9rem,5vw,4rem)] font-bold uppercase leading-[1.05] tracking-[-0.02em] text-white"
            style={{ animationDelay: "140ms", fontFamily: "var(--font-heading)" }}
          >
            {slide.headline}
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-white/75 lg:text-lg"
            style={{ animationDelay: "210ms" }}
          >
            {slide.subline}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
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
        </div>

        {/* Pagination: a gauge, not a dot — matches V1/V2/V3 */}
        <div className="relative mx-auto mt-9 flex max-w-md items-center gap-3">
          {HERO_V5_SLIDES.map((s, i) => (
            <button
              key={s.video}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
              aria-current={i === active ? "true" : undefined}
              className="group relative h-8 max-w-[96px] flex-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/20 transition-colors group-hover:bg-white/35">
                {i === active && (
                  <span
                    key={active}
                    data-paused={stalled}
                    className="hero-progress-fill absolute inset-0 block bg-[var(--color-primary)]"
                    style={{ ["--hero-dwell" as string]: `${HERO_DWELL_MS}ms` }}
                  />
                )}
                {i < active && <span className="absolute inset-0 block bg-white/50" />}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div aria-live="polite" className="sr-only">
        {`Slide ${active + 1} of ${count}: ${slide.headline}`}
      </div>
    </section>
  );
}
