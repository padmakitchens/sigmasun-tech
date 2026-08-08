/**
 * Hero V1 slide data — four industries, one flagship product each.
 *
 * Every field on a slide describes the same product as the image: the headline,
 * the subline and the spec strip all belong to that industry. Swapping an image
 * without swapping the copy would break that pairing.
 *
 * Copy is drawn from src/data/applications.ts so the hero and the application
 * pages agree. Each `href` points at that industry's own page.
 *
 * IMAGES: currently temporary stand-ins from public/Application/. They are
 * cluttered shop-floor snapshots and are meant to be replaced — see
 * `.claude/docs/hero-image-prompts.md` (Round 2) for the renders that belong
 * here. Swap `image`, `alt` and `focus`; nothing else needs to change.
 */

export type HeroSlide = {
  /** Small label above the headline. Names the industry. */
  eyebrow: string;
  /** Rendered uppercase. Keep to 3-6 words so it holds two lines at most. */
  headline: string;
  subline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Three products from this industry. Renders as a dot-separated strip. */
  specs: [string, string, string];
  image: string;
  /**
   * `object-position` for the background crop, chosen to keep the subject in
   * frame and push the cluttered edges of the stand-in photos out of view.
   */
  focus: string;
  alt: string;
};

/** Dwell time per slide. Matches the sphengineering.com reference. */
export const HERO_DWELL_MS = 7000;

/** Crossfade duration. Also matches the reference. */
export const HERO_FADE_MS = 800;

export const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: "Defence Systems",
    headline: "One airframe. Every mission.",
    subline:
      "Mission-configured UAV platforms — payload delivery, ground-penetrating radar, echo-sounder bathymetry and extendable-arm handling, built to work in the field.",
    primaryCta: { label: "Explore Defence Systems", href: "/applications/defensesystem" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["Payload Drones", "Ground Penetrating Radar", "Echo-Sounder Bathymetry"],
    image: "/Home/hero/drone-with-payload.webp",
    focus: "55% 45%",
    alt: "Heavy-lift drone with a mounted sensor payload",
  },
  {
    eyebrow: "Embedded Electronics",
    headline: "Circuits that outlive the conditions",
    subline:
      "Custom PCBs, microprocessor boards and signal-conditioning circuits for dam instrumentation — reading pressure, seepage and strain reliably for years, not months.",
    primaryCta: { label: "Explore Embedded Electronics", href: "/applications/embeddedelectronic" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["Custom PCB Design", "Dam Monitoring Processors", "Signal Conditioning"],
    image: "/Home/hero/custom-pcb-board.webp",
    focus: "50% 50%",
    alt: "Custom printed circuit board built for dam instrumentation",
  },
  {
    eyebrow: "Food & Pharma",
    headline: "Every pack weighed. Every reject caught.",
    subline:
      "In-line checkweighers, gas-leak detection and automatic strapping built to washdown standard for food and pharmaceutical production floors.",
    primaryCta: { label: "Explore Food & Pharma", href: "/applications/food-pharma" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["In-Line Checkweighing", "Gas Leak Detection", "Automatic Strapping"],
    image: "/Home/hero/checkweigher-system.webp",
    focus: "45% 45%",
    alt: "Stainless steel in-line checkweigher on a production conveyor",
  },
  {
    eyebrow: "Robotics & Welding",
    headline: "The same weld, the ten-thousandth time",
    subline:
      "Multi-axis robotic welding cells, precision holding fixtures and solid-state laser systems — repeatable weld quality with a minimal heat-affected zone.",
    primaryCta: { label: "Explore Robotic Welding", href: "/applications/robotswelding" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["Robotic Welding Cells", "Precision Fixtures", "Solid-State Laser Welding"],
    image: "/Home/hero/robotic-welding-fixture.webp",
    focus: "50% 50%",
    alt: "Precision fixture holding a workpiece in a robotic welding cell",
  },
];
