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

export type PdfjsPage = {
  getViewport: (opts: { scale: number }) => { width: number; height: number };
  render: (opts: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
  }) => { promise: Promise<void> };
};

export type PdfjsDocument = {
  numPages: number;
  getPage: (n: number) => Promise<PdfjsPage>;
};

export function loadPdfJs(): Promise<NonNullable<Window["pdfjsLib"]>> {
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
