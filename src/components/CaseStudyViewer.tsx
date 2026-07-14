"use client";

import { useEffect, useRef, useState } from "react";

export type CaseStudyItem = {
  type: "pdf" | "image";
  src: string;
  title: string;
};

const PDFJS_SCRIPT_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const PDFJS_WORKER_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

declare global {
  interface Window {
    pdfjsLib?: {
      GlobalWorkerOptions: { workerSrc: string };
      getDocument: (src: string) => { promise: Promise<PdfjsDocument> };
    };
  }
}

type PdfjsPage = {
  getViewport: (opts: { scale: number }) => { width: number; height: number };
  render: (opts: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
  }) => { promise: Promise<void> };
};

type PdfjsDocument = {
  numPages: number;
  getPage: (n: number) => Promise<PdfjsPage>;
};

function loadPdfJs(): Promise<NonNullable<Window["pdfjsLib"]>> {
  return new Promise((resolve, reject) => {
    if (window.pdfjsLib) {
      resolve(window.pdfjsLib);
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${PDFJS_SCRIPT_URL}"]`
    );
    const onReady = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
        resolve(window.pdfjsLib);
      } else {
        reject(new Error("pdf.js failed to initialize"));
      }
    };
    if (existing) {
      existing.addEventListener("load", onReady, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = PDFJS_SCRIPT_URL;
    script.async = true;
    script.addEventListener("load", onReady, { once: true });
    script.addEventListener("error", () => reject(new Error("Failed to load pdf.js")), {
      once: true,
    });
    document.body.appendChild(script);
  });
}

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
      const viewport = page.getViewport({ scale: 1.4 });
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
        className="flex max-h-[68vh] w-full justify-center overflow-auto rounded-lg bg-white p-2 select-none"
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
        <canvas ref={canvasRef} className={loading || error ? "hidden" : ""} />
      </div>

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
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4">
      <button
        type="button"
        aria-label="Close viewer"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
      >
        &times;
      </button>

      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col items-center gap-4">
        <h2 className="text-center text-sm font-medium uppercase tracking-wide text-white">
          {item.title}
        </h2>

        {item.type === "image" ? (
          <div
            className="max-h-[75vh] overflow-hidden rounded-lg select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.title}
              draggable={false}
              className="max-h-[75vh] w-auto select-none object-contain"
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
