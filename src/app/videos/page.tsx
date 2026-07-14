import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Sigmasun Technologies",
  description:
    "Watch Sigmasun Technologies special-purpose machines undergo operational testing before dispatch.",
};

export default function VideosPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px] text-center">
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
          Machines in Action
        </span>
        <h1 className="mt-3 text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
          Videos
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
          This footage captures operational tests of our special-purpose machines prior to
          dispatch &mdash; the same commissioning checks every machine goes through before it
          leaves our Pune facility.
        </p>
      </div>

      <div className="relative mx-auto mt-12 h-0 w-full max-w-4xl overflow-hidden rounded-lg pb-[56.25%] shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/dyGy4pnRcqI"
          title="Sigmasun Technologies machine operational test"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
