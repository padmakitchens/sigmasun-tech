import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { INDUSTRY_DESCRIPTORS, HERO_STATS } from "./industryCards";

/**
 * Hero V3 — static, no carousel.
 *
 * The eight industries take the place photography would normally occupy. That
 * is the whole idea: a visitor lands and immediately sees both what Sigmasun
 * says it does (left) and every field it does it in (right), with each card a
 * direct route into that industry's page. Nothing rotates, so nothing is
 * hidden waiting for its turn.
 *
 * No client JavaScript — every state here is CSS, so this stays a server
 * component and ships zero JS for the hero.
 *
 * Palette is the site's own: white ground, --color-text for type, orange the
 * only accent, gold on the card indices.
 */
export default function HeroV3() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[var(--color-background)]">
      {/* Technical grid, fading out toward the right so the cards stay clean */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="hv3-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="rgba(2,0,3,0.045)" strokeWidth="1" />
            </pattern>
            <linearGradient id="hv3-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity="1" />
              <stop offset="0.55" stopColor="#fff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="hv3-mask">
              <rect width="100%" height="100%" fill="url(#hv3-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hv3-grid)" mask="url(#hv3-mask)" />
        </svg>
      </div>

      {/* Warm wash behind the card grid so the right side isn't flat white */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(ellipse_at_70%_40%,rgba(246,112,17,0.07),transparent_70%)] lg:block"
      />

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 lg:min-h-[calc(100svh-104px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:px-10 lg:py-12 xl:gap-20 xl:px-16">
        {/* ============================ Left: the pitch ============================ */}
        <div className="max-w-xl">
          <div
            className="animate-fade-up flex items-center gap-3"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-[3px] w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
              Pune, India &middot; Since 2012
            </span>
          </div>

          <h1
            className="animate-fade-up mt-5 text-[clamp(1.75rem,4.4vw,3.75rem)] font-bold uppercase leading-[1.04] tracking-[-0.02em] text-[var(--color-text)]"
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
            className="animate-fade-up mt-5 text-[15px] leading-relaxed text-[var(--color-text-muted)] lg:mt-6 lg:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            Special Purpose Machines, mechatronics and turnkey industrial systems &mdash;
            designed, machined and commissioned in-house. Every project starts with a process
            study, not a quote.
          </p>

          <div
            className="animate-fade-up mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-8"
            style={{ animationDelay: "210ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-cta)] lg:py-4 transition-all duration-[var(--duration-fast)] hover:scale-[1.02] hover:bg-[var(--color-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Talk to Our Engineers
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] lg:py-4 transition-colors duration-[var(--duration-fast)] hover:border-[var(--color-text)] hover:bg-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              See Our Work
            </Link>
          </div>

          {/* Proof strip */}
          <dl
            className="animate-fade-up mt-7 flex items-start gap-8 border-t border-[var(--color-border)] pt-5 sm:gap-12 lg:mt-10 lg:pt-6"
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

        {/* ======================= Right: the eight industries ======================= */}
        <div>
          <div
            className="animate-fade-up flex items-baseline justify-between gap-4"
            style={{ animationDelay: "140ms" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--color-primary)]" />
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Industries We Serve
              </h2>
            </div>
            <span
              className="text-xs font-bold tabular-nums tracking-[0.2em] text-[var(--color-accent-gold)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              08
            </span>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            {industries.map((industry, i) => (
              <li
                key={industry.slug}
                className="animate-fade-up"
                style={{ animationDelay: `${210 + i * 45}ms` }}
              >
                <Link
                  href={`/applications/${encodeURIComponent(industry.slug)}`}
                  aria-label={`${industry.title} — ${INDUSTRY_DESCRIPTORS[industry.slug]}`}
                  className="group relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:p-5"
                >
                  {/* Orange wash that rises on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[linear-gradient(to_top,rgba(246,112,17,0.08),transparent)] transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-y-100"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="relative h-10 w-10 shrink-0 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-110 sm:h-12 sm:w-12">
                      <Image
                        src={industry.icon}
                        alt=""
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </span>
                    <span
                      aria-hidden
                      className="text-[11px] font-bold tabular-nums text-[var(--color-accent-gold)]/50 transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-primary)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative">
                    <span className="block text-sm font-bold uppercase leading-tight tracking-wide text-[var(--color-text)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-primary)]">
                      {industry.title}
                    </span>
                    <span className="mt-1.5 flex items-end justify-between gap-2">
                      <span className="text-[11px] leading-snug text-[var(--color-text-muted)]">
                        {INDUSTRY_DESCRIPTORS[industry.slug]}
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="h-4 w-4 shrink-0 translate-x-[-4px] text-[var(--color-primary)] opacity-0 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
