import type { Metadata } from "next";
import Link from "next/link";
import HeroV1 from "@/components/hero-v1/HeroV1";

export const metadata: Metadata = {
  title: "Hero V1 — Sigmasun Preview",
  description: "Cinematic dark carousel hero, modelled on the SPH Engineering reference.",
  robots: { index: false, follow: false },
};

export default function HeroV1Page() {
  return (
    <>
      <HeroV1 />
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Preview — Hero V1
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Four-slide crossfade carousel, 7 second dwell, 800ms transition. The rest of the
            homepage is unchanged and is not shown here.{" "}
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
