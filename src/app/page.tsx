import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects, featuredProjectSlugs } from "@/data/projects";

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

const featuredProjects = projects.filter((p) => featuredProjectSlugs.includes(p.slug));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F5F5_100%)] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6">
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

      {/* About summary */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Precision, Performance, Quality
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
              A Pune-based engineering partner for hard problems
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
            Sigmasun Technologies builds special-purpose machines and turnkey automation
            systems for manufacturers who can&apos;t buy what they need off a shelf. Our team
            covers embedded systems, mechatronics, and vision inspection end-to-end &mdash;
            mechanical fabrication, electrical wiring, controller programming, and quality
            assurance under one roof. We also consult on import substitution, re-engineering
            imported systems locally to cut cost and lead time for Indian manufacturers.
          </p>
        </div>
      </section>

      {/* Business divisions */}
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Business Divisions
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIVISIONS.map((division) => (
              <div
                key={division.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-normal)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
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

      {/* Featured projects */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium uppercase tracking-wide text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
            >
              View All Projects &rarr;
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[var(--color-primary)] px-4 py-16 sm:px-6 lg:px-10">
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
