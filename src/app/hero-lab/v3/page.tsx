import type { Metadata } from "next";
import Link from "next/link";
import HeroV3 from "@/components/hero-v3/HeroV3";

export const metadata: Metadata = {
  title: "Hero V3 — Sigmasun Preview",
  description: "Static hero: fixed statement at the left, eight linked industry cards at the right.",
  robots: { index: false, follow: false },
};

export default function HeroV3Page() {
  return (
    <>
      <HeroV3 />
      <section className="bg-[var(--color-surface)] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Preview — Hero V3
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Static — no carousel. One fixed statement and CTA at the left, all eight industries
            as linked cards at the right in place of photography. The homepage is unchanged.{" "}
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
