import type { Metadata } from "next";
import Link from "next/link";
import HeroV2 from "@/components/hero-v2/HeroV2";

export const metadata: Metadata = {
  title: "Hero V2 — Sigmasun Preview",
  description: "Light split-layout hero: copy on white, photography in its own panel.",
  robots: { index: false, follow: false },
};

export default function HeroV2Page() {
  return (
    <>
      <HeroV2 />
      <section className="bg-[var(--color-surface)] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Preview — Hero V2
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Same four slides and timing as V1, light split layout. The homepage is unchanged.{" "}
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
