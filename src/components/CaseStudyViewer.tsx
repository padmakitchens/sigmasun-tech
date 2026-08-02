"use client";

import { useEffect, useRef, useState } from "react";
import { loadPdfJs, type PdfjsDocument } from "@/lib/pdfjs";

export type CaseStudyItem = {
  type: "pdf" | "image";
  src: string;
  title: string;
};

function PdfCanvas({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const docRef = useRef<PdfjsDocument | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadPdfJs()
      .then((pdfjsLib) => pdfjsLib.getDocument(src).promise)
      .then((pdf) => {
        if (cancelled) return;
        docRef.current = pdf;
        setNumPages(pdf.numPages);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setError("Unable to load this document.");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (!docRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;

    docRef.current.getPage(currentPage).then((page) => {
      if (cancelled) return;
      const viewport = page.getViewport({ scale: 2.2 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      page.render({ canvasContext: ctx, viewport });
    });

    return () => {
      cancelled = true;
    };
  }, [currentPage, numPages]);

  return (
    <>
      <div
        className="mx-auto flex h-[calc(100vh-140px)] w-full max-w-[900px] items-center justify-center overflow-auto rounded-lg bg-white p-2 select-none"
        onContextMenu={(e) => e.preventDefault()}
        style={{ userSelect: "none" }}
      >
        {loading && (
          <div className="flex h-40 items-center justify-center text-sm text-[var(--color-text-muted)]">
            Loading document&hellip;
          </div>
        )}
        {error && (
          <div className="flex h-40 items-center justify-center text-sm text-[#DC2626]">
            {error}
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={`h-full w-full object-contain ${loading || error ? "hidden" : ""}`}
        />
      </div>

      {numPages > 0 && (
        <div className="flex items-center gap-4">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="rounded-full border border-white/40 px-5 py-2 text-xs font-medium uppercase tracking-wide text-white disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs uppercase tracking-wide text-white">
            Page {numPages ? currentPage : 0} of {numPages}
          </span>
          <button
            type="button"
            disabled={currentPage >= numPages}
            onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
            className="rounded-full border border-white/40 px-5 py-2 text-xs font-medium uppercase tracking-wide text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default function CaseStudyViewer({
  item,
  onClose,
}: {
  item: CaseStudyItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-4 bg-black/95 p-4 sm:p-8">
      <button
        type="button"
        aria-label="Close viewer"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
      >
        &times;
      </button>

      <h2 className="text-center text-sm font-medium uppercase tracking-wide text-white">
        {item.title}
      </h2>

      <div className="flex w-full flex-1 flex-col items-center justify-center gap-4 overflow-hidden">
        {item.type === "image" ? (
          <div
            className="flex h-full max-h-[85vh] w-full items-center justify-center overflow-hidden rounded-lg select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.title}
              draggable={false}
              className="max-h-[85vh] w-auto select-none object-contain"
              style={{ userSelect: "none" }}
            />
          </div>
        ) : (
          <PdfCanvas key={item.src} src={item.src} />
        )}
      </div>
    </div>
  );
}
