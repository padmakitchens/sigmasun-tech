import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/industries";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Applications", href: "/applications" },
  { label: "Projects", href: "/projects" },
  { label: "Case Study", href: "/case-study" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "About Us", href: "/about-us" },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-[var(--color-primary)] bg-[var(--color-text)] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/whitefooterlogo.png"
              alt="Sigmasun Technologies"
              width={200}
              height={64}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Sigmasun Technologies is a leading designer, manufacturer, and supplier of
              customized special-purpose machines and turnkey industrial projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-gold)]">
                Business Verticals
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {industries.map((industry) => (
                  <li key={industry.slug}>
                    <Link
                      href={`/applications/${encodeURIComponent(industry.slug)}`}
                      className="text-sm text-white/70 transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-primary)]"
                    >
                      {industry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-gold)]">
                Quick Navigation
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-gold)]">
              Get in Touch
            </h3>
            <address className="mt-4 flex flex-col gap-3 text-sm not-italic text-white/70">
              <span>
                Survey No. 14, Dhadage Industrial Estate, Nanded Phata, Sinhagad Road, Pune -
                411041
              </span>
              <a
                href="tel:+919975956171"
                className="transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-primary)]"
              >
                +91 9975956171
              </a>
              <a
                href="mailto:info@sigmasuntechnologies.com"
                className="transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-primary)]"
              >
                info@sigmasuntechnologies.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Sigmasun Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
