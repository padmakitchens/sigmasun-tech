import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hero Lab — Sigmasun Preview",
  description: "Hero section concepts for client review.",
  robots: { index: false, follow: false },
};

const VERSIONS = [
  {
    href: "/hero-lab/v1",
    label: "V1 — Cinematic Carousel",
    note: "Full-bleed dark, four-slide crossfade, graded shop-floor photography with a CAD overlay. Modelled on the sphengineering.com reference the client shared.",
    ready: true,
  },
  {
    href: "/hero-lab/v2",
    label: "V2 — Light Split Layout",
    note: "Copy on white at the left, photography in its own panel at the right. Same four slides and timing as V1, but the images are shown honestly rather than behind a scrim.",
    ready: true,
  },
  {
    href: "/hero-lab/v3",
    label: "V3 — Static Industry Grid",
    note: "No carousel. One fixed statement and CTA at the left, the eight industries as a linked card grid at the right in place of photography. Nothing rotates, nothing is hidden, and the hero ships zero JavaScript.",
    ready: true,
  },
  {
    href: "/hero-lab/v4",
    label: "V4 — Breathing Bubble Grid",
    note: "Same static idea as V3, but each of the eight cards carries its own subtle, continuous scale pulse — a different size, speed and phase per card, so the grid feels alive. Also static, also zero client JavaScript.",
    ready: true,
  },
  {
    href: "/hero-lab/v5",
    label: "V5 — Video Carousel",
    note: "Same carousel mechanic as V1 (4 slides, 7s dwell, 800ms crossfade, gauge pagination) but full-bleed looping video across all four AI-generated clips instead of graded photography. Copy stays centred, since the footage is centre-framed rather than lit to one side.",
    ready: true,
  },
];

export default function HeroLabPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-[var(--color-text)] lg:text-5xl">
          Hero Lab
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
          Hero section concepts for review. Each version is a standalone page — the live homepage
          is unchanged until one is chosen.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {VERSIONS.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                className="hover-lift block h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  {v.ready ? "Ready to review" : "In progress"}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-[var(--color-text)]">{v.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {v.note}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
