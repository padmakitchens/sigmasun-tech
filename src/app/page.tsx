import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cog, ScanEye, CircuitBoard, Zap, type LucideIcon } from "lucide-react";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";
import Marquee from "@/components/Marquee";
import StatsCounter, { type Stat } from "@/components/StatsCounter";
import IndustryLogosMarquee from "@/components/IndustryLogosMarquee";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HowItWorksStack from "@/components/HowItWorksStack";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

const clientLogosDir = path.join(process.cwd(), "public", "our-clients");
const clientLogos = fs
  .readdirSync(clientLogosDir)
  .filter((file) => file.endsWith(".webp") && !file.includes("(1)"))
  .sort((a, b) => {
    const numA = parseInt(a.match(/clients-(\d+)-/)?.[1] ?? "0", 10);
    const numB = parseInt(b.match(/clients-(\d+)-/)?.[1] ?? "0", 10);
    return numA - numB;
  });

const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Custom SPM Machines Built" },
  { value: 12, suffix: "+", label: "Years Industry Experience" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 100, suffix: "%", label: "Custom Engineering & In-House R&D" },
];

const DIVISIONS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Special Purpose Machines (SPM)",
    description:
      "Custom-engineered machines for testing, assembly, and process automation, built around your exact production requirement.",
    icon: Cog,
  },
  {
    title: "Mechatronics & Vision Inspection",
    description:
      "High-precision automated systems featuring integrated cameras and sensory feeds for real-time quality control.",
    icon: ScanEye,
  },
  {
    title: "Embedded Electronics & PCBs",
    description:
      "Customized circuit design, controller programming, and sensor integration for embedded product platforms.",
    icon: CircuitBoard,
  },
  {
    title: "HT/LT Electrical Panels",
    description:
      "Electrical distribution systems, transformer setups, and control consoles engineered to industrial standards.",
    icon: Zap,
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Client Consultation & Feasibility",
    description:
      "On-site process study and requirement gathering to scope what's actually buildable before a single drawing starts.",
  },
  {
    step: "02",
    title: "3D CAD & Controller Design",
    description:
      "Full mechanical CAD and electrical/controller architecture developed in-house, reviewed against your process constraints.",
  },
  {
    step: "03",
    title: "Precision Machining & PCB Fabrication",
    description:
      "In-house fabrication, machining, and PCB assembly, with every subsystem built and bench-tested before integration.",
  },
  {
    step: "04",
    title: "Rigorous Assembly & Testing",
    description:
      "Full-system assembly followed by functional, load, and safety testing against the original process requirement.",
  },
  {
    step: "05",
    title: "Turnkey Deployment & Support",
    description:
      "On-site commissioning, operator training, and ongoing service so the machine runs long after handover.",
  },
];

const clientLogoItems = clientLogos.map((file) => ({
  src: `/our-clients/${file}`,
  alt: "Client logo",
}));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <HeroBackgroundSlider />
        <div className="mx-auto flex min-h-[420px] max-w-[1280px] flex-col items-start justify-center gap-6 lg:min-h-[560px]">
          <span className="animate-fade-up rounded-full border border-[var(--color-primary)] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
            Pune, India &middot; Since 2012
          </span>
          <h1
            className="animate-fade-up max-w-4xl text-3xl font-bold uppercase leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-6xl"
            style={{ animationDelay: "0ms" }}
          >
            Engineering Excellence Through Custom Automation
          </h1>
          <p
            className="animate-fade-up max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] lg:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            Designing and manufacturing high-performance Special Purpose Machines,
            mechatronics systems, and turnkey industrial projects since 2012.
          </p>
          <Link
            href="/contact"
            style={{ animationDelay: "160ms" }}
            className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-medium uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all duration-[var(--duration-fast)] hover:scale-[1.02] hover:bg-[var(--color-primary-hover)]"
          >
            Talk to Our Engineers &rarr;
          </Link>
        </div>
      </section>

      {/* Industry logos */}
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Industries We Serve
          </h2>
          <div className="mt-8">
            <IndustryLogosMarquee />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative overflow-hidden bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        {/* Faint technical grid, fading toward the copy column */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <pattern id="whoweare-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M44 0H0V44" fill="none" stroke="rgba(2,0,3,0.04)" strokeWidth="1" />
              </pattern>
              <linearGradient id="whoweare-fade" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="1" />
                <stop offset="0.6" stopColor="#fff" stopOpacity="0.3" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <mask id="whoweare-mask">
                <rect width="100%" height="100%" fill="url(#whoweare-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#whoweare-grid)" mask="url(#whoweare-mask)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-16">
            {/* Photo panel */}
            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
                <Image
                  src="/Home/hero/mechanical-PCB_yv100_1.webp"
                  alt="Inside the Sigmasun manufacturing facility in Pune"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
              </div>

              {/* Corner accent mark */}
              <span className="absolute -left-4 -top-4 hidden h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--color-accent-gold)] bg-[var(--color-background)] text-gold shadow-[var(--shadow-md)] sm:flex">
                <Cog className="h-6 w-6" aria-hidden />
              </span>

              {/* Floating stat chip */}
              <div className="absolute -bottom-6 -right-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-4 shadow-[var(--shadow-lg)] sm:-right-6 sm:px-6">
                <span className="block text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
                  12+
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)] sm:text-xs">
                  Years Building
                </span>
              </div>
            </div>

            {/* Copy + divisions */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                Precision, Performance, Quality
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
                Who We Are
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
                Sigmasun Technologies builds special-purpose machines and turnkey automation
                systems for manufacturers who can&apos;t buy what they need off a shelf. Our
                team covers embedded systems, mechatronics, and vision inspection end-to-end
                &mdash; mechanical fabrication, electrical wiring, controller programming, and
                quality assurance under one roof from our Pune manufacturing facility.
              </p>
              <Link
                href="/about-us"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
              >
                Read Our Story
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>

              <ul className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                {DIVISIONS.map((division, i) => {
                  const Icon = division.icon;
                  return (
                    <li key={division.title} className="group flex items-start gap-4 py-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-colors duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/[0.06]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[11px] font-bold tabular-nums text-[var(--color-accent-gold)]/60"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-base font-semibold text-[var(--color-text)]">
                            {division.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          {division.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden
                        className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-[var(--color-primary)] opacity-0 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by leading brands */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Trusted by Leading Brands
          </h2>
          <div className="mt-10">
            <Marquee items={clientLogoItems} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            How It Works
          </h2>
          <div className="mt-12">
            <HowItWorksStack steps={HOW_IT_WORKS} />
          </div>
        </div>
      </section>

      {/* Stats counter - full-width bar, above Featured Projects */}
      <section className="w-full border-y border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <StatsCounter stats={STATS} />
        </div>
      </section>

      {/* Sliding projects showcase */}
      <section className="bg-[#020003] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-semibold text-white lg:text-3xl">Featured Projects</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-accent-gold)] px-6 py-3 text-xs font-medium uppercase tracking-wide text-[var(--color-accent-gold)] transition-all duration-[var(--duration-fast)] hover:bg-[var(--color-accent-gold)] hover:text-[#020003]"
            >
              View All Projects &rarr;
            </Link>
          </div>
          <div className="mt-10">
            <ProjectsCarousel projects={projects} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            What Our Clients Say
          </h2>
          <div className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-gold)] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold text-white lg:text-3xl">
            Have a Custom Automation Requirement? Talk to our engineering specialists in
            Pune.
          </h2>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-all duration-[var(--duration-fast)] hover:bg-white hover:text-[var(--color-primary)]"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
