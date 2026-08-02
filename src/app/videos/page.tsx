import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import VideoGrid from "@/components/VideoGrid";

export const metadata: Metadata = {
  title: "Videos | Sigmasun Technologies",
  description:
    "Watch Sigmasun Technologies special-purpose machines undergo operational testing before dispatch.",
};

const TITLE_OVERRIDES: Record<string, string> = {
  "robotic-welding-vid-1.mp4": "Robotic Welding System Demonstration",
  "Radiator-leak-test-machine-vid.mp4": "Radiator Leak Testing Operation",
  "robot-pick-1.mp4": "Solid State Laser Welding Machine — Demo 1",
  "robot-pick-2.mp4": "Solid State Laser Welding Machine — Demo 2",
  "robot-pick-3.mp4": "Solid State Laser Welding Machine — Demo 3",
  "membrane-casting-machine-1.mp4": "Membrane Casting Machine — Run 1",
  "membrane-casting-machine-vid-1.mp4": "Membrane Casting Machine — Run 2",
  "convery-machine-vision-1.mp4": "Conveyor Belt Vision System in Operation",
  "convery-weight-control.mp4": "Conveyor Weight Control System",
  "automatic-sort-covery-vid-1.mp4": "Automatic Sort Conveyor",
  "custom-pcb-dam-1.mp4": "Custom PCB Board for Dam Monitoring",
  "drone-defence.mp4": "Defense Drone Field Test",
  "cup-manufacturing-vid-1.mp4": "Cup Manufacturing Line",
};

function titleFromFilename(filename: string) {
  if (TITLE_OVERRIDES[filename]) return TITLE_OVERRIDES[filename];
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\bvid\b/gi, "")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const videosDir = path.join(process.cwd(), "public", "Videos");
const videoFiles = fs
  .readdirSync(videosDir)
  .filter((file) => file.endsWith(".mp4"))
  .sort();

const videos = videoFiles.map((file) => ({
  src: `/Videos/${file}`,
  title: titleFromFilename(file),
}));

export default function VideosPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
            Machines in Action
          </span>
          <h1 className="mt-3 text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
            Videos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
            This footage captures operational tests of our special-purpose machines prior to
            dispatch &mdash; the same commissioning checks every machine goes through before it
            leaves our Pune facility.
          </p>
        </div>

        <div className="relative mx-auto mt-12 h-0 w-full max-w-4xl overflow-hidden rounded-xl shadow-[var(--shadow-lg)] pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/dyGy4pnRcqI"
            title="Sigmasun Technologies machine operational test"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            More From the Floor
          </h2>
          <div className="mt-10">
            <VideoGrid videos={videos} />
          </div>
        </div>
      </section>
    </>
  );
}
