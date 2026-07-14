import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sigmasun Technologies",
  description:
    "Sigmasun Technologies is a Pune-based designer and manufacturer of special-purpose machines, mechatronics systems, and turnkey industrial automation.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
            About Sigmasun Technologies
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
            Built by engineers who fabricate, wire, program, and test under one roof
          </h1>
          <div className="mt-8 grid max-w-4xl gap-5 text-base leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Sigmasun Technologies is a Pune-based designer, manufacturer, and supplier of
              customized special-purpose machines and turnkey industrial projects. Since 2012,
              we&apos;ve worked with manufacturers who need equipment that doesn&apos;t exist
              off a shelf &mdash; automotive component testing rigs, textile machinery, medical
              devices, and defense hardware among them.
            </p>
            <p>
              What sets us apart is that a single team carries a project from concept to
              commissioning: mechanical fabrication, electrical wiring, embedded controller
              programming, and quality assurance are all handled in-house. That means fewer
              handoffs, faster iteration, and a machine that actually matches the
              specification you started with.
            </p>
            <p>
              Our engineering staff spans mechatronics, vision inspection, embedded
              electronics, and HT/LT electrical panel design &mdash; disciplines that most
              special-purpose-machine builders outsource. We keep them in-house because
              reliability at the system level depends on how well those pieces talk to each
              other.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border-t-2 border-[var(--color-primary)] bg-[var(--color-background)] p-8 shadow-[var(--shadow-sm)]">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Deliver custom automation and special-purpose machines that meet exact
              production requirements &mdash; engineered, built, and commissioned by one
              accountable team.
            </p>
          </div>
          <div className="rounded-xl border-t-2 border-[var(--color-primary)] bg-[var(--color-background)] p-8 shadow-[var(--shadow-sm)]">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Become the go-to Indian engineering partner for import substitution &mdash;
              reducing manufacturers&apos; dependency on imported systems through local
              re-engineering and support.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
            Consulting & Import Substitution
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)]">
            Many of our clients arrive with an imported machine that&apos;s expensive to
            service, slow to get spares for, or simply overbuilt for their process. We
            re-engineer these systems locally &mdash; matching or improving performance while
            cutting landed cost, lead time, and dependency on overseas vendors. It&apos;s
            consulting grounded in the same in-house mechanical, electrical, and embedded
            capability we use to build new machines from scratch.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)] lg:text-3xl">
              Get in Touch
            </h2>
            <dl className="mt-6 flex flex-col gap-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                  Address
                </dt>
                <dd className="mt-1 text-[var(--color-text)]">
                  Survey No. 14, Dhadage Industrial Estate, Nanded Phata, Sinhagad Road, Pune
                  - 411041
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                  Phone
                </dt>
                <dd className="mt-1 text-[var(--color-text)]">+91 9975956171</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                  Office Hours
                </dt>
                <dd className="mt-1 text-[var(--color-text)]">
                  Monday &ndash; Saturday, 9:30 AM &ndash; 6:30 PM IST
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-8 text-center">
            <svg viewBox="0 0 24 24" className="h-10 w-10 text-[var(--color-primary)]" fill="currentColor">
              <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
            <p className="text-sm text-[var(--color-text-muted)]">
              Sinhagad Road, Pune, Maharashtra, India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
