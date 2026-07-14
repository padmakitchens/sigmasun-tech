"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_CATEGORIES = [
  "SPM Development",
  "Automation Programming",
  "Electrical Panel",
  "Re-engineering",
];

const inputClasses =
  "w-full rounded-[6px] border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all focus:border-[#F67011] focus:ring-3 focus:ring-[rgba(246,112,17,0.2)]";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
          Let&apos;s Talk
        </span>
        <h1 className="mt-3 text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
          Tell us about your automation requirement and our engineering team will get back
          to you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            {submitted ? (
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <h2 className="text-lg font-semibold text-[var(--color-text)]">
                  Thanks &mdash; we&apos;ll be in touch.
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Our engineering team typically responds within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs uppercase tracking-wide text-[var(--color-text-muted)]"
                  >
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClasses} />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1 block text-xs uppercase tracking-wide text-[var(--color-text-muted)]"
                  >
                    Company Name
                  </label>
                  <input id="company" name="company" type="text" className={inputClasses} />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-xs uppercase tracking-wide text-[var(--color-text-muted)]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-xs uppercase tracking-wide text-[var(--color-text-muted)]"
                    >
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputClasses} />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="mb-1 block text-xs uppercase tracking-wide text-[var(--color-text-muted)]"
                  >
                    Inquiry Category
                  </label>
                  <select id="category" name="category" className={inputClasses} defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
                    {INQUIRY_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="mb-1 block text-xs uppercase tracking-wide text-[var(--color-text-muted)]"
                  >
                    Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    className={`${inputClasses} min-h-[120px] resize-y`}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all hover:scale-[1.02] hover:bg-[var(--color-primary-hover)]"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Office</h2>
            <dl className="mt-6 flex flex-col gap-5 text-sm">
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
                <dd className="mt-1">
                  <a
                    href="tel:+919975956171"
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    +91 9975956171
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:info@sigmasuntechnologies.com"
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    info@sigmasuntechnologies.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                  Office Timings
                </dt>
                <dd className="mt-1 text-[var(--color-text)]">
                  Monday &ndash; Saturday, 9:30 AM &ndash; 6:30 PM IST
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
