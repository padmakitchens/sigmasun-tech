"use client";

import { useState } from "react";
import Lightbox, { type LightboxItem } from "./Lightbox";

export type VideoEntry = {
  src: string;
  title: string;
};

export default function VideoGrid({ videos }: { videos: VideoEntry[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items: LightboxItem[] = videos.map((v) => ({
    type: "video",
    src: v.src,
    title: v.title,
  }));

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <button
            key={video.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-[var(--color-border)] bg-black text-left shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-normal)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
          >
            <video
              src={video.src}
              muted
              preload="metadata"
              className="h-full w-full object-cover opacity-90 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-[var(--duration-fast)] group-hover:bg-black/40">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg text-[var(--color-primary)]">
                &#9658;
              </span>
            </div>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-sm font-medium text-white">
              {video.title}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        items={items}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
