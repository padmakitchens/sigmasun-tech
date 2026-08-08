/**
 * Hero V2 slide data — four industries, one flagship product each.
 *
 * Same copy as hero-v1/slides.ts so the client compares layout, not wording.
 * Kept as a separate file because the two versions want different framing:
 * V2 shows its photography honestly in a near-square panel, so `focus` values
 * are centred rather than pushed off to one side.
 *
 * IMAGES: currently temporary stand-ins from public/Application/. See
 * `.claude/docs/hero-image-prompts.md` (Round 2) for the renders that belong
 * here. Swap `image`, `alt` and `focus`; nothing else needs to change.
 */

export type HeroV2Slide = {
  eyebrow: string;
  headline: string;
  subline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  specs: [string, string, string];
  image: string;
  /** `object-position` inside the image panel. */
  focus: string;
  alt: string;
};

export const HERO_DWELL_MS = 7000;
export const HERO_FADE_MS = 800;

export const HERO_V2_SLIDES: HeroV2Slide[] = [
  {
    eyebrow: "Defence Systems",
    headline: "One airframe. Every mission.",
    subline:
      "Mission-configured UAV platforms — payload delivery, ground-penetrating radar, echo-sounder bathymetry and extendable-arm handling, built to work in the field.",
    primaryCta: { label: "Explore Defence Systems", href: "/applications/defensesystem" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["Payload Drones", "Ground Penetrating Radar", "Echo-Sounder Bathymetry"],
    image: "/Home/hero/defence-drone-hero.webp",
    focus: "50% 50%",
    alt: "Heavy-lift industrial multirotor drone with gimbal sensor pod in darkened hangar",
  },
  {
    eyebrow: "Embedded Electronics",
    headline: "Circuits that outlive the conditions",
    subline:
      "Custom PCBs, microprocessor boards and signal-conditioning circuits for dam instrumentation — reading pressure, seepage and strain reliably for years, not months.",
    primaryCta: { label: "Explore Embedded Electronics", href: "/applications/embeddedelectronic" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["Custom PCB Design", "Dam Monitoring Processors", "Signal Conditioning"],
    image: "/Home/hero/embedded-pcb-hero.webp",
    focus: "50% 50%",
    alt: "Custom industrial printed circuit board built for dam instrumentation",
  },
  {
    eyebrow: "Food & Pharma",
    headline: "Every pack weighed. Every reject caught.",
    subline:
      "In-line checkweighers, gas-leak detection and automatic strapping built to washdown standard for food and pharmaceutical production floors.",
    primaryCta: { label: "Explore Food & Pharma", href: "/applications/food-pharma" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["In-Line Checkweighing", "Gas Leak Detection", "Automatic Strapping"],
    image: "/Home/hero/food-pharma-hero.webp",
    focus: "50% 50%",
    alt: "Stainless-steel in-line checkweigher machine on a food production line",
  },
  {
    eyebrow: "Robotics & Welding",
    headline: "The same weld, the ten-thousandth time",
    subline:
      "Multi-axis robotic welding cells, precision holding fixtures and solid-state laser systems — repeatable weld quality with a minimal heat-affected zone.",
    primaryCta: { label: "Explore Robotic Welding", href: "/applications/robotswelding" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    specs: ["Robotic Welding Cells", "Precision Fixtures", "Solid-State Laser Welding"],
    image: "/Home/hero/robotic-welding-hero.webp",
    focus: "50% 50%",
    alt: "Six-axis industrial welding robot mid-weld inside a dark welding cell",
  },
];
