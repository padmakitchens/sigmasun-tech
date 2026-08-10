import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { INDUSTRY_DESCRIPTORS, HERO_STATS } from "@/components/hero-v3/industryCards";

/**
 * Hero V4 — static grid, same idea as V3, but the eight cards breathe.
 *
 * Per-card "personality": a base scale, a peak scale, a duration and a phase
 * delay. Some cards start slightly large and shrink, some start small and
 * grow — designed by hand rather than Math.random() so the motion is
 * consistent build to build and the amplitude stays controlled (a few
 * percent), never enough for neighbouring cards to collide. The animation
 * itself lives in globals.css (.hero-v4-bubble / @keyframes hero-v4-breathe)
 * and is pure CSS, so this stays a server component with zero client JS —
 * same as V3. prefers-reduced-motion is handled by the existing global rule
 * that collapses all animation durations to 0.01ms.
 *
 * Card hover feedback (icon scale, arrow slide-in, border/shadow colour) is
 * deliberately kept off the outer transform, which the breathing animation
 * owns — a competing hover transform would just get frozen mid-pulse.
 *
 * The oversized off-centre ghost numeral echoes V2's slide counter; here
 * it's static — "08", the industry count, not a slide index.
 */

const BUBBLE_VARIANTS: { base: number; peak: number; duration: string; delay: string }[] = [
  { base: 1.0, peak: 1.035, duration: "7.5s", delay: "0s" },
  { base: 0.97, peak: 1.02, duration: "9s", delay: "1.2s" },
  { base: 1.02, peak: 0.985, duration: "6.5s", delay: "0.4s" },
  { base: 0.985, peak: 1.03, duration: "8.2s", delay: "2.1s" },
  { base: 1.01, peak: 0.975, duration: "7s", delay: "0.8s" },
  { base: 0.975, peak: 1.015, duration: "9.4s", delay: "1.6s" },
  { base: 1.03, peak: 0.99, duration: "6.8s", delay: "0.3s" },
  { base: 0.99, peak: 1.025, duration: "8.7s", delay: "2.4s" },
];

export default function HeroV4() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[var(--color-background)]">
      {/* Thin grid, full-bleed and very faint — the only background texture. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="hv4-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="rgba(2,0,3,0.045)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hv4-grid)" />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(100svh-104px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:px-10 lg:py-12 xl:gap-20 xl:px-16">
        {/* ============================ Left: the pitch ============================ */}
        <div className="relative max-w-xl">
          {/* Off-centre ghost numeral — static count, not a slide index */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 right-0 select-none text-[8rem] font-bold leading-none text-[var(--color-accent-gold)]/10 lg:-top-10 lg:right-4 lg:text-[12rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            08
          </span>

          <div className="relative animate-fade-up flex items-center gap-3" style={{ animationDelay: "0ms" }}>
            <span className="h-[3px] w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
              Pune, India &middot; Since 2012
            </span>
          </div>

          <h1
            className="relative animate-fade-up mt-5 text-[clamp(1.9rem,4.4vw,3.75rem)] font-bold uppercase leading-[1.04] tracking-[-0.02em] text-[var(--color-text)]"
            style={{ animationDelay: "70ms", fontFamily: "var(--font-heading)" }}
          >
            We build the machine that{" "}
            <span className="relative whitespace-nowrap text-[var(--color-primary)]">
              doesn&rsquo;t exist
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[3px] bg-[var(--color-primary)]/25"
              />
            </span>{" "}
            yet
          </h1>

          <p
            className="relative animate-fade-up mt-5 text-[15px] leading-relaxed text-[var(--color-text-muted)] lg:mt-6 lg:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            Special Purpose Machines, mechatronics and turnkey industrial systems &mdash;
            designed, machined and commissioned in-house. Every project starts with a process
            study, not a quote.
          </p>

          <div
            className="relative animate-fade-up mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-8"
            style={{ animationDelay: "210ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all duration-[var(--duration-fast)] hover:scale-[1.02] hover:bg-[var(--color-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] lg:py-4"
            >
              Talk to Our Engineers
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] transition-colors duration-[var(--duration-fast)] hover:border-[var(--color-text)] hover:bg-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] lg:py-4"
            >
              See Our Work
            </Link>
          </div>

          <dl
            className="relative animate-fade-up mt-7 flex items-start gap-8 border-t border-[var(--color-border)] pt-5 sm:gap-12 lg:mt-10 lg:pt-6"
            style={{ animationDelay: "280ms" }}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span
                    className="block text-2xl font-bold tabular-nums text-[var(--color-primary)] lg:text-3xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ======================= Right: the breathing industry field ======================= */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--color-primary)]" />
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Industries We Serve
            </h2>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {industries.map((industry, i) => {
              const v = BUBBLE_VARIANTS[i % BUBBLE_VARIANTS.length];
              return (
                <li
                  key={industry.slug}
                  className="animate-fade-up"
                  style={{ animationDelay: `${210 + i * 45}ms` }}
                >
                  <Link
                    href={`/applications/${encodeURIComponent(industry.slug)}`}
                    aria-label={`${industry.title} — ${INDUSTRY_DESCRIPTORS[industry.slug]}`}
                    className="hero-v4-bubble group relative flex h-full flex-col justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-3 transition-colors duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:z-10 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:p-4"
                    style={
                      {
                        "--hv4-scale-base": v.base,
                        "--hv4-scale-peak": v.peak,
                        "--hv4-duration": v.duration,
                        "--hv4-delay": v.delay,
                      } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="relative h-8 w-8 shrink-0 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-110 sm:h-9 sm:w-9">
                        <Image src={industry.icon} alt="" fill unoptimized className="object-contain" />
                      </span>
                      <span
                        aria-hidden
                        className="text-[10px] font-bold tabular-nums text-[var(--color-accent-gold)]/50 transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <span className="block text-xs font-bold uppercase leading-tight tracking-wide text-[var(--color-text)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-primary)] sm:text-sm">
                        {industry.title}
                      </span>
                      <span className="mt-1 flex items-end justify-between gap-2">
                        <span className="text-[10px] leading-snug text-[var(--color-text-muted)] sm:text-[11px]">
                          {INDUSTRY_DESCRIPTORS[industry.slug]}
                        </span>
                        <ArrowUpRight
                          aria-hidden
                          className="h-3.5 w-3.5 shrink-0 translate-x-[-4px] text-[var(--color-primary)] opacity-0 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
