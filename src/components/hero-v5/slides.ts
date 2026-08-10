/**
 * Hero V5 slide data — full-bleed video carousel.
 *
 * Same carousel mechanic as hero-v1 (4 slides, 7s dwell, 800ms crossfade,
 * gauge pagination, autoplay that never pauses under the cursor) but the
 * background is video instead of graded photography, and the copy sits
 * centred in the bottom third rather than left-aligned — because these
 * clips are centre-framed, unlike the photos V1 was built around.
 *
 * Each slide is paired with the video whose subject matches its copy.
 * Copy is drawn from src/data/applications.ts so it agrees with the real
 * application pages, same as hero-v1/v2/v3.
 */

export type HeroV5Slide = {
  eyebrow: string;
  headline: string;
  subline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  video: string;
  /** `object-position` for the video. All four clips are centre-framed. */
  focus: string;
};

export const HERO_DWELL_MS = 7000;
export const HERO_FADE_MS = 800;

export const HERO_V5_SLIDES: HeroV5Slide[] = [
  {
    eyebrow: "Pune, India · Since 2012",
    headline: "We build the machine that doesn't exist yet",
    subline:
      "Special Purpose Machines, mechatronics and turnkey industrial systems — designed, machined and commissioned in-house since 2012.",
    primaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    secondaryCta: { label: "See Our Work", href: "/projects" },
    video: "/video-files/embedded-hero-2.mp4",
    focus: "50% 50%",
  },
  {
    eyebrow: "Special Purpose Machines",
    headline: "One machine. One process. Yours.",
    subline:
      "Testing rigs, assembly lines and process automation engineered around your exact cycle time — not adapted from a catalogue.",
    primaryCta: { label: "Explore SPM Capability", href: "/applications" },
    secondaryCta: { label: "How We Build", href: "/manufacturing-facilities" },
    video: "/video-files/convyor_alpha.mp4",
    focus: "50% 50%",
  },
  {
    eyebrow: "Robotics & Welding",
    headline: "The same weld, the ten-thousandth time",
    subline:
      "Multi-axis robotic welding cells and precision holding fixtures — repeatable weld quality with minimal variation across production.",
    primaryCta: { label: "Explore Robotic Welding", href: "/applications/robotswelding" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    video: "/video-files/Robotic_arm_welding_car_part_720p.mp4",
    focus: "50% 50%",
  },
  {
    eyebrow: "Solid-State Laser Welding",
    headline: "Minimal heat. Maximum precision.",
    subline:
      "Solid-state laser welding systems join metal components with high precision and repeatable quality — fast, clean, minimal heat-affected zone.",
    primaryCta: { label: "Explore Laser Welding", href: "/applications/robotspick" },
    secondaryCta: { label: "Talk to Our Engineers", href: "/contact" },
    video: "/video-files/precision-welding.mp4",
    focus: "50% 50%",
  },
];
