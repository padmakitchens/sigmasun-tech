# Sigmasun Technologies — Project Context

> **Read this file first.** This document captures project history, goals, architecture, assets, navigation, and workflow for AI assistants and future development sessions. \*\***Design tokens, components, and animations** live in [design-system.md](./design-system.md) — use that file for colors, typography, motion, and UI patterns.

---

## 1. Project Overview

| Field | Value |
| --- | --- |
| **Project** | Revamp of [sigmasuntechnologies.com](https://sigmasuntechnologies.com) |
| **Repo** | `sigmasun-tech` — Next.js website |
| **Goal** | Replace the existing WordPress site with a modern, fast, maintainable company website |
| **Developer experience** | Beginner with Next.js, TypeScript, and React — explain changes clearly, prefer simple incremental steps |

### Company (source content)

**Sigmasun Technologies** — Pune, India. Designs, manufactures, and supplies special-purpose machines and turnkey projects. Expertise in mechatronics, automation, vision inspection, embedded systems, plastic injection molding, metal castings, electrical panels, and consultancy.

**Contact**

- Address: Survey No.:14, Dhadage Industrial Estate, Nanded Phata, Sinhagad Road, Pune 411041
- Phone: +91 9975956171

**Legacy site sections** (content to migrate): Hero, About, Services, Industries, Projects/Case Studies, Client Reviews, Client Logos, Footer.

**Sample projects** (case-study copy — to pair with images when Projects page is built):

- Special Logistic Conveyor for Potting of Solenoid Coils — Cummins, U.S.A.
- Pure IT Water Filter Production Plant — Hindustan Unilever Ltd., Haridwar
- Sari Fall Manufacturing Machine — first of its kind in textile industry
- Special Riveting Head with Indexing Table
- Fully Remote Controlled Battery Operated Orthopedic Operation Table
- Capacitor Testing Machine for Fan Motor Capacitor Manufacturers
- Diesel Valve Testing Machine

---

## 2. Tech Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | **Next.js 16** | App Router (`src/app/` directory) |
| UI | **React 19** | Functional components only |
| Language | **TypeScript** | Copy patterns from existing files; types are optional for simple components |
| Styling | **Tailwind CSS v4** + `globals.css` | Use CSS variables from [design-system.md](./design-system.md) |
| Fonts | **Arial** | `Arial, Helvetica, sans-serif` sitewide |

### Important Next.js note

This is **Next.js 16** — APIs may differ from older tutorials. Check `node_modules/next/dist/docs/` before using deprecated patterns.

### Run locally

```bash
npm install        # first time only
npm run dev        # http://localhost:3000
npm run build      # production build check
npm start          # serve production build
```

---

## 3. Design System

**Do not duplicate design rules here.** All color tokens, typography, components, spacing, and animations are defined in:

```
.claude/docs/design-system.md
```

Reference images:

- `.claude/docs/reference/navreference.png` — header / navbar layout
- `.claude/docs/reference/designreference.png` — buttons, tabs, inputs, cards

---

## 4. Assets & Images

### Legacy path (deprecated)

Older docs referenced `public/sigmasum_resource/`. **That path is no longer used.** Do not add new files there or reference it in code.

### Current asset root

All media lives directly under `public/`. Folders are named to match **navbar sections** (with the spelling used on disk — see notes below).

```
public/
├── sigmasunlogo.webp              ← site logo
├── whitefooterlogo.png            ← footer logo
├── Home/                          ← empty (reserved for homepage assets)
├── Application/                   ← industry images (see §4.1)
├── Projects/                      ← empty — future project gallery (see §4.2)
├── Manufacturing Facility/        ← facility & capability photos
├── Videos/                        ← empty — page uses YouTube embed (see §4.4)
├── Case study/                    ← PDFs + images — inline viewer only (see §4.5)
├── Exibition/                     ← exhibition photos (folder typo: “Exibition”)
└── contact us/                    ← empty (reserved)
```

**Always reference assets from the web root** (leading `/`, not `./`):

```tsx
// ✅ Correct
<img src="/sigmasunlogo.webp" alt="Sigmasun Technologies" />
<img src="/Application/aeronautic/airturbine.jpeg" alt="Air turbine" />

// ✅ Correct with next/image
import Image from "next/image";
<Image
  src="/Application/healthcare/ortho1.jpg"
  alt="Orthopedic operation table"
  width={800}
  height={600}
/>

// ❌ Wrong — deprecated path
<img src="/sigmasum_resource/logo.png" />

// ❌ Wrong — relative path
<img src="./Application/aeronautic/airturbine.jpeg" />

// ❌ Wrong — exposes downloadable PDF (use CaseStudyViewer instead)
<a href="/Case%20study/defence_case_study.pdf">Download</a>
```

**URL encoding:** Folders with spaces (e.g. `Food & pharma`, `Manufacturing Facility`) must be encoded in URLs:

```tsx
src="/Application/Food%20%26%20pharma/gas1.jpeg"
src="/Manufacturing%20Facility/PCB_yv100_1.jpeg"
```

Or import/statically map paths in a data file to avoid encoding mistakes.

---

### 4.1 Application folder (`public/Application/`)

Images are grouped **by industry / application area**. Each subfolder maps to a section on the **Applications** page (`/applications`).

| Subfolder | Display section | Status | Sample files |
| --- | --- | --- | --- |
| `aeronautic/` | Aeronautical Engineering | Has images | `airturbine.jpeg` |
| `laboratoryequip/` | Laboratory Equipments | Has images | `membranecasting3.jpeg`, `flow_measument_bench1.jpeg`, … |
| `lasermarkingsystem/` | Laser Marking Systems | Has images | `laser_marking.png`, `table_top_laser_marking_machine-mark_and_tracebility.png` |
| `industry4/` | Industry 4.0 | Has images | `industry4.0.jpeg`, `engine_head_laser_marking.jpeg` |
| `dam/` | Dam Instrumentation | Has images | `vibrating_wire_sensor_testing_device.png`, `pcb.jpeg` |
| `healthcare/` | Health Care Devices | Has images | `ortho1.jpg`, `ortho2.jpg` |
| `defensesystem/` | Defense Systems | Has images | `drone_with_payload.png`, `Ground_penetration_radar.png`, … |
| `embeddedelectronic/` | Embedded Electronics | Has images | `pcb_diagram.jpg`, `chipboard1.jpg` |
| `robotswelding/` | Welding / Robots | Has images | `Customized_Welding_RobotSystem.png`, `photo_82_…jpg` |
| `robotspick/` | Pick and Place | **Empty** — placeholder section |  |
| `Food & pharma/` | Food and Pharma Industry | Has images | `gas1.jpeg`, `checkweigher_system.png`, `foodconvory.jpeg`, … |
| `industrial/` | Industrial / General | Has images | `saree_manufacturing_machine.jpeg`, `radiator_leak_test_machine.jpeg`, … |
| `machineversion/` | Machine Vision | **Empty** — placeholder section |  |

**Applications page behavior:** Render one section per industry above. Use images from the matching subfolder in a responsive grid or card layout per [design-system.md](./design-system.md).

---

### 4.2 Projects folder (`public/Projects/`)

**Currently empty.** This folder is reserved for curated project assets, but the **Projects page content** is defined as:

> A collection of **all project images** sourced from `public/Application/` (across every industry subfolder), each shown as a **project card** with a **short description** and optional **application tags** linking back to the industry sections (e.g. “Defense Systems”, “Food and Pharma”).

Implementation notes:

- Do **not** wait for files to appear in `Projects/` — aggregate images from `Application/` at build/runtime via a manifest or data file.
- Each card: image, title, 1–2 sentence description, tag(s) for related application area.
- Optional detail route later: `src/app/projects/[slug]/page.tsx`.
- Sample copy can start from the project list in §1 until real descriptions are written.

---

### 4.3 Exhibition folder (`public/Exibition/`)

> **Note:** Folder is spelled `Exibition` on disk (typo). Keep this path in code unless the folder is renamed.

**Has images** — arrange as an attractive gallery on `/exhibitions`:

| File | Type |
| --- | --- |
| `exi1.jpg` – `exi10.png` | Exhibition photos / graphics |
| `photo_20_2026-07-09_19-15-13.jpg` | Event photo |
| `photo_73_2026-07-09_19-15-13.jpg` | Event photo |

**Layout guidance** (see design-system card/gallery patterns):

- Use a **masonry or uniform grid** with consistent gap (`--space-4` / 16px).
- Mix landscape and portrait with `object-cover` and fixed aspect-ratio cells.
- Lightbox or modal on click for full-size view.
- Subtle hover lift + shadow on each tile (per design-system §7.5).
- Optional grouping by event/year if metadata is added later.

---

### 4.4 Videos folder (`public/Videos/`)

**Folder is empty** — no local video files are required.

The **Videos** page (`/videos`) plays **one embedded YouTube video** when opened:

| Field | Value |
| --- | --- |
| **URL** | https://www.youtube.com/watch?v=dyGy4pnRcqI |
| **Embed ID** | `dyGy4pnRcqI` |
| **Embed src** | `https://www.youtube.com/embed/dyGy4pnRcqI` |

Implementation:

- Single centered `iframe` (16:9 responsive wrapper), not a thumbnail grid.
- Page title + short intro text above the player.
- No autoplay with sound; respect user preferences.

---

### 4.5 Case study folder (`public/Case study/`)

Contains **PDF presentations** and **supporting images**. These assets must be **viewable on the website only** — rendered inline in the browser, with **no download buttons, no direct file links, and no “Save as” affordances** in the UI.

> **Note:** Folder name has a space (`Case study`). Encode in URLs: `/Case%20study/…`

#### File inventory

| File | Type | Suggested title |
| --- | --- | --- |
| `defence_case_study.pdf` | PDF | Defence Systems Case Study |
| `Dam_presentation_case_study.pdf` | PDF | Dam Instrumentation Case Study |
| `INDUSTRY 4.pdf` | PDF | Industry 4.0 Case Study |
| `oxus_generator_concentration_case_study.pdf` | PDF | Oxus Generator Concentration Case Study |
| `sigmasun_presentation.pdf` | PDF | Sigmasun Company Presentation |
| `photo_80_2026-07-09_19-15-13.jpg` | Image | Case study photo 1 |
| `photo_81_2026-07-09_19-15-13.jpg` | Image | Case study photo 2 |

#### Presentation rules (must follow)

**Do not:**

- Link directly to PDF/image URLs (`<a href="/Case study/foo.pdf">`)
- Use `<a download>`, “Download PDF”, or open-in-new-tab links to raw files
- Expose raw file paths in visible UI copy
- Use the browser’s default PDF plugin via a bare `<iframe src="…pdf">` (shows native download/print toolbar)

**Do:**

- Show a **card grid** on `/case-study` — each card: cover thumbnail, title, short description, “View” button
- Open content in an **in-page viewer** (modal or dedicated panel) — never navigate away to the raw file
- **PDFs** — render with a client-side PDF viewer (e.g. `react-pdf` / PDF.js) on `<canvas>`, with toolbar hidden; page prev/next inside the viewer only
- **Images** — render with `next/image` inside the same viewer/lightbox; fit to viewport with zoom if needed
- Disable **right-click** (`onContextMenu` preventDefault) and **drag** (`draggable={false}`) on viewer surfaces
- Add a semi-transparent overlay or `user-select: none` on viewer content to reduce casual saving
- Use `pointer-events` and CSS so images are not trivially dragged out of the layout

#### Recommended implementation

```
Case Study page
├── CaseStudyGrid        ← cards for each PDF + each image
└── CaseStudyViewer      ← shared modal: PDF canvas OR image lightbox
```

**Preferred (stronger download deterrence):** Move PDFs out of `public/` into a non-public folder (e.g. `src/assets/case-studies/`) and serve pages through a **Next.js Route Handler** (`src/app/api/case-study/[id]/route.ts`) that returns `Content-Disposition: inline` with no `Content-Disposition: attachment`. The UI never exposes the static URL.

**Acceptable for v1 (files stay in** `public/Case study/`**):** Inline PDF.js canvas viewer + image lightbox with no download UI. Acknowledge that technically savvy users can still find URLs under `public/` — the goal is **no download path in the product UI**.

#### PDF viewer checklist

- [ ] Canvas-based render (not `<embed>` / bare `<iframe>`)

- [ ] Custom prev/next page controls only

- [ ] No print/download icons in the viewer chrome

- [ ] Close button returns to grid

- [ ] Loading state while PDF pages render

- [ ] `prefers-reduced-motion` respected for open/close transitions (see design-system.md)

#### Image viewer checklist

- [ ] Full-size view inside modal only

- [ ] No link wrapping the image

- [ ] Right-click disabled on viewer container

- [ ] Optional keyboard nav (Esc to close, arrow keys if gallery)

---

### 4.6 Other asset folders

| Folder | Purpose |
| --- | --- |
| `Manufacturing Facility/` | Photos for `/manufacturing-facilities` — e.g. `PCB_yv100_1.jpeg`, `manufacturing_facility-embedded_electronics.jpeg` |
| `Home/` | Reserved for future homepage-specific assets (hero, banners) |
| `contact us/` | Reserved for contact-page assets |

---

## 5. Site Structure & Navigation

Navbar layout matches `.claude/docs/reference/navreference.png`.

### Navbar links (canonical)

| Label | URL | Page file | Asset folder |
| --- | --- | --- | --- |
| Home | `/` | `src/app/page.tsx` | `public/Home/` |
| Applications | `/applications` | `src/app/applications/page.tsx` | `public/Application/` |
| Projects | `/projects` | `src/app/projects/page.tsx` | `public/Projects/` (+ images from `Application/`) |
| Manufacturing Facilities | `/manufacturing-facilities` | `src/app/manufacturing-facilities/page.tsx` | `public/Manufacturing Facility/` |
| Videos | `/videos` | `src/app/videos/page.tsx` | YouTube embed (folder empty) |
| Case Study | `/case-study` | `src/app/case-study/page.tsx` | `public/Case study/` |
| Exhibitions | `/exhibitions` | `src/app/exhibitions/page.tsx` | `public/Exibition/` |
| About Us | `/about-us` | `src/app/about-us/page.tsx` | — |
| **Contact Us** (CTA button) | `/contact` or `#contact` | `src/app/contact/page.tsx` or section | `public/contact us/` |

**Rules:** lowercase URLs, hyphens for multi-word paths, **no spaces** in hrefs. Nav labels are uppercase in the UI.

---

### Page section layouts

#### Home (`src/app/page.tsx`)

1. Header
2. Hero — “Global Engineering Excellence” + Contact CTA
3. About preview → link to `/about-us`
4. Applications highlights → link to `/applications`
5. Featured projects (3 cards) → link to `/projects`
6. Client logos (when available)
7. Footer

#### Applications (`src/app/applications/page.tsx`)

1. Header → page title → intro
2. Industry sections (one block per `Application/` subfolder — see §4.1)
3. Footer

#### Projects (`src/app/projects/page.tsx`)

1. Header → page title → intro
2. **Project card grid** — images from all `Application/` subfolders, each with description + application tags
3. Footer

Future: `src/app/projects/[slug]/page.tsx` for individual project detail.

#### Manufacturing Facilities (`src/app/manufacturing-facilities/page.tsx`)

1. Header → page title → facility overview
2. Photo gallery from `Manufacturing Facility/`
3. Capabilities grid (CNC, injection molding, panels, machining, etc.)
4. Footer

#### Videos (`src/app/videos/page.tsx`)

1. Header → page title → short intro
2. **Single YouTube embed** — `dyGy4pnRcqI` (see §4.4)
3. Footer

#### Case Study (`src/app/case-study/page.tsx`)

1. Header → page title → intro
2. **Case study grid** — one card per PDF and per image from `Case study/` (see §4.5)
3. **In-page viewer** — “View” opens `CaseStudyViewer` modal; PDFs on canvas, images in lightbox; **no download**
4. Client testimonials (when available)
5. Footer

Do **not** list raw PDF URLs or provide download actions on this page.

#### Exhibitions (`src/app/exhibitions/page.tsx`)

1. Header → page title
2. Photo gallery from `Exibition/` — polished grid layout (see §4.3)
3. Footer

#### About Us (`src/app/about-us/page.tsx`)

1. Header → page title
2. Company story, mission, expertise
3. Contact block (address, phone, map)
4. Footer

---

## 6. File & Folder Structure

```
sigmasun-tech/
├── .claude/docs/
│   ├── sigmasuncontext.md       ← this file
│   ├── design-system.md         ← colors, typography, components, animation
│   └── reference/               ← nav + style guide images
├── CLAUDE.md                    ← entry point (references AGENTS.md)
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← root layout (metadata, fonts, body)
│   │   ├── page.tsx             ← homepage
│   │   ├── globals.css          ← brand CSS variables + global styles
│   │   ├── applications/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── manufacturing-facilities/page.tsx
│   │   ├── videos/page.tsx
│   │   ├── case-study/page.tsx
│   │   ├── exhibitions/page.tsx
│   │   ├── about-us/page.tsx
│   │   └── contact/page.tsx
│   └── components/              ← shared UI (create as needed)
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── ProjectCard.tsx
│       ├── IndustrySection.tsx
│       ├── ExhibitionGallery.tsx
│       ├── YouTubeEmbed.tsx
│       ├── CaseStudyGrid.tsx
│       ├── CaseStudyViewer.tsx   ← inline PDF (canvas) + image lightbox; no download
│       └── …
└── public/                      ← all images & media (§4)
    ├── Application/
    ├── Projects/
    ├── Exibition/
    ├── Videos/
    └── …
```

### Page vs component rule

- `page.tsx` — assembles sections; one per route
- `components/*.tsx` — single reusable UI piece used across pages

Every page follows this pattern:

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SomePage() {
  return (
    <>
      <Header />
      <main>{/* page content */}</main>
      <Footer />
    </>
  );
}
```

---

## 7. Component Workflow

1. Create `src/components/ComponentName.tsx` with plain JSX first
2. Import into the target `page.tsx`
3. Run `npm run dev` and verify at `http://localhost:3000`
4. Style with Tailwind + tokens from [design-system.md](./design-system.md)
5. Move to the next component — structure before polish

### Recommended build order

 1. Fix Header (canonical URLs, logo from `/sigmasunlogo.webp`)
 2. Footer (shared across all pages)
 3. Home hero
 4. About Us page
 5. Applications + industry sections from `Application/`
 6. Projects page (aggregate `Application/` images + descriptions)
 7. Manufacturing Facilities
 8. Videos (YouTube embed)
 9. Exhibitions gallery
10. Case Study — inline viewer for PDFs/images, no download UI (§4.5)
11. Polish responsive layout and metadata

---

## 8. Current Project State

### Exists

- `src/app/page.tsx` — homepage stub
- `src/app/layout.tsx` — default Next.js layout
- `src/app/globals.css` — basic styles
- `public/` — asset folders populated per §4 (except empty `Projects/`, `Videos/`, `Home/`)

### Not yet created

- Most route pages (`applications/`, `projects/`, etc.)
- Shared components (Header, Footer, cards, galleries)
- Brand CSS variables fully aligned with design-system.md
- Page metadata (title may still be default)

### Known issues to fix

- Header nav hrefs must match §5 canonical URLs (no spaces, correct paths)
- Replace any remaining `/sigmasum_resource/` references with `/` paths from §4
- Encode URLs for folders with spaces (`Food & pharma`, `Manufacturing Facility`)
- `Exibition` folder typo — use actual folder name in code until renamed

---

## 9. Coding Conventions

- **Minimal diffs** — change only what the task requires
- **Match existing style** — same indentation, naming, and patterns as nearby files
- **Functional components** — no class components
- **No over-engineering** — no abstractions for one-off UI
- **Comments** — only for non-obvious business logic
- **Tests** — only when explicitly requested
- **Commits** — only when the user asks

### Metadata

```tsx
export const metadata = {
  title: "Sigmasun Technologies",
  description: "Special-purpose machines, automation, and turnkey engineering solutions.",
};
```

---

## 10. Deployment (future)

1. `npm run build` — must pass with zero errors
2. Deploy to **Vercel** (recommended for Next.js)
3. Point domain `sigmasuntechnologies.com` to Vercel
4. Verify images load from `/Application/…`, `/Exibition/…`, etc. — not `/sigmasum_resource/`

---

## 11. Instructions for AI Assistants

When working on this project:

 1. **Read** this file and [design-system.md](./design-system.md) before making changes
 2. Source **all images** from `public/` using web-root paths (§4) — never `sigmasum_resource/`
 3. Follow the **navbar URL map** in §5 exactly
 4. **Applications** → images by industry in `public/Application/`
 5. **Projects** → aggregate `Application/` images with descriptions and tags; `Projects/` folder is empty for now
6. **Exhibitions** → gallery layout for `public/Exibition/` images
7. **Case Study** → render PDFs and images inline via `CaseStudyViewer`; no download links or buttons (§4.5)
8. **Videos** → single YouTube embed: https://www.youtube.com/watch?v=dyGy4pnRcqI
9. Build **one component at a time**; keep changes small and explainable
10. Assume the developer is **new to React** — prefer clear, copy-paste-friendly examples
11. Do not introduce dark mode, backend APIs, or CMS unless requested
12. Update this file when major decisions change (new pages, nav items, asset layout)

---

## 12. Session History Summary

| Session | Topics covered |
| --- | --- |
| Initial | Local dev setup, legacy site content mapping |
| Architecture | Navbar layout, page wireframes, component workflow |
| Design | [design-system.md](./design-system.md) — orange/white palette, components, animation |
| Assets | Migrated from `sigmasum_resource/` to `public/` with navbar-aligned folders |
| Context | Applications by industry, Projects aggregation, Exhibitions gallery, Videos YouTube embed |
| Case Study | PDF + image inline viewer; no download UI; optional API route for stronger protection |