import fs from "fs";
import path from "path";
import Link from "next/link";
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

const DIVISIONS = [
  {
    title: "Special Purpose Machines (SPM)",
    description:
      "Custom-engineered machines for testing, assembly, and process automation, built around your exact production requirement.",
  },
  {
    title: "Mechatronics & Vision Inspection",
    description:
      "High-precision automated systems featuring integrated cameras and sensory feeds for real-time quality control.",
  },
  {
    title: "Embedded Electronics & PCBs",
    description:
      "Customized circuit design, controller programming, and sensor integration for embedded product platforms.",
  },
  {
    title: "HT/LT Electrical Panels",
    description:
      "Electrical distribution systems, transformer setups, and control consoles engineered to industrial standards.",
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
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-gold">
                Precision, Performance, Quality
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
                Who We Are
              </h2>
            </div>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
              Sigmasun Technologies builds special-purpose machines and turnkey automation
              systems for manufacturers who can&apos;t buy what they need off a shelf. Our team
              covers embedded systems, mechatronics, and vision inspection end-to-end &mdash;
              mechanical fabrication, electrical wiring, controller programming, and quality
              assurance under one roof from our Pune manufacturing facility. We also consult on
              import substitution, re-engineering imported systems locally to cut cost and lead
              time for Indian manufacturers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIVISIONS.map((division) => (
              <div
                key={division.title}
                className="hover-lift rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-sm)] border-t-2 border-t-[var(--color-accent-gold)]"
              >
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {division.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {division.description}
                </p>
              </div>
            ))}
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
