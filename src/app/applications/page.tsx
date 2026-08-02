import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { applications } from "@/data/applications";

export const metadata: Metadata = {
  title: "Applications | Sigmasun Technologies",
  description:
    "Industry applications for Sigmasun Technologies special-purpose machines, spanning aerospace, defense, healthcare, food & pharma, and more.",
};

function coverImage(app: (typeof applications)[number]) {
  for (const product of app.products) {
    const stillImage = product.images.find((src) => !/\.mp4$/i.test(src));
    if (stillImage) return stillImage;
  }
  return app.products[0]?.images[0];
}

export default function ApplicationsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
          Industries We Serve
        </span>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
          Applications
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
          From aerospace test rigs to pharmaceutical packing lines, our engineering team
          builds automation that meets the operating standard of each industry we serve. Pick
          an industry to see the specific machines we&apos;ve built for it.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => {
            const cover = coverImage(app);
            return (
              <Link
                key={app.slug}
                href={`/applications/${app.slug}`}
                className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                  {cover && (
                    <Image
                      src={cover}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                    {app.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {app.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-gold">
                    View Industry &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
