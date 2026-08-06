"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ProjectTag } from "@/data/projects";

const FILTERS: ("Show All" | ProjectTag)[] = [
  "Show All",
  "Embedded Electronic",
  "Health Care",
  "Information Technology",
  "Automobile",
  "Laboratory",
  "Industrial Development",
  "Robotics",
  "Defence System",
];

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("Show All");

  const filtered = useMemo(
    () =>
      active === "Show All"
        ? projects
        : projects.filter((p) => p.tags.includes(active as ProjectTag)),
    [active]
  );

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
          Real-World Implementations
        </span>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
          A catalog of special-purpose machines we&apos;ve engineered, built, and
          commissioned for manufacturers across industries.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-colors duration-[var(--duration-fast)] ${
                active === filter
                  ? "bg-[var(--color-secondary)] text-white"
                  : "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
