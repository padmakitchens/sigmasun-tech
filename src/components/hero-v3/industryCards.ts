/**
 * Card copy for the Hero V3 industry grid.
 *
 * Order, titles, icons and slugs all come from src/data/industries.ts — this
 * file only adds the short descriptor each card needs, keyed by slug, so the
 * two never drift apart. The descriptors are condensed from the `blurb` on the
 * matching entry in src/data/applications.ts.
 *
 * Keep them to three or four words. Anything longer wraps to a third line and
 * breaks the card grid's even rhythm.
 */

export const INDUSTRY_DESCRIPTORS: Record<string, string> = {
  embeddedelectronic: "Custom PCBs & controllers",
  healthcare: "Medical & surgical equipment",
  industry4: "Connected production systems",
  robotswelding: "Automotive assembly & welding",
  laboratoryequip: "Precision lab instruments",
  industrial: "Test rigs & process automation",
  robotspick: "Pick, place & weld cells",
  defensesystem: "UAV & field systems",
};

export const HERO_STATS: { value: string; label: string }[] = [
  { value: "100+", label: "Machines Built" },
  { value: "12+", label: "Years" },
  { value: "50+", label: "Enterprise Clients" },
];
