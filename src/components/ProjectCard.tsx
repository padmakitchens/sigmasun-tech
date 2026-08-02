import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--shadow-md)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[var(--color-surface)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-primary)] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--color-primary)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-[var(--color-text)]">
          {project.title}
        </h3>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-secondary)]">
          {project.client}
        </p>
        <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {project.description}
        </p>
      </div>
    </article>
  );
}
