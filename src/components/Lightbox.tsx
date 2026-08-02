"use client";

import Image from "next/image";
import { useEffect } from "react";

export type LightboxItem = {
  type: "image" | "video";
  src: string;
  title?: string;
};

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const open = index !== null;
  const item = open ? items[index] : null;
  const hasMultiple = items.length > 1;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMultiple) {
        onNavigate((index! + 1) % items.length);
      }
      if (e.key === "ArrowLeft" && hasMultiple) {
        onNavigate((index! - 1 + items.length) % items.length);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, items.length, hasMultiple, onClose, onNavigate]);

  if (!open || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
      >
        &times;
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! - 1 + items.length) % items.length);
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:left-6"
          >
            &#8592;
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! + 1) % items.length);
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:right-6"
          >
            &#8594;
          </button>
        </>
      )}

      <div
        className="flex max-h-[90vh] w-full max-w-4xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {item.title && (
          <h2 className="text-center text-sm font-medium uppercase tracking-wide text-white">
            {item.title}
          </h2>
        )}

        {item.type === "image" ? (
          <div className="relative h-[75vh] w-full select-none" onContextMenu={(e) => e.preventDefault()}>
            <Image
              src={item.src}
              alt={item.title ?? "Sigmasun Technologies media"}
              fill
              draggable={false}
              className="object-contain"
            />
          </div>
        ) : (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            className="max-h-[75vh] w-full rounded-lg bg-black"
          />
        )}
      </div>
    </div>
  );
}
