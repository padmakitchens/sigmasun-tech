"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = ["SPM Machine", "Automation", "PCB", "General"];

const floatingInputClasses =
  "peer w-full rounded-[6px] border border-[var(--color-border)] bg-white px-4 pb-2 pt-5 text-sm text-[var(--color-text)] outline-none transition-all focus:border-[var(--color-accent-gold)] focus:ring-3 focus:ring-[rgba(201,162,39,0.2)]";

const floatingLabelClasses =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-muted)] transition-all duration-[var(--duration-fast)] peer-focus:top-3 peer-focus:text-xs peer-focus:text-[var(--color-accent-gold)] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs";

const MAP_QUERY = encodeURIComponent(
  "Survey No. 14, Dhadage Industrial Estate, Nanded Phata, Sinhagad Road, Pune 411041"
);

function FloatingField({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder=" "
        className={floatingInputClasses}
      />
      <label htmlFor={id} className={floatingLabelClasses}>
        {label}
      </label>
    </div>
  );
}

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
              <div className="animate-fade-up rounded-xl border-t-4 border-[var(--color-accent-gold)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-md)]">
                <h2 className="text-lg font-semibold text-[var(--color-text)]">
                  Thanks &mdash; we&apos;ll be in touch.
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Our engineering team typically responds within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <FloatingField id="name" label="Name" required />
                <FloatingField id="company" label="Company Name" />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FloatingField id="email" label="Email" type="email" required />
                  <FloatingField id="phone" label="Phone Number" type="tel" />
                </div>
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="mb-1 block text-xs uppercase tracking-wide text-[var(--color-text-muted)]"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    defaultValue=""
                    className="w-full rounded-[6px] border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all focus:border-[var(--color-accent-gold)] focus:ring-3 focus:ring-[rgba(201,162,39,0.2)]"
                  >
                    <option value="" disabled>
                      Select an inquiry type
                    </option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder=" "
                    className={`${floatingInputClasses} min-h-[120px] resize-y`}
                  />
                  <label htmlFor="details" className={floatingLabelClasses}>
                    Details
                  </label>
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

          <div className="flex flex-col gap-6">
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

            <div className="overflow-hidden rounded-xl border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
              <iframe
                title="Sigmasun Technologies facility map"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
