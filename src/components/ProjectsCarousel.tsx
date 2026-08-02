import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
      <div className="marquee-track-cards flex w-max items-stretch gap-6">
        {[...projects, ...projects].map((project, i) => (
          <div key={`${project.slug}-${i}`} className="flex w-[280px] shrink-0 sm:w-[340px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
