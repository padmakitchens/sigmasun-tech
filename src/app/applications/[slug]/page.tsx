import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MediaCarousel from "@/components/MediaCarousel";
import { applications } from "@/data/applications";

export function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = applications.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.title} | Sigmasun Technologies`,
    description: app.blurb,
  };
}

export default async function ApplicationIndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = applications.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();

  const app = applications[index];
  const prev = applications[(index - 1 + applications.length) % applications.length];
  const next = applications[(index + 1) % applications.length];

  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <Link
            href="/applications"
            className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
          >
            &larr; All Applications
          </Link>
          <span className="mt-4 block text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
            Industry
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
            {app.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
            {app.blurb}
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative flex flex-col gap-6">
            {app.products.map((product, i) => (
              <article
                key={product.title}
                style={{ top: `${104 + i * 28}px`, zIndex: 10 + i }}
                className="group sticky rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-md)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] lg:p-8"
              >
                <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
                  <MediaCarousel media={product.images} title={product.title} />
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)] lg:text-xl">
                      {product.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-muted)] transition-all duration-[var(--duration-normal)] group-hover:line-clamp-none">
                      {product.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
          <Link
            href={`/applications/${prev.slug}`}
            className="flex flex-col text-left text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
          >
            <span>&larr; Previous</span>
            <span className="mt-1 text-sm font-semibold text-[var(--color-text)]">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/applications/${next.slug}`}
            className="flex flex-col text-right text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
          >
            <span>Next &rarr;</span>
            <span className="mt-1 text-sm font-semibold text-[var(--color-text)]">
              {next.title}
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
