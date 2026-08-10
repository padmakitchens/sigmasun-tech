import type { Metadata } from "next";
import Link from "next/link";
import HeroV4 from "@/components/hero-v4/HeroV4";

export const metadata: Metadata = {
  title: "Hero V4 — Sigmasun Preview",
  description: "Static hero with a breathing bubble-card grid of all eight industries.",
  robots: { index: false, follow: false },
};

export default function HeroV4Page() {
  return (
    <>
      <HeroV4 />
      <section className="bg-[var(--color-surface)] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Preview — Hero V4
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Same static idea as V3 — no carousel, all eight industries linked directly — but
            each card carries its own subtle, continuous scale pulse: a different size, speed
            and phase per card, so the grid feels alive rather than a rigid table. Pure CSS, no
            client JavaScript. The homepage is unchanged.{" "}
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
