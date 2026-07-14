# Prompt: Build Complete Sigmasun Technologies Website in One Go

Use this prompt directly with Claude Code to implement the full corporate website. It defines the complete scope, pages, components, layout guidelines, asset mappings, and specific logic for PDFs and galleries.

---

## 1. Objective
Build the complete marketing and corporate website for **Sigmasun Technologies** (Pune, India) in one comprehensive run. The site must be built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, strictly matching the branding, layout, components, and animations specified in `.claude/docs/design-system.md` and the structural architecture outlined in `.claude/docs/sigmasuncontext.md`.

---

## 2. Scope of Files to Create & Modify
You will build all core routes, components, and global styles:
*   **Modify** `src/app/globals.css` — Establish the design system variable theme, fonts, custom keyframes, and utilities.
*   **Modify** `src/app/layout.tsx` — Apply the site layout structure wrapping all routes with a sticky Header and a dark Footer. Set SEO metadata.
*   **Modify** `src/app/page.tsx` — Build the homepage (Hero, About Us preview, Specialties grid, Featured Projects, CTA band).
*   **Create** `src/components/Header.tsx` — Sticky navbar with brand logo (gear rotation hover effect), navigation links, and Contact Us CTA. Includes a mobile slide-out drawer.
*   **Create** `src/components/Footer.tsx` — Premium dark background footer containing company description, key business divisions, navigation links, and full contact details.
*   **Create** `src/components/ProjectCard.tsx` — Standardized project card element with hover lift, tags, and click interaction.
*   **Create** `src/components/CaseStudyViewer.tsx` — Custom modal component to render PDF files inline using a dynamic canvas-based viewer (loaded from CDN, no direct file downloads) and a simple lightbox for case study images.
*   **Create** `src/app/about-us/page.tsx` — Detailed about page with company profile, core expertise areas, and interactive contact blocks.
*   **Create** `src/app/applications/page.tsx` — Industry sections utilizing assets from `public/Application/` to display solutions for various engineering divisions.
*   **Create** `src/app/projects/page.tsx` — Aggregated catalog of special-purpose machine projects, showcasing real-world implementations, customer applications, and category filtering tags.
*   **Create** `src/app/manufacturing-facilities/page.tsx` — Interactive tour of manufacturing capability utilizing pictures from `public/Manufacturing Facility/`.
*   **Create** `src/app/videos/page.tsx` — Embedded single-video showcase page of Sigmasun machinery in action.
*   **Create** `src/app/case-study/page.tsx` — Secure Case Study showcase grid linking to the custom canvas viewer.
*   **Create** `src/app/exhibitions/page.tsx` — High-quality grid/masonry image gallery showing event pictures from `public/Exibition/`.
*   **Create** `src/app/contact/page.tsx` — Comprehensive contact page with inquiry intake form and detailed physical address block.

---

## 3. Required Context to Read First
Before generating code, read:
1.  `c:/Users/judob/dev/dev26/sunsigma/.claude/docs/design-system.md` (Branding visual guidelines)
2.  `c:/Users/judob/dev/dev26/sunsigma/.claude/docs/sigmasuncontext.md` (Site files structure, asset list)
3.  `c:/Users/judob/dev/dev26/sunsigma/.claude/skills/frontend-desginer/SKILLS.md` (Design principles and tone guidelines)

---

## 4. Detailed Implementation Instructions

### A. Global Styles (`src/app/globals.css`)
Update the CSS file to establish the Tailwind v4 theme mapping brand colors:
*   `--color-primary`: `#F67011` (Brand Orange)
*   `--color-primary-hover`: `#FF8C00`
*   `--color-secondary`: `#E9631C` (Deep Orange)
*   `--color-accent-gold`: `#C9A227` (Gold highlight)
*   `--color-background`: `#FFFFFF`
*   `--color-surface`: `#F5F5F5` (Light gray background/panel wash)
*   `--color-text`: `#020003` (Near-black body copy)
*   `--color-text-muted`: `#7F7F7F` (Gray captions)
*   `--color-border`: `#C8C8C8` (Borders and dividers)
*   `--color-black`: `#000000`
*   `--color-white`: `#FFFFFF`
Establish typography presets using Arial as base. Add the `@keyframes fade-up` page-reveal keyframes and navigation link underline sliding CSS effects.

### B. Layout and Navigation Header / Footer
*   **Root Layout (`src/app/layout.tsx`)**: Import `Header` and `Footer`. Structure the shell to make the content stretch the full height (`min-h-screen flex flex-col`). Setup metadata indicating the title "Sigmasun Technologies - Special Purpose Machines & Automation Solutions" and appropriate description.
*   **Header (`src/components/Header.tsx`)**: Sticky nav header (`sticky top-0 z-50 bg-[#F5F5F5] border-b border-[#C8C8C8] h-[72px] lg:h-[72px]`).
    *   **Logo Layout**: Combined head-profile logo icon (left) with `SIGMASUN TECHNOLOGIES` in bold, uppercase dark-gray text, and a gold-colored tagline text `LIGHT OF INNOVATIONS` beneath, separated by a thin gold horizontal line. Apply a CSS keyframe transition to slowly rotate the gear graphic icon when the user hovers over the logo block.
    *   **Navbar links** (must match exactly and map to these URLs):
        1. HOME (`/`)
        2. APPLICATIONS (`/applications`)
        3. PROJECTS (`/projects`)
        4. MANUFACTURING FACILITIES (`/manufacturing-facilities`)
        5. VIDEOS (`/videos`)
        6. CASE STUDY (`/case-study`)
        7. EXHIBITIONS (`/exhibitions`)
        8. ABOUT US (`/about-us`)
    *   **Contact Us CTA**: Extreme right side, uppercase, primary orange pill shape button (`CONTACT US →`) pointing to `/contact`.
    *   **Mobile view**: Below `1024px`, collapse links into a hamburger icon. On click, display a clean full-height sliding drawer from the right containing navigation list items with high touch-targets (48px height) and a CTA button at the bottom.
*   **Footer (`src/components/Footer.tsx`)**: Dark footer using `#020003` background and a 4px top border of `--color-primary`. Include:
    *   Left: White-footer variant logo and description: "Sigmasun Technologies is a leading designer, manufacturer, and supplier of customized special-purpose machines and turnkey industrial projects."
    *   Center: Two link columns: (1) "Business Verticals" (Special Purpose Machines, Industrial Automation, Mechatronics, Embedded Systems, HT/LT Electrical Panels); (2) "Quick Navigation" (links to Home, Applications, Projects, Case Study, Exhibitions, About).
    *   Right: Address Details: "Survey No. 14, Dhadage Industrial Estate, Nanded Phata, Sinhagad Road, Pune - 411041", Phone: "+91 9975956171", and Email: "info@sigmasuntechnologies.com".

### C. Home Page (`src/app/page.tsx`)
*   **Hero Section**: Light-gray gradient surface background. Huge display headline: "ENGINEERING EXCELLENCE THROUGH CUSTOM AUTOMATION". Add subtitle: "Designing and manufacturing high-performance Special Purpose Machines, mechatronics systems, and turnkey industrial projects since 2012." Large uppercase primary orange pill button leading to contact form. Set staggered load fade-up animations on text and buttons.
*   **About Section Summary**: 2-column layout. Left: "Precision, Performance, Quality" eyebrow and title. Right: Brief company description explaining their expertise in embedded systems, mechatronics, vision inspection, and consultancy for import substitution.
*   **Business Divisions**: A grid featuring 4 cards highlighting:
    1.  **Special Purpose Machines (SPM)**: Custom-engineered machines for testing, assembly, and process automation.
    2.  **Mechatronics & Vision Inspection**: High-precision automated systems featuring integrated cameras and sensory feeds.
    3.  **Embedded Electronics & PCBs**: Customized circuit design, controller programming, and sensor integration.
    4.  **HT/LT Electrical Panels**: Electrical distribution systems, transformer setups, and control consoles.
*   **Featured Projects Grid**: Displays 3 prominent project cards:
    1.  *Special Logistic Conveyor for Solenoid Coil Potting* (Customer: Cummins, U.S.A.).
    2.  *Pure IT Water Filter Production Plant* (Customer: Hindustan Unilever Ltd., Haridwar).
    3.  *Sari Fall Manufacturing Machine* (Textile industry pioneer).
*   **Inquiry CTA Band**: High-impact orange block: "Have a Custom Automation Requirement? Talk to our engineering specialists in Pune." -> Button linking to `/contact`.

### D. About Us Page (`src/app/about-us/page.tsx`)
*   **Company Narrative**: A descriptive layout detailing the story of Sigmasun Technologies, highlighting their experience in mechanical fabrication, electrical wiring, custom programming, and quality assurance.
*   **Mission & Vision statement cards**: Designed in minimalist borders with orange card-top rules.
*   **Consulting & Import Substitution**: Highlight their capability to re-engineer imported systems locally, reducing client dependency and optimizing overhead.
*   **Contact Information block**: Render office address, mobile number, opening hours, and embed a stylized placeholder contact/map panel.

### E. Applications Page (`src/app/applications/page.tsx`)
*   Create a layout mapping all industry folders under `public/Application/`. Render relevant details and appropriate B2B copy.
*   **Industry Sections**: Implement sections with detailed descriptions for:
    1.  **Aeronautical Engineering** (`public/Application/aeronautic/`): Showcases `airturbine.jpeg`. Copy highlights mechatronics and testing configurations.
    2.  **Laboratory Equipments** (`public/Application/laboratoryequip/`): Maps `membranecasting3.jpeg` and `flow_measument_bench1.jpeg`. Focus on specialized research testing jigs.
    3.  **Laser Marking Systems** (`public/Application/lasermarkingsystem/`): Maps `laser_marking.png` and `table_top_laser_marking_machine-mark_and_tracebility.png`. Discuss product identification and tracking.
    4.  **Industry 4.0** (`public/Application/industry4/`): Maps `industry4.0.jpeg` and `engine_head_laser_marking.jpeg`. Focus on industrial IoT, telemetry, and digital twin systems.
    5.  **Dam Instrumentation** (`public/Application/dam/`): Maps `vibrating_wire_sensor_testing_device.png` and `pcb.jpeg`. Cover geotechnical sensors and PCB calibration rigs.
    6.  **Health Care Devices** (`public/Application/healthcare/`): Maps `ortho1.jpg` and `ortho2.jpg`. Emphasize sterile mechanisms, high-safety structures, and remote operation.
    7.  **Defense Systems** (`public/Application/defensesystem/`): Maps `drone_with_payload.png` and `Ground_penetration_radar.png`. Mention rugged enclosures, PCB testing, and custom actuators.
    8.  **Embedded Electronics** (`public/Application/embeddedelectronic/`): Maps `pcb_diagram.jpg` and `chipboard1.jpg`. Explain circuit routing and programming controllers.
    9.  **Welding / Robots** (`public/Application/robotswelding/`): Maps `Customized_Welding_RobotSystem.png` and other images. Discuss multi-axis robotic arms and safety screens.
    10. **Food & Pharma Industry** (`public/Application/Food & pharma/`): Maps `gas1.jpeg`, `checkweigher_system.png`, and `foodconvory.jpeg` (use URL-escaped space paths: `/Application/Food%20%26%20pharma/...`). Highlight stainless steel washdown standards, sanitary conveyances, and weighing limits.
    11. **Industrial / General** (`public/Application/industrial/`): Maps `saree_manufacturing_machine.jpeg`, `radiator_leak_test_machine.jpeg`, etc.
*   **Empty Folders placeholders**:
    *   *Pick and Place* (`public/Application/robotspick/`) and *Machine Vision* (`public/Application/machineversion/`) are empty on disk. Render a sleek card for each stating: "Customized systems for pick-and-place automation and machine vision inspection are built on request. Reach out to our technical team to discuss requirements."

### F. Projects Page (`src/app/projects/page.tsx` & `src/components/ProjectCard.tsx`)
*   **Aggregation Logic**: Sourced dynamically or via statically mapped array matching the files in `public/Application/`. Render a responsive grid of card elements.
*   **Exact Projects list to build**:
    1.  *Special Logistic Conveyor for Potting of Solenoid Coils* (Client: Cummins, U.S.A.). Sourced image: `public/Application/industrial/radiator_leak_test_machine.jpeg` (or appropriate match). Description: Automated conveyor system featuring integrated potting fixtures, safety sensors, and indexing to streamline solenoid production.
    2.  *Pure IT Water Filter Production Plant* (Client: Hindustan Unilever Ltd., Haridwar). Sourced image: `public/Application/Food & pharma/foodconvory.jpeg`. Description: High-capacity sanitary assembly line for filtration cartridges, integrating check-weighing and leak-testing.
    3.  *Sari Fall Manufacturing Machine* (Textile Innovation). Sourced image: `public/Application/industrial/saree_manufacturing_machine.jpeg`. Description: High-speed textile machine automating edge folding, stitching, and roll winding for fabric rolls.
    4.  *Special Riveting Head with Indexing Table*. Sourced image: `public/Application/robotswelding/Customized_Welding_RobotSystem.png`. Description: Multi-axis pneumatic riveting assembly featuring indexing table for automated component feed.
    5.  *Fully Remote Controlled Battery Operated Orthopedic Operation Table*. Sourced image: `public/Application/healthcare/ortho1.jpg`. Description: Surgical operation table with fully remote actuators, high payload support, and battery backup.
    6.  *Capacitor Testing Machine*. Sourced image: `public/Application/embeddedelectronic/pcb_diagram.jpg`. Description: High-voltage automated screening rig for testing motor capacitor tolerance limits and capacitance values.
    7.  *Diesel Valve Testing Machine*. Sourced image: `public/Application/laboratoryequip/flow_measument_bench1.jpeg`. Description: High-precision hydro-pneumatic testing system checking valve leakage, flow rate, and pressure tolerance.
*   **Filtering Controls**: Add tab chips at the top to filter the grid by tags: "Show All", "Medical", "Automotive", "Textiles", "Electronics", "Food & Pharma".

### G. Manufacturing Facilities Page (`src/app/manufacturing-facilities/page.tsx`)
*   **Overview text**: Detail the plant's production floor in Pune, focusing on assembly, wire harnesses, mechanical layout, and electronic calibration.
*   **Photo section**: Display two key images from `public/Manufacturing Facility/` (URL-encoded space):
    *   `/Manufacturing%20Facility/PCB_yv100_1.jpeg` (caption: "SMT PCB Pick-and-Place line")
    *   `/Manufacturing%20Facility/manufacturing_facility-embedded_electronics.jpeg` (caption: "Electronics Assembly & Calibration Unit")
*   **Capabilities grid**: Display cards for CAD/CAM Engineering, Mechanical fabrication & assembly, Electrical panel wiring and testing, Software programming & debugging.

### H. Videos Page (`src/app/videos/page.tsx`)
*   **YouTube Embed**: Centered section displaying the video from link `https://www.youtube.com/embed/dyGy4pnRcqI`. Ensure the layout wraps the iframe in a 16:9 responsive div (`relative pb-[56.25%] h-0 overflow-hidden w-full max-w-4xl mx-auto rounded-lg shadow-lg`). Add text descriptions explaining that the video captures operational tests of their special-purpose machines prior to dispatch.

### I. Exhibitions Page (`src/app/exhibitions/page.tsx`)
*   **Exhibition Gallery**: Render a 3-column photo grid listing the files under `public/Exibition/` (casing matching exactly the disk directory: `/Exibition/...`):
    *   Images: `/Exibition/exi1.jpg`, `/Exibition/exi2.jpg`, `/Exibition/exi3.png`, `/Exibition/exi4.png`, `/Exibition/exi5.png`, `/Exibition/exi6.png`, `/Exibition/exi7.png`, `/Exibition/exi8.png`, `/Exibition/exi9.png`, `/Exibition/exi10.png`, `/Exibition/photo_20_2026-07-09_19-15-13.jpg`, and `/Exibition/photo_73_2026-07-09_19-15-13.jpg`.
*   **Hover effects**: Card scales out slightly on mouse hover (`scale-[1.03] transition-transform duration-300`).
*   **Lightbox Feature**: Clicking an image opens a modal displaying the image in full size. Esc key or close button resets it.

### J. Case Study Page (`src/app/case-study/page.tsx` & `src/components/CaseStudyViewer.tsx`)
*   **Page list**: Create cards representing:
    *   *Defence Systems Case Study* (`defence_case_study.pdf`)
    *   *Dam Instrumentation Case Study* (`Dam_presentation_case_study.pdf`)
    *   *Industry 4.0 Case Study* (`INDUSTRY 4.pdf`)
    *   *Oxus Generator Concentration Case Study* (`oxus_generator_concentration_case_study.pdf`)
    *   *Sigmasun Company Presentation* (`sigmasun_presentation.pdf`)
    *   *Oxus System Assembly* (`photo_80_2026-07-09_19-15-13.jpg`)
    *   *Oxus System Internals* (`photo_81_2026-07-09_19-15-13.jpg`)
*   **Anti-Download Constraints**:
    *   Do NOT provide download anchors (`<a>` tags with target or href).
    *   Do NOT render PDF inside basic native `<iframe>` or `<embed>` tags that show default print/save toolbars.
*   **Inline Viewer implementation (`src/components/CaseStudyViewer.tsx`)**:
    *   When a user clicks "View", open a modal overlay.
    *   For **images** (`photo_80...`, `photo_81...`): Open a standard lightbox. Disable right-click (`onContextMenu={e => e.preventDefault()}`) and drag (`draggable="false"`).
    *   For **PDFs**: Dynamically load `pdf.js` from CDN (e.g. `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js`) via a `<script>` tag inside `useEffect` (or install `pdfjs-dist` if you prefer). Once loaded, render pages sequentially onto a `<canvas>` element using the canvas rendering context.
    *   Provide custom navigation controls on the modal overlay: "Previous Page", "Next Page", and a page counter indicator (e.g., "Page 1 of 12").
    *   Ensure right-click is disabled on the canvas wrapper, and add `user-select: none` CSS.

### K. Contact Us Page (`src/app/contact/page.tsx`)
*   **Layout**: 2 columns.
    *   Left Column: Contact form taking Name, Company Name, Email, Phone Number, Inquiry Category (e.g., SPM Development, Automation Programming, Electrical Panel, Re-engineering), and Details. Add appropriate focus state rings matching the brand styling (`focus:border-[#F67011] focus:ring-3 focus:ring-[rgba(246,112,17,0.2)]`).
    *   Right Column: Office addresses, phone, official contact emails, and office timings.

---

## 5. Constraints and Coding Guidelines
1.  **Tailwind CSS 4.0 Compatibility**: Use correct variables. Do not use deprecated Tailwind classes.
2.  **No Dark Mode**: Do not code dark-mode variants. Keep pages bright white/surface and gray.
3.  **Url Casing & Typos**:
    *   The `Exhibitions` assets are in a directory named `Exibition` on disk (no 'h' in folder name). Hrefs must reference `/Exibition/exi1.jpg`.
    *   The `Case Study` assets are in a directory named `Case study` (space inside name). Hrefs must use URL encoded format `/Case%20study/...`.
    *   The `Manufacturing Facilities` assets are in a directory named `Manufacturing Facility` (space inside name). Hrefs must use `/Manufacturing%20Facility/...`.
4.  **Accessibility**: Add `aria-expanded` attributes on the mobile menu toggle. Ensure contrast of body text is high. Support `prefers-reduced-motion` in transitions.

---

## 6. Success Criteria
*   The project passes production compilation (`npm run build`) without any TypeScript errors, type inconsistencies, or missing imports.
*   The header nav matches the reference wireframes and behaves correctly.
*   All images load properly across sections.
*   The inline Case Study viewer functions on PDF canvas rendering.
*   The website behaves responsively and works down to mobile screen sizes (320px).

---

## 7. Verification Steps
1.  Verify the setup by compiling with `npm run build`.
2.  Launch the local dev server using `npm run dev` and navigate through all routes, validating layout transitions.
