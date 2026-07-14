import Image from "next/image";
import type { Metadata } from "next";
import { applications } from "@/data/applications";

export const metadata: Metadata = {
  title: "Applications | Sigmasun Technologies",
  description:
    "Industry applications for Sigmasun Technologies special-purpose machines, spanning aerospace, defense, healthcare, food & pharma, and more.",
};

export default function ApplicationsPage() {
  return (
    <>
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
            builds automation that meets the operating standard of each industry we serve.
          </p>
        </div>
      </section>

      {applications.map((app, index) => (
        <section
          key={app.slug}
          className={`px-4 py-14 sm:px-6 lg:px-10 ${
            index % 2 === 1 ? "bg-[var(--color-surface)]" : ""
          }`}
        >
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">{app.title}</h2>
              {app.images.length > 0 && (
                <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
                  {app.blurb}
                </p>
              )}
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              {app.images.length > 0 ? (
                <div
                  className={`grid gap-3 ${
                    app.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {app.images.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
                    >
                      <Image
                        src={src}
                        alt={app.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {app.blurb}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
