"use client";

import Image from "next/image";
import { useState } from "react";
import CaseStudyViewer, { type CaseStudyItem } from "@/components/CaseStudyViewer";

const CASE_STUDIES: CaseStudyItem[] = [
  {
    type: "pdf",
    title: "Defence Systems Case Study",
    src: "/Case%20study/defence_case_study.pdf",
  },
  {
    type: "pdf",
    title: "Dam Instrumentation Case Study",
    src: "/Case%20study/Dam_presentation_case_study.pdf",
  },
  {
    type: "pdf",
    title: "Industry 4.0 Case Study",
    src: "/Case%20study/INDUSTRY%204.pdf",
  },
  {
    type: "pdf",
    title: "Oxus Generator Concentration Case Study",
    src: "/Case%20study/oxus_generator_concentration_case_study.pdf",
  },
  {
    type: "pdf",
    title: "Sigmasun Company Presentation",
    src: "/Case%20study/sigmasun_presentation.pdf",
  },
  {
    type: "image",
    title: "Oxus System Assembly",
    src: "/Case%20study/photo_80_2026-07-09_19-15-13.jpg",
  },
  {
    type: "image",
    title: "Oxus System Internals",
    src: "/Case%20study/photo_81_2026-07-09_19-15-13.jpg",
  },
];

export default function CaseStudyPage() {
  const [active, setActive] = useState<CaseStudyItem | null>(null);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
          In-Depth Look
        </span>
        <h1 className="mt-3 text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
          Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
          Detailed presentations from a selection of our engineering programs, viewable
          in-page only.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.title}
              className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-normal)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="relative aspect-video bg-[var(--color-surface)]">
                {cs.type === "image" ? (
                  <Image src={cs.src} alt={cs.title} fill className="object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-[var(--color-primary)]">
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                      <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-muted)]">
                      PDF Presentation
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h2 className="text-base font-semibold text-[var(--color-text)]">
                  {cs.title}
                </h2>
                <button
                  type="button"
                  onClick={() => setActive(cs)}
                  className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-white transition-all hover:bg-[var(--color-primary-hover)]"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CaseStudyViewer item={active} onClose={() => setActive(null)} />
    </section>
  );
}
