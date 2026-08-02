import Image from "next/image";
import type { Metadata } from "next";
import SingleImageCarousel from "@/components/SingleImageCarousel";

export const metadata: Metadata = {
  title: "Manufacturing Facilities | Sigmasun Technologies",
  description:
    "Inside Sigmasun Technologies' Pune production floor: embedded electronics manufacturing and mechanical fabrication facilities.",
};

const FACILITIES = [
  {
    id: "embedded-electronics",
    title: "Embedded Electronics",
    description:
      "Our embedded electronics manufacturing facility is a production setup dedicated to designing and assembling circuit boards and embedded devices used in industrial systems. It handles PCB assembly, component mounting, testing, programming, and quality control to deliver reliable electronic modules for real-world applications.",
    images: [
      "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-1.jpg",
      "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-2.jpeg",
      "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-3.jpg",
      "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-4.jpg",
      "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-5.jpg",
    ],
  },
  {
    id: "mechanical-facility",
    title: "Mechanical Facility",
    description:
      "Our mechanical facility handles fabrication, CNC machining, and assembly tooling for every mechanical structure we build &mdash; from bench-top jigs to full production lines &mdash; alongside precision marking and traceability equipment.",
    images: [
      "/Manufacturing-Facility/mechanical-PCB_yv100_1.jpeg",
      "/Manufacturing-Facility/mechanical-table-top-laser-marking-machine-mark-and-tracebility-1.png",
    ],
  },
];

const CAPABILITIES = [
  {
    title: "CAD/CAM Engineering",
    description:
      "3D design and machining programs developed in-house before a single part is cut, so fabrication matches spec on the first pass.",
    image: "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-2.jpeg",
  },
  {
    title: "Mechanical Fabrication & Assembly",
    description:
      "Frame welding, precision machining, and mechanical assembly for structures ranging from bench-top jigs to full production lines.",
    image: "/Manufacturing-Facility/mechanical-PCB_yv100_1.jpeg",
  },
  {
    title: "Electrical Panel Wiring & Testing",
    description:
      "HT/LT panel wiring, control console assembly, and full electrical testing before any machine leaves the floor.",
    image: "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-4.jpg",
  },
  {
    title: "Software Programming & Debugging",
    description:
      "Controller and embedded firmware development, integration testing, and on-site debugging support through commissioning.",
    image: "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-5.jpg",
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
            Our Pune production floor is divided into two facilities &mdash; embedded
            electronics and mechanical fabrication &mdash; so the same team that designs your
            machine builds and tests it before dispatch.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          {FACILITIES.map((facility) => (
            <div key={facility.id} id={facility.id} className="scroll-mt-28">
              <SingleImageCarousel images={facility.images} alt={facility.title} />
              <h2 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
                {facility.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            R&amp;D Capabilities
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="hover-lift overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--shadow-sm)]"
              >
                <div className="group relative aspect-video overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
