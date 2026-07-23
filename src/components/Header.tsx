"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "APPLICATIONS", href: "/applications" },
  { label: "PROJECTS", href: "/projects" },
  { label: "MANUFACTURING FACILITIES", href: "/manufacturing-facilities" },
  { label: "VIDEOS", href: "/videos" },
  { label: "CASE STUDY", href: "/case-study" },
  { label: "EXHIBITIONS", href: "/exhibitions" },
  { label: "ABOUT US", href: "/about-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <header
      className={`sticky top-0 z-50 h-16 border-b border-[var(--color-border)] bg-[var(--color-surface)] lg:h-[72px] ${
        scrolled ? "shadow-[var(--shadow-sm)]" : ""
      }`}
    >
      <div className="mx-auto grid h-full max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-12">
        <Link href="/" className="logo-group flex items-center gap-2 justify-self-start">
          <Image
            src="/sigmasunlogo.webp"
            alt="Sigmasun Technologies - Light of Innovations"
            width={220}
            height={72}
            priority
            className="h-10 w-auto lg:h-[52px]"
          />
          <span className="gear-icon hidden shrink-0 items-center justify-center opacity-0 transition-opacity duration-[var(--duration-fast)] group-hover:opacity-100 lg:inline-flex lg:h-6 lg:w-6 [.logo-group:hover_&]:opacity-100">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <circle cx="12" cy="12" r="4.2" fill="var(--color-primary)" />
              {Array.from({ length: 8 }).map((_, i) => (
                <rect
                  key={i}
                  x="11.1"
                  y="0.5"
                  width="1.8"
                  height="4.2"
                  rx="0.6"
                  fill="var(--color-accent-gold)"
                  transform={`rotate(${i * 45} 12 12)`}
                />
              ))}
            </svg>
          </span>
        </Link>

        <nav className="hidden items-center justify-self-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link text-xs font-medium uppercase tracking-wide transition-colors duration-[var(--duration-fast)] ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-medium uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all duration-[var(--duration-fast)] hover:scale-[1.02] hover:bg-[var(--color-primary-hover)] lg:inline-flex"
          >
            Contact Us
            <span className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--color-border)] lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-[var(--color-text)] transition-transform duration-[var(--duration-fast)] ${
                drawerOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--color-text)] transition-opacity duration-[var(--duration-fast)] ${
                drawerOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--color-text)] transition-transform duration-[var(--duration-fast)] ${
                drawerOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-[var(--duration-normal)] lg:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />
      <div
        className={`fixed right-0 top-0 z-[60] flex h-full w-[82%] max-w-sm flex-col bg-[var(--color-background)] shadow-[var(--shadow-lg)] transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] p-4">
          <span className="text-sm font-bold uppercase text-[var(--color-text)]">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="flex h-9 w-9 items-center justify-center text-xl text-[var(--color-text)]"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-1 flex-col overflow-y-auto p-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setDrawerOpen(false)}
                className={`flex h-12 items-center border-b border-[var(--color-border)] px-3 text-sm font-medium uppercase tracking-wide ${
                  isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4">
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] text-xs font-medium uppercase tracking-wide text-white"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}
