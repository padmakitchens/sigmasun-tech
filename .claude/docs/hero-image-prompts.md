# Hero image prompt pack

For the Hero V1 carousel (`/hero-lab/v1`). Use these when generating or commissioning
replacement backgrounds. The hero is built so that better images improve it and are
never required by it — the grade, duotone and scrim in `globals.css` (`.hero-v1-*`)
carry the current shop-floor snapshots on their own.

---

## Why the existing photos need replacing

They are phone snapshots. Resolution is fine (2–3 MB each), but:

- flat overhead fluorescent light, no modelling or direction
- green and blue epoxy floors that fight the brand orange
- cluttered edges — shelving, cartons, packing plastic, water bottles, loose tooling
- square or portrait crops, so a 21:9 hero slot has to crop very hard

The hero currently compensates with `grayscale(0.55) contrast(1.15) brightness(0.58)`,
a `mix-blend-mode: color` duotone and a heavy scrim. That works, but it also throws
away most of the image. Better sources mean the treatment can be dialled back and the
machines actually become visible.

---

## Art-direction spec (applies to all four)

| | |
|---|---|
| Output size | **2400 × 1100** (the hero renders ~21:9 on desktop) |
| Composition | Subject weighted **right of centre**. The left ~40% must stay dark and uncluttered — that is where the headline sits. |
| Lighting | Low-key industrial. One or two warm practical sources, strong falloff into shadow. **Not** flat overhead fluorescent. |
| Colour | Desaturated steel and near-black. Orange (`#f67011`) is the only saturated colour — machine status lamps, safety markings, sparks, warm rim light. No green or blue floors. |
| Depth | Shallow-ish. Foreground machine geometry sharp, background falling into darkness. |
| Exclude | Text, logos, watermarks, recognisable faces, clutter, cardboard, packaging plastic, bright ceilings |
| Mood | Precision engineering, not stock-photo "innovation". Heavy, built, real. |

---

## Prompts

Four standalone prompts. Each one is complete on its own — generate them one at a time,
in any order, and paste the whole block. Nothing is shared between them.

Aspect ratio is written into the text, but most tools also want it as a flag:
Midjourney `--ar 21:9`, others set width 2400 / height 1100 directly.

---
<!-- 
### 01 — Brand statement
Replaces: `/Manufacturing-Facility/mechanical-PCB_yv100_1.jpeg`

```text
Ultra-wide cinematic photograph, 21:9 aspect ratio, of a precision pick-and-place
electronics assembly machine inside a darkened production hall. Shot close and from a
low angle, so the machine's brushed steel and matte grey housings fill the right two
thirds of the frame and recede diagonally into darkness. A narrow strip of warm orange
indicator light runs along the gantry rail, the only saturated colour in the image.
Everything else is desaturated steel, graphite and near-black. The left third of the
frame is deep empty shadow with no objects in it. Low-key industrial lighting from a
single warm practical source with hard falloff, no flat overhead fluorescent light,
no bright ceiling. Shallow depth of field, foreground machine geometry tack sharp,
background dissolving into black. Heavy, engineered, real — not a bright showroom.
Photorealistic, high detail, moody. No text, no logos, no watermarks, no people, no
cardboard boxes, no packaging plastic, no clutter, no green or blue floors.
```

---

### 02 — Special Purpose Machines
Replaces: `/Application/industry4/engine_head_laser_marking.jpeg`

```text
Ultra-wide cinematic photograph, 21:9 aspect ratio, of a custom-built industrial roller
conveyor and aluminium extrusion gantry inside a dark machine shop. A long line of black
rollers leads diagonally from the lower right into the middle distance, their metal edges
catching a warm rim light. Blue pneumatic tubing loops across the extrusion frame. A small
orange status lamp glows on the control column at the right of the frame — the only
saturated colour in the image. Everything else is desaturated steel, aluminium and
near-black. The left third of the frame falls away into deep empty shadow with no objects
in it. Low-key industrial lighting from one warm practical source with strong falloff, no
flat overhead fluorescent light, no bright ceiling. Shallow depth of field, the nearest
rollers and frame tack sharp, the far end of the line dissolving into black.
Photorealistic, high detail, heavy and precisely engineered. No text, no logos, no
watermarks, no people, no cardboard boxes, no packaging plastic, no clutter, no green or
blue floors.
```

---

### 03 — Mechatronics & Vision Inspection
Replaces: `/Application/machineversion/part-inspection-system-1.png`

```text
Ultra-wide cinematic photograph, 21:9 aspect ratio, of an industrial machine-vision camera
and circular LED ring light mounted on an aluminium extrusion gantry above a conveyor belt,
photographed close and slightly from below, positioned right of centre. The ring light
throws a single hard bright pool onto a machined metal component on the belt directly
beneath it; everything outside that pool falls rapidly into darkness. Cool white sensor
glow plays against a warm orange ambient spill from a status lamp on the frame — orange is
the only saturated colour in the image. Everything else is desaturated steel, aluminium and
near-black. The left third of the frame is deep empty shadow with no objects in it. Low-key
industrial lighting, dramatic contrast, no flat overhead fluorescent light, no bright
ceiling. Shallow depth of field, camera housing and lens tack sharp, background dissolving
into black. Photorealistic, high detail, precise and clinical. No text, no logos, no
watermarks, no people, no cardboard boxes, no packaging plastic, no clutter, no green or
blue floors.
```

---

### 04 — Import Substitution
Replaces: `/Manufacturing-Facility/manufacturing-facility-embedded-electronics-2.jpeg`

```text
Ultra-wide cinematic photograph, 21:9 aspect ratio, of two heavy locally built process
machines standing in a darkened industrial plant, receding in perspective toward the right
of the frame. Thick welded steel frames and enclosed control cabinets, their panel faces
raked by a single warm work light from the right. Small orange and amber indicator lamps
glow across the control panels — orange is the only saturated colour in the image.
Everything else is desaturated steel, graphite and near-black. Floor and ceiling are lost
in shadow, and the left third of the frame is deep empty negative space with no objects in
it. Low-key industrial lighting with strong falloff, no flat overhead fluorescent light, no
bright ceiling. Shallow depth of field, the nearest machine tack sharp, the second machine
softening into darkness. Photorealistic, high detail, substantial and purpose-built.
No text, no logos, no watermarks, no people, no cardboard boxes, no packaging plastic,
no clutter, no green or blue floors.
```

--- -->

# Round 2 — industry slides (current)

**Round 1 above is superseded.** The hero now shows four *industries*, each represented by
one flagship product, so the imagery has to name the industry at a glance. A generic
machine no longer works: slide 1 must read "defence", slide 3 must read "food and pharma".

## What changed in the spec

| | Round 1 | Round 2 |
|---|---|---|
| Aspect | 21:9 wide | **1:1 square, ≥1536×1536** |
| Subject | any industrial machine | **one named product per industry** |
| Framing | subject right of centre | subject right of centre, **plus vertical headroom** |

Square is deliberate. V2's image panel is near-square on desktop (~730×796) and wide on
mobile; V1 crops a centre band to 21:9. A square master with breathing room top and bottom
serves both — a 21:9 render would letterbox badly in V2's panel. This also matches what
Antigravity produced natively.

The dark empty left third still applies: it survives the centre-band crop and is where
V1's headline sits.

**New requirement: no brand names or model numbers on any equipment.** The round-1 vision
render came back with a legible third-party camera brand on the housing, which cannot ship
on a client site. Add the negative clause below to every prompt.

---

### 01 — Defence Systems · Drone With Payload
Application page: `/applications/defensesystem`

```text
Ultra-detailed square photograph, 1:1 aspect ratio, of a heavy-lift industrial multirotor
drone in a darkened hangar at night. Thick carbon-fibre arms and folded propellers, a
gimbal-mounted sensor and payload pod slung beneath the airframe, landing skids on a dark
concrete floor. The drone sits right of centre with clear space above and below it. A
single warm orange work light rakes across the carbon fibre from the right, and a small
orange status LED glows on the flight controller — orange is the only saturated colour in
the image. Everything else is matte black, carbon weave and desaturated steel. The left
third of the frame is deep empty shadow containing no objects. Low-key lighting with
strong falloff, no flat overhead fluorescent light, no bright ceiling, no daylight.
Shallow depth of field, the airframe tack sharp, the hangar dissolving into black.
Serious, field-ready, military-grade engineering. Photorealistic, high detail. No text, no
logos, no brand names, no model numbers, no watermarks, no people, no flags, no insignia,
no clutter, no green astroturf, no tents.
```

---

### 02 — Embedded Electronics · Custom PCB Board
Application page: `/applications/embeddedelectronic`

```text
Ultra-detailed square macro photograph, 1:1 aspect ratio, of a custom industrial printed
circuit board for dam instrumentation, shot close and at a low raking angle. A large
microprocessor, ranks of surface-mount components, screw-terminal sensor input blocks and
a glossy conformal coating catching the light. The board runs diagonally from lower left
to upper right, positioned right of centre with clear space above and below. A single warm
orange light grazes across the board from the right and one small orange power LED is lit
— orange is the only saturated colour. The solder mask is dark graphite, the traces
desaturated copper and tin, the background pure black. The left third of the frame is deep
empty shadow containing no objects. Low-key lighting, dramatic falloff, no flat overhead
fluorescent light, no bright background. Extremely shallow depth of field, the processor
tack sharp, the far end of the board dissolving into darkness. Precise, dense, built to
survive years in the wet. Photorealistic, high detail. No text, no logos, no brand names,
no part numbers, no silkscreen lettering, no watermarks, no people, no clutter.
```

---

### 03 — Food & Pharma · Weight Checker System
Application page: `/applications/food-pharma`

```text
Ultra-detailed square photograph, 1:1 aspect ratio, of a stainless-steel in-line
checkweigher machine on a food production line in a darkened plant. A polished stainless
frame straddles a white belt conveyor, sealed product packs moving beneath it, a small
digital weight readout glowing on the control head and a reject arm at the side. The
machine sits right of centre with clear space above and below. A single warm orange light
rakes across the brushed stainless from the right and the readout glows warm amber —
orange is the only saturated colour in the image. Everything else is desaturated stainless
steel, white belt and near-black background. The left third of the frame is deep empty
shadow containing no objects. Low-key lighting with strong falloff, no flat overhead
fluorescent light, no bright ceiling. Shallow depth of field, the weighing head tack
sharp, the line receding into darkness. Clean, hygienic, washdown-standard, pharmaceutical
grade. Photorealistic, high detail. No text, no logos, no brand names, no readable
numbers, no watermarks, no people, no cardboard boxes, no clutter, no blue walls.
```

---

### 04 — Robotics & Welding · Robotic Welding Cell
Application page: `/applications/robotswelding`

```text
Ultra-detailed square photograph, 1:1 aspect ratio, of a six-axis industrial welding robot
mid-weld inside a dark welding cell. The articulated arm reaches down to a steel workpiece
clamped in a precision fixture, the torch throwing a burst of orange sparks that light the
scene. The robot sits right of centre with clear space above and below. The weld arc and
sparks are the only saturated colour, glowing orange against matte black robot casing,
desaturated steel fixtures and a near-black cell interior. Warm orange light spills across
the fixture and the floor. The left third of the frame is deep empty shadow containing no
objects. Low-key lighting, high contrast, lit almost entirely by the weld itself, no flat
overhead fluorescent light, no bright ceiling. Shallow depth of field, torch and workpiece
tack sharp, the cell dissolving into black. Powerful, repeatable, high-throughput
production. Photorealistic, high detail. No text, no logos, no brand names, no model
numbers, no watermarks, no people, no safety signage, no clutter.
```

---

## How to swap an image in

1. Export at 2400 × 1100, WebP or JPEG, **under ~400 KB**.
2. Drop into `public/Home/hero/` (create the folder).
3. In `src/components/hero-v1/slides.ts`, edit that slide's `image`, `alt`, and retune
   `focus` (the `object-position`, e.g. `"58% 48%"`) so the crop lands on the subject.

No component change, no CSS change.

If the new images already carry their own dark negative space — as the SPH Engineering
reference ones do — soften the treatment in `globals.css`: raise `.hero-v1-grade`
brightness toward `0.75` and drop `.hero-v1-duotone` opacity toward `0.4`, so the
photography does more of the work and the code does less.

---

## Pre-launch note on the current assets

The four in use are 2–3 MB originals. Next.js optimises what it *delivers*, but still
reads the full file on first request. Before any production launch, pre-resize the hero
sources to ~2400px wide. This applies to the rest of `public/` too — several application
and exhibition images are also 2 MB+.
