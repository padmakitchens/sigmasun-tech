import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  RefreshCw,
  ClipboardCheck,
  ShieldCheck,
  Compass,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import Marquee from "@/components/Marquee";
import IndustryLogosMarquee from "@/components/IndustryLogosMarquee";

export const metadata: Metadata = {
  title: "About Us | Sigmasun Technologies",
  description:
    "Sigmasun Technologies is a Pune-based designer and manufacturer of special-purpose machines, mechatronics systems, and turnkey industrial automation.",
};

const clientLogosDir = path.join(process.cwd(), "public", "our-clients");
const clientLogos = fs
  .readdirSync(clientLogosDir)
  .filter((file) => file.endsWith(".webp") && !file.includes("(1)"))
  .sort((a, b) => {
    const numA = parseInt(a.match(/clients-(\d+)-/)?.[1] ?? "0", 10);
    const numB = parseInt(b.match(/clients-(\d+)-/)?.[1] ?? "0", 10);
    return numA - numB;
  })
  .map((file) => ({ src: `/our-clients/${file}`, alt: "Client logo" }));

const HEADER_STATS: { value: string; label: string }[] = [
  { value: "100+", label: "Machines Built" },
  { value: "12+", label: "Years Industry Experience" },
  { value: "50+", label: "Enterprise Clients" },
];

const TIMELINE = [
  {
    ghost: "01",
    year: "2012",
    title: "A workshop, and a first machine",
    description:
      "Sigmasun Technologies starts in Pune, taking on custom mechanical builds that off-the-shelf equipment couldn't solve.",
  },
  {
    ghost: "02",
    year: "2015 – 2018",
    title: "Embedded electronics brought in-house",
    description:
      "PCB assembly, controller programming, and sensor integration join mechanical fabrication under one roof, ending our reliance on outside electronics vendors.",
  },
  {
    ghost: "03",
    year: "2019 – 2023",
    title: "Turnkey automation at scale",
    description:
      "Full-line automation projects for automotive, healthcare, defense, and food & pharma clients, delivered design-to-commissioning by a single accountable team.",
  },
  {
    ghost: "04",
    year: "Today",
    title: "12+ years, 50+ enterprise clients",
    description:
      "A Pune manufacturing facility spanning embedded electronics and mechanical fabrication, still run by the same engineering-first philosophy we started with.",
  },
];

const STRENGTHS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "End-to-end under one roof",
    description:
      "Mechanical design, electrical wiring, embedded programming, and testing all happen inside our own facility, not across a chain of subcontractors.",
    icon: Building2,
  },
  {
    title: "Import substitution, done properly",
    description:
      "We reverse-engineer imported systems into locally built, locally serviced equivalents that match or beat the original spec.",
    icon: RefreshCw,
  },
  {
    title: "Engineering-first, not a job shop",
    description:
      "Every project starts with a process study, not a quote. We build what the floor actually needs.",
    icon: ClipboardCheck,
  },
  {
    title: "Trusted on serious floors",
    description:
      "Our machines run in production at Cummins, Hindustan Unilever, and Thermax facilities, alongside defense and healthcare deployments — where a breakdown isn't an option.",
    icon: ShieldCheck,
  },
];

const TRUSTED_CLIENTS = ["Cummins", "Hindustan Unilever", "Thermax"];

const IMPORT_STEPS = [
  {
    title: "Assess",
    description:
      "We study the imported machine on-site — process, spec, and total cost of ownership.",
  },
  {
    title: "Re-Engineer",
    description:
      "Mechanical, electrical, and embedded systems are rebuilt locally to match or beat the original spec.",
  },
  {
    title: "Deploy & Support",
    description:
      "Commissioned on your floor with local spares and service — no more waiting on an overseas vendor.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <pattern id="about-header-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M44 0H0V44" fill="none" stroke="rgba(2,0,3,0.04)" strokeWidth="1" />
              </pattern>
              <linearGradient id="about-header-fade" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="1" />
                <stop offset="0.6" stopColor="#fff" stopOpacity="0.3" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <mask id="about-header-mask">
                <rect width="100%" height="100%" fill="url(#about-header-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-header-grid)" mask="url(#about-header-mask)" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              About Sigmasun Technologies
            </span>
            <h1
              className="mt-3 max-w-2xl text-3xl font-bold uppercase leading-[1.08] tracking-tight text-[var(--color-text)] lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built by engineers who fabricate, wire, program, and test under one roof
            </h1>
            <div className="mt-7 grid max-w-2xl gap-5 text-base leading-relaxed text-[var(--color-text-muted)]">
              <p>
                Sigmasun Technologies is a Pune-based designer, manufacturer, and supplier of
                customized special-purpose machines and turnkey industrial projects. Since 2012,
                we&apos;ve worked with manufacturers who need equipment that doesn&apos;t exist
                off a shelf &mdash; automotive component testing rigs, textile machinery, medical
                devices, and defense hardware among them.
              </p>
              <p>
                What sets us apart is that a single team carries a project from concept to
                commissioning: mechanical fabrication, electrical wiring, embedded controller
                programming, and quality assurance are all handled in-house.
              </p>
            </div>

            <dl className="mt-10 flex flex-wrap items-start gap-8 border-t border-[var(--color-border)] pt-6 sm:gap-12">
              {HEADER_STATS.map((stat) => (
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

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
              <Image
                src="/Home/about/manufacturing-facility-embedded-electronics-5.webp"
                alt="Reflow oven on the Sigmasun embedded electronics manufacturing floor"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                style={{ objectPosition: "55% 45%" }}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
            </div>
            <span className="absolute -left-4 -top-4 hidden h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--color-accent-gold)] bg-[var(--color-background)] text-gold shadow-[var(--shadow-md)] sm:flex">
              <Building2 className="h-6 w-6" aria-hidden />
            </span>
            <div className="absolute -bottom-6 -right-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-4 shadow-[var(--shadow-lg)] sm:-right-6 sm:px-6">
              <span className="block text-sm font-bold uppercase tracking-wide text-[var(--color-text)]">
                Pune, India
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Since 2012
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — zig-zag timeline */}
      <section className="relative overflow-hidden bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--color-primary)]" />
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Our Story
            </h2>
          </div>
          <h3 className="mt-3 max-w-xl text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            From a Pune workshop to a 50-client manufacturing floor
          </h3>

          <div className="relative mt-16">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--color-border)] lg:block"
            />
            <ol className="flex flex-col gap-10 lg:gap-4">
              {TIMELINE.map((item, i) => {
                const alignRight = i % 2 === 1;
                return (
                  <li key={item.title} className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-8">
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-surface)] lg:block"
                    />
                    <div className={alignRight ? "lg:col-start-2" : "lg:col-start-1"}>
                      <div
                        className={`hover-lift relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-sm)] ${
                          alignRight ? "lg:ml-10" : "lg:mr-10"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`pointer-events-none absolute -top-3 select-none text-[4.5rem] font-bold leading-none text-[var(--color-accent-gold)]/10 lg:text-[5.5rem] ${
                            alignRight ? "left-3" : "right-3"
                          }`}
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.ghost}
                        </span>
                        <span className="relative text-xs font-bold uppercase tracking-wide text-gold">
                          {item.year}
                        </span>
                        <h4 className="relative mt-1 text-lg font-semibold text-[var(--color-text)]">
                          {item.title}
                        </h4>
                        <p className="relative mt-2 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Why Sigmasun — bento strengths grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--color-primary)]" />
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Why Sigmasun
            </h2>
          </div>
          <h3 className="mt-3 max-w-xl text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            What actually makes us different
          </h3>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STRENGTHS.slice(0, 3).map((strength, i) => {
              const Icon = strength.icon;
              const featured = i === 0;
              return (
                <div
                  key={strength.title}
                  className={`hover-lift rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-7 shadow-[var(--shadow-sm)] ${
                    featured ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span
                      className="text-xs font-bold tabular-nums text-[var(--color-accent-gold)]/50"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4
                    className={`mt-5 font-semibold text-[var(--color-text)] ${featured ? "text-xl lg:text-2xl" : "text-base"}`}
                  >
                    {strength.title}
                  </h4>
                  <p
                    className={`mt-3 leading-relaxed text-[var(--color-text-muted)] ${featured ? "max-w-md text-base" : "text-sm"}`}
                  >
                    {strength.description}
                  </p>
                </div>
              );
            })}

            {/* Full-width trust banner, closing the grid */}
            {(() => {
              const banner = STRENGTHS[3];
              const Icon = banner.icon;
              return (
                <div className="hover-lift flex flex-col gap-6 rounded-2xl border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/[0.04] p-7 shadow-[var(--shadow-sm)] sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-4">
                  <div className="flex items-start gap-5 sm:items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-[var(--color-text)]">
                        {banner.title}
                      </h4>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {banner.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                    {TRUSTED_CLIENTS.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)]"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Mission & Vision — contrast split */}
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] md:grid-cols-2">
          <div className="relative overflow-hidden bg-[#020003] p-10 lg:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]">
              <svg className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <pattern id="mission-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                    <path d="M36 0H0V36" fill="none" stroke="#fff" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mission-grid)" />
              </svg>
            </div>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
              <Compass className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="relative mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              Our Mission
            </h2>
            <h3
              className="relative mt-4 text-xl font-semibold leading-snug text-white lg:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Deliver custom automation and special-purpose machines that meet exact production
              requirements.
            </h3>
            <p className="relative mt-4 text-sm leading-relaxed text-white/65">
              Engineered, built, and commissioned by one accountable team &mdash; from process
              study to floor deployment.
            </p>
          </div>

          <div className="relative border-t border-[var(--color-border)] bg-[var(--color-background)] p-10 md:border-l md:border-t-0 lg:p-14">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-gold)]/10 text-gold">
              <Telescope className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Our Vision
            </h2>
            <h3
              className="mt-4 text-xl font-semibold leading-snug text-[var(--color-text)] lg:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Become the go-to Indian engineering partner for import substitution.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Reducing manufacturers&apos; dependency on imported systems through local
              re-engineering and support.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting & Import Substitution — feature spotlight */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--color-primary)]" />
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Consulting &amp; Import Substitution
              </h2>
            </div>
            <h3 className="mt-3 max-w-xl text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
              Stop waiting on an imported spare
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
              Many of our clients arrive with an imported machine that&apos;s expensive to
              service, slow to get spares for, or simply overbuilt for their process. We
              re-engineer these systems locally &mdash; matching or improving performance while
              cutting landed cost, lead time, and dependency on overseas vendors.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all duration-[var(--duration-fast)] hover:scale-[1.02] hover:bg-[var(--color-primary-hover)]"
            >
              Start a Feasibility Study
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ol className="relative flex flex-col gap-8 border-l-2 border-[var(--color-border)] pl-8">
            {IMPORT_STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.6rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-white shadow-[var(--shadow-cta)]">
                  {i + 1}
                </span>
                <h4 className="text-base font-semibold text-[var(--color-text)]">{step.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Industries We Serve
          </h2>
          <div className="mt-10">
            <IndustryLogosMarquee />
          </div>
        </div>
      </section>

      {/* Trusted by Leading Brands */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Trusted by Leading Brands
          </h2>
          <div className="mt-10">
            <Marquee items={clientLogos} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-gold)] px-4 py-16 sm:px-6 lg:px-10">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold text-white lg:text-3xl">
            First-of-its-kind is our repeat business. Tell us what your floor needs.
          </h2>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-all duration-[var(--duration-fast)] hover:bg-white hover:text-[var(--color-primary)]"
            >
              Contact Us &rarr;
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/90 underline underline-offset-4 transition-colors hover:text-white"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
