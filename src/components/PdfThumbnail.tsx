"use client";

import { useEffect, useRef, useState } from "react";
import { loadPdfJs } from "@/lib/pdfjs";

export default function PdfThumbnail({ src, alt }: { src: string; alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadPdfJs()
      .then((pdfjsLib) => pdfjsLib.getDocument(src).promise)
      .then((pdf) => pdf.getPage(1))
      .then((page) => {
        if (cancelled) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const viewport = page.getViewport({ scale: 1.2 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        return page.render({ canvasContext: ctx, viewport }).promise;
      })
      .then(() => {
        if (!cancelled) setLoading(false);
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      {loading && !error && (
        <span className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
          Loading preview&hellip;
        </span>
      )}
      {error && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--color-primary)]">
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
            <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-muted)]">
            PDF Presentation
          </span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        aria-label={alt}
        className={`h-full w-full object-contain ${loading || error ? "hidden" : ""}`}
      />
    </div>
  );
}
