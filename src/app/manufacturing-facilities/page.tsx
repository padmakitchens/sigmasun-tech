import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Facilities | Sigmasun Technologies",
  description:
    "Inside Sigmasun Technologies' Pune production floor: mechanical assembly, wire harnesses, and electronics calibration.",
};

const CAPABILITIES = [
  {
    title: "CAD/CAM Engineering",
    description:
      "3D design and machining programs developed in-house before a single part is cut, so fabrication matches spec on the first pass.",
  },
  {
    title: "Mechanical Fabrication & Assembly",
    description:
      "Frame welding, precision machining, and mechanical assembly for structures ranging from bench-top jigs to full production lines.",
  },
  {
    title: "Electrical Panel Wiring & Testing",
    description:
      "HT/LT panel wiring, control console assembly, and full electrical testing before any machine leaves the floor.",
  },
  {
    title: "Software Programming & Debugging",
    description:
      "Controller and embedded firmware development, integration testing, and on-site debugging support through commissioning.",
  },
];

export default function ManufacturingFacilitiesPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
            Inside the Plant
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
            Manufacturing Facilities
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
            Our Pune production floor houses mechanical assembly, wire harness fabrication,
            and electronics calibration under one roof &mdash; the same team that designs
            your machine builds and tests it before dispatch.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-[var(--color-border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Manufacturing%20Facility/PCB_yv100_1.jpeg"
                alt="SMT PCB Pick-and-Place line"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-muted)]">
              SMT PCB Pick-and-Place line
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-[var(--color-border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Manufacturing%20Facility/manufacturing_facility-embedded_electronics.jpeg"
                alt="Electronics Assembly & Calibration Unit"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-muted)]">
              Electronics Assembly &amp; Calibration Unit
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Capabilities
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-normal)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
              >
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
