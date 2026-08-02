"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { applications } from "@/data/applications";

type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "dropdown"; label: string; id: "applications" | "manufacturing"; href: string };

const NAV_ITEMS: NavItem[] = [
  { kind: "link", label: "HOME", href: "/" },
  { kind: "dropdown", label: "APPLICATIONS", id: "applications", href: "/applications" },
  { kind: "link", label: "PROJECTS", href: "/projects" },
  {
    kind: "dropdown",
    label: "MANUFACTURING FACILITIES",
    id: "manufacturing",
    href: "/manufacturing-facilities",
  },
  { kind: "link", label: "VIDEOS", href: "/videos" },
  { kind: "link", label: "CASE STUDY", href: "/case-study" },
  { kind: "link", label: "EXHIBITIONS", href: "/exhibitions" },
  { kind: "link", label: "ABOUT US", href: "/about-us" },
];

const MANUFACTURING_GROUPS = [
  {
    heading: "Embedded Electronics",
    items: [
      {
        title: "Embedded Electronics Facility",
        subtitle: "PCB assembly, programming & testing",
        href: "/manufacturing-facilities#embedded-electronics",
      },
    ],
  },
  {
    heading: "Mechanical Facility",
    items: [
      {
        title: "Mechanical Facility",
        subtitle: "CNC machining & assembly tooling",
        href: "/manufacturing-facilities#mechanical-facility",
      },
    ],
  },
];

function DropdownIcon({ letter }: { letter: string }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-gold)]/10 text-sm font-bold text-[var(--color-accent-gold)]">
      {letter}
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const colSize = Math.ceil(applications.length / 4);
  const applicationColumns = Array.from({ length: 4 }, (_, i) =>
    applications.slice(i * colSize, i * colSize + colSize)
  ).filter((col) => col.length > 0);

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

  const openNow = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(id);
  };

  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 h-20 border-b border-[var(--color-border)] bg-[var(--color-surface)] lg:h-[104px] ${
        scrolled ? "shadow-[var(--shadow-sm)]" : ""
      }`}
    >
      <div className="mx-auto grid h-full max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-12">
        <Link href="/" className="logo-group flex items-center gap-2 justify-self-start">
          <Image
            src="/sigmasunlogo.webp"
            alt="Sigmasun Technologies - Light of Innovations"
            width={320}
            height={104}
            priority
            className="h-14 w-auto lg:h-16"
          />
          <span className="gear-icon hidden shrink-0 items-center justify-center opacity-0 transition-opacity duration-[var(--duration-fast)] group-hover:opacity-100 lg:inline-flex lg:h-7 lg:w-7 [.logo-group:hover_&]:opacity-100">
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

        <nav
          className="relative hidden items-center justify-self-center gap-6 font-[var(--font-heading)] lg:flex xl:gap-8"
          onMouseLeave={closeSoon}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

            if (item.kind === "link") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link text-xs font-medium uppercase tracking-wide transition-colors duration-[var(--duration-fast)] ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openDropdown === item.id;

            return (
              <div key={item.id} onMouseEnter={() => openNow(item.id)}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown((v) => (v === item.id ? null : item.id))}
                  className={`nav-link flex items-center gap-1 text-xs font-medium uppercase tracking-wide transition-colors duration-[var(--duration-fast)] ${
                    isActive || isOpen
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`text-[10px] transition-transform duration-[var(--duration-fast)] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </div>
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

      {/* Full-width mega-dropdown panel */}
      <div
        onMouseEnter={() => openDropdown && openNow(openDropdown)}
        onMouseLeave={closeSoon}
        className={`absolute inset-x-0 top-full z-[55] hidden border-t border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] lg:block ${
          openDropdown
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12">
          {openDropdown === "applications" && (
            <>
              <span className="text-xs font-bold uppercase tracking-wide text-gold">
                Browse by Industry
              </span>
              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 lg:grid-cols-4">
                {applicationColumns.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-3">
                    {col.map((app) => (
                      <Link
                        key={app.slug}
                        href={`/applications/${encodeURIComponent(app.slug)}`}
                        onClick={() => setOpenDropdown(null)}
                        className="group flex items-start gap-3 rounded-md p-1.5 normal-case transition-colors duration-[var(--duration-fast)] hover:bg-[var(--color-accent-gold)]/10"
                      >
                        <DropdownIcon letter={app.title.charAt(0)} />
                        <span className="flex flex-col">
                          <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                            {app.title}
                          </span>
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {app.blurb.length > 58 ? `${app.blurb.slice(0, 58)}…` : app.blurb}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}

          {openDropdown === "manufacturing" && (
            <>
              <span className="text-xs font-bold uppercase tracking-wide text-gold">
                Our Manufacturing Facilities
              </span>
              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                {MANUFACTURING_GROUPS.map((group) => (
                  <div key={group.heading} className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {group.heading}
                    </span>
                    {group.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group flex items-start gap-3 rounded-md p-1.5 normal-case transition-colors duration-[var(--duration-fast)] hover:bg-[var(--color-accent-gold)]/10"
                      >
                        <DropdownIcon letter={sub.title.charAt(0)} />
                        <span className="flex flex-col">
                          <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                            {sub.title}
                          </span>
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {sub.subtitle}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
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
          {NAV_ITEMS.map((item) => {
            if (item.kind === "link") {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex h-12 items-center border-b border-[var(--color-border)] px-3 text-sm font-medium uppercase tracking-wide ${
                    isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const expanded = mobileExpanded === item.id;
            const rows =
              item.id === "applications"
                ? applications.map((app) => ({
                    title: app.title,
                    href: `/applications/${encodeURIComponent(app.slug)}`,
                  }))
                : MANUFACTURING_GROUPS.flatMap((g) => g.items);

            return (
              <div key={item.id} className="border-b border-[var(--color-border)]">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex h-12 flex-1 items-center px-3 text-sm font-medium uppercase tracking-wide text-[var(--color-text)]"
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={expanded}
                    onClick={() => setMobileExpanded((v) => (v === item.id ? null : item.id))}
                    className="flex h-12 w-12 items-center justify-center text-[var(--color-text)]"
                  >
                    <span
                      className={`text-xs transition-transform duration-[var(--duration-fast)] ${
                        expanded ? "rotate-180" : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </button>
                </div>
                {expanded && (
                  <div className="flex flex-col gap-1 bg-[var(--color-surface)] px-3 pb-3">
                    {rows.map((row) => (
                      <Link
                        key={row.href}
                        href={row.href}
                        onClick={() => setDrawerOpen(false)}
                        className="rounded-md px-3 py-2 text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] hover:bg-[var(--color-accent-gold)]/10 hover:text-[var(--color-primary)]"
                      >
                        {row.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
