import type { Metadata } from "next";
import Link from "next/link";
import HeroV5 from "@/components/hero-v5/HeroV5";

export const metadata: Metadata = {
  title: "Hero V5 — Sigmasun Preview",
  description: "Full-bleed video carousel across all four AI-generated clips.",
  robots: { index: false, follow: false },
};

export default function HeroV5Page() {
  return (
    <>
      <HeroV5 />
      <section className="bg-[var(--color-surface)] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Preview — Hero V5
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Now a carousel — same mechanic as V1/V2 (4 slides, 7s dwell, 800ms crossfade, gauge
            pagination, never pauses under the cursor) but the background is looping video
            across all four clips in{" "}
            <code className="rounded bg-[var(--color-background)] px-1.5 py-0.5 text-[13px]">
              public/video-files/
            </code>{" "}
            instead of a single static one. Copy stays centred in the bottom third, since the
            footage is centre-framed. The homepage is unchanged.{" "}
            <Link href="/hero-lab" className="text-[var(--color-primary)] underline">
              Back to all versions
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
