# Prompt: Apply Specific Website Layout and Feature Updates

Use this prompt with Claude Code to implement the homepage layout updates, client grid, project buttons, navigation spacing, and PDF aspect ratio changes on top of the built site.

---

## 1. Objective
Update the existing website with refined visual layouts, including a cross-fading background carousel for the Homepage Hero, a centered full-width layout for the Header, a grid for client logos, a "View All Projects" redirection button, and aspect ratio corrections for the Case Study PDF viewer.

---

## 2. Scope of Files to Modify
You will modify these specific files:
*   **Modify** `src/app/page.tsx` — Update the Hero background slider, add the "Our Clients" logo grid, and add the "View All Projects" button to the Featured Projects section.
*   **Modify** `src/components/Header.tsx` — Adjust the layout structure to center navigation links and split logo/nav/CTA elements across the header canvas with padding.
*   **Modify** `src/components/CaseStudyViewer.tsx` — Adjust canvas wrapper element styling to maintain a proper A4 aspect ratio.

---

## 3. Required Context to Read First
Before modifying the code, review:
1.  `c:/Users/judob/dev/dev26/sunsigma/.claude/docs/design-system.md`
2.  `c:/Users/judob/dev/dev26/sunsigma/.claude/docs/sigmasuncontext.md`

---

## 4. Implementation Instructions

### A. Homepage Hero Split Layout & Image Carousel (`src/app/page.tsx`)
*   **Background Image Transition**: Create a sliding or cross-fading image slider/carousel inside the Hero section on the right side of the screen. Loop through these four images every 4–5 seconds:
    1.  `/Exibition/exi5.png`
    2.  `/Manufacturing%20Facility/manufacturing_facility-embedded_electronics.jpeg`
    3.  `/Manufacturing%20Facility/PCB_yv100_1.jpeg`
    4.  `/Application/laboratoryequip/membrane_casting_machine2.jpeg`
*   **Overlay & Text Highlight**: Add a solid-to-transparent white gradient overlay on the left side (e.g., `bg-gradient-to-r from-white via-white/95 to-transparent`) covering the background slideshow on the right. Ensure the left-aligned hero copy and CTA button are highly legible and readable.

### B. Center-Aligned Space-Between Header (`src/components/Header.tsx`)
*   **Width & Padding**: Ensure the header container occupies the full width of the viewport but has generous horizontal padding (e.g., `px-6 sm:px-12`) so logo and CTA button are placed away from the screen margins.
*   **3-Element Alignment**: Align child items using `justify-between`:
    1.  **Left**: Logo and tagline block.
    2.  **Center**: Navigation link list (`HOME`, `APPLICATIONS`, `PROJECTS`, `MANUFACTURING FACILITIES`, `VIDEOS`, `CASE STUDY`, `EXHIBITIONS`, `ABOUT US`) - center-aligned horizontally.
    3.  **Right**: "Contact Us" CTA button.

### C. Client Brand Logo Grid Section (`src/app/page.tsx`)
*   **Section Layout**: Add a new section below the Projects segment on the Homepage under the title "Our Clients" or "Trusted by Leading Brands".
*   **Image Sourcing**: Map and render all 21 client WebP logo files found in `public/our-clients/` (named `sigmasun-clients-1-...webp` through `sigmasun-clients-21-...webp`).
*   **Design**: Arrange in a neat responsive grid (e.g., `grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 items-center justify-items-center`). Add a subtle hover effect (e.g. grayscale at rest, fade to full color or lift on hover).

### D. "View All Projects" Redirect Button (`src/app/page.tsx`)
*   **Placement**: Position this button centered beneath the 3 featured project cards on the Homepage.
*   **Styling**: Use a secondary, ghost, or outline style button with an arrow, linking directly to `/projects`.

### E. A4 Aspect Ratio PDF Viewer (`src/components/CaseStudyViewer.tsx`)
*   **Sizing Adjustment**: In the inline PDF custom canvas container inside the `CaseStudyViewer` component, change styling to preserve a proper standard A4 aspect ratio (`aspect-[1/1.414]` or standard height-to-width ratio) for pages.
*   Ensure that resizing handles are scaling down dynamically on mobile screens while keeping page layouts from compressing, stretching, or distorting.

---

## 5. Constraints and Coding Guidelines
1.  **Strict Image Paths**: Maintain the exact casing and folder spelling including space codes (e.g., `/Manufacturing%20Facility/...` and `/Exibition/...`).
2.  **Responsive Integration**: Verify header navigation menus, hero images, and client grid adjust appropriately on standard viewports (320px to 1440px+).

---

## 6. Success Criteria
*   The homepage hero transitions successfully between the 4 images.
*   Header navigation elements are cleanly distributed (logo left, links center, CTA right) with side padding.
*   Client logo grid displays all webp images in the client directory.
*   Case study PDF render canvas maintains the A4 ratio on desktop and mobile viewports.
*   The codebase compiles cleanly with `npm run build`.

---

## 7. Verification Steps
1.  Execute `npm run build` to verify compilation.
2.  Start the local dev server using `npm run dev` and test navigation, homepage background transitions, and the case study viewer.
