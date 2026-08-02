import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import Marquee from "@/components/Marquee";

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

const TIMELINE = [
  {
    year: "2012",
    title: "A workshop, and a first machine",
    description:
      "Sigmasun Technologies starts in Pune, taking on custom mechanical builds that off-the-shelf equipment couldn't solve.",
  },
  {
    year: "2015 – 2018",
    title: "Embedded electronics brought in-house",
    description:
      "PCB assembly, controller programming, and sensor integration join mechanical fabrication under one roof, ending our reliance on outside electronics vendors.",
  },
  {
    year: "2019 – 2023",
    title: "Turnkey automation at scale",
    description:
      "Full-line automation projects for automotive, healthcare, defense, and food & pharma clients, delivered design-to-commissioning by a single accountable team.",
  },
  {
    year: "Today",
    title: "12+ years, 50+ enterprise clients",
    description:
      "A Pune manufacturing facility spanning embedded electronics and mechanical fabrication, still run by the same engineering-first philosophy we started with.",
  },
];

const STRENGTHS = [
  {
    title: "End-to-end under one roof",
    description:
      "Mechanical design, electrical wiring, embedded programming, and testing all happen inside our own facility, not across a chain of subcontractors.",
  },
  {
    title: "Import substitution, done properly",
    description:
      "We reverse-engineer imported systems into locally built, locally serviced equivalents that match or beat the original spec.",
  },
  {
    title: "Engineering-first, not a job shop",
    description:
      "Every project starts with a process study, not a quote. We build what the floor actually needs, not what's easiest to fabricate.",
  },
  {
    title: "Trusted on serious floors",
    description:
      "Our machines run in production at Cummins, Hindustan Unilever, and Thermax facilities, alongside defense and healthcare deployments.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
            About Sigmasun Technologies
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
            Built by engineers who fabricate, wire, program, and test under one roof
          </h1>
          <div className="mt-8 grid max-w-4xl gap-5 text-base leading-relaxed text-[var(--color-text-muted)]">
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
              programming, and quality assurance are all handled in-house. That means fewer
              handoffs, faster iteration, and a machine that actually matches the
              specification you started with.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story timeline */}
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Our Story
          </h2>
          <div className="relative mt-12 flex flex-col gap-10 border-l-2 border-[var(--color-accent-gold)]/30 pl-8 sm:pl-10">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-[2.55rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-accent-gold)] shadow-[var(--shadow-gold)] sm:-left-[2.95rem]" />
                <span className="text-xs font-bold uppercase tracking-wide text-gold">
                  {item.year}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Who We Are
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="hover-lift rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-sm)]"
              >
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border-t-4 border-[var(--color-accent-gold)] bg-[var(--color-background)] p-8 shadow-[var(--shadow-md)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-gold)]/10 text-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-semibold text-[var(--color-text)]">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Deliver custom automation and special-purpose machines that meet exact
              production requirements &mdash; engineered, built, and commissioned by one
              accountable team.
            </p>
          </div>
          <div className="rounded-xl border-t-4 border-[var(--color-accent-gold)] bg-[var(--color-background)] p-8 shadow-[var(--shadow-md)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-gold)]/10 text-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10z" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-semibold text-[var(--color-text)]">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Become the go-to Indian engineering partner for import substitution &mdash;
              reducing manufacturers&apos; dependency on imported systems through local
              re-engineering and support.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting & Import Substitution */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Consulting & Import Substitution
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)]">
            Many of our clients arrive with an imported machine that&apos;s expensive to
            service, slow to get spares for, or simply overbuilt for their process. We
            re-engineer these systems locally &mdash; matching or improving performance while
            cutting landed cost, lead time, and dependency on overseas vendors. It&apos;s
            consulting grounded in the same in-house mechanical, electrical, and embedded
            capability we use to build new machines from scratch.
          </p>
        </div>
      </section>

      {/* Trusted Industries marquee */}
      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Trusted Industries
          </h2>
          <div className="mt-10">
            <Marquee items={clientLogos} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-gold)] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold text-white lg:text-3xl">
            First-of-its-kind is our repeat business. Tell us what your floor needs.
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
