# Sigmasun Technologies — Design System

**Version:** 1.0  
**Last updated:** July 2026  
**Scope:** Marketing website revamp (`sigmasuntechnologies.com`)  
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · CSS variables in `globals.css`

This document is the single source of truth for visual design, component patterns, motion, and implementation rules. Reference assets:

| Asset | Path | Purpose |
| ----- | ---- | ------- |
| Raw project context | `.claude/docs/context_sigmsun_raw.md` | Brand colors, typography, component rules |
| Navigation reference | `.claude/docs/reference/navreference.png` | Header layout, logo, nav links, CTA |
| Style guide reference | `.claude/docs/reference/designreference.png` | Buttons, tabs, inputs, cards, type scale |

---

## 1. Design principles

1. **Light and confident** — Predominantly white backgrounds with orange accents. No dark-mode auto-inversion unless explicitly requested.
2. **Industrial clarity** — Clean sans-serif typography, generous whitespace, and high-contrast CTAs suited to a B2B engineering/manufacturing brand.
3. **Consistency over novelty** — Reuse tokens and components; avoid one-off colors or spacing.
4. **Purposeful motion** — Animations reinforce hierarchy and feedback; they never distract from content.
5. **Accessible by default** — Minimum 4.5:1 contrast for body text; visible focus states; respect `prefers-reduced-motion`.

---

## 2. Brand identity

### 2.1 Logo & wordmark

The header logo (see `navreference.png`) combines:

- **Icon:** Stylized head profile in dark gray with interlocking gears (orange + gray) and circuit-line accents below.
- **Wordmark:** `SIGMASUN` / `TECHNOLOGIES` — bold, all-caps, dark gray.
- **Tagline:** `LIGHT OF INNOVATIONS` — smaller, all-caps, gold accent, separated by a thin gold horizontal rule.

| Element | Token / value | Notes |
| ------- | ------------- | ----- |
| Wordmark color | `--color-text` | Near-black `#020003` |
| Tagline color | `--color-accent-gold` | Gold `#C9A227` (approx. from reference) |
| Tagline rule | 1px solid `--color-accent-gold` | Full width under wordmark block |
| Logo min height | 48px (mobile) · 56px (desktop) | Maintain aspect ratio; never stretch |

**Asset path:** Place logo SVG/PNG under `public/images/` and reference from web root (e.g. `/images/logo.svg`).

### 2.2 Voice & tone (visual)

- Uppercase for navigation labels, section eyebrows, and primary CTAs.
- Sentence case for long-form body copy and form labels.
- Numbers and units use tabular figures where available.

---

## 3. Color system

### 3.1 Core palette

All colors are defined as CSS custom properties in `src/app/globals.css` and exposed to Tailwind via `@theme inline`.

| Token | Hex | Role | Usage |
| ----- | --- | ---- | ----- |
| `--color-primary` | `#F67011` | Brand orange | Primary buttons, active nav, highlights, toggle on-state, key icons |
| `--color-primary-hover` | `#FF8C00` | Primary hover | Button/link hover, pressed CTA |
| `--color-secondary` | `#E9631C` | Deep orange | Secondary buttons, active tabs, strong headings, gradient accents |
| `--color-accent-gold` | `#C9A227` | Gold accent | Logo tagline, decorative rules, premium highlights |
| `--color-background` | `#FFFFFF` | Page background | Default page canvas |
| `--color-surface` | `#F5F5F5` | Light gray surface | Header bar, alternate sections, card hover wash |
| `--color-text` | `#020003` | Primary text | Headings, body, nav links |
| `--color-text-muted` | `#7F7F7F` | Mid gray | Captions, labels, placeholders, secondary metadata |
| `--color-border` | `#C8C8C8` | Border gray | Inputs, dividers, card outlines |
| `--color-black` | `#000000` | Tertiary actions | Third button variant, primary tab (style guide) |
| `--color-white` | `#FFFFFF` | On-primary text | Text on orange/black fills |

### 3.2 Semantic aliases

| Semantic token | Maps to | Use when |
| -------------- | ------- | -------- |
| `--color-cta` | `--color-primary` | Contact / inquiry actions |
| `--color-link` | `--color-primary` | Inline text links |
| `--color-link-hover` | `--color-primary-hover` | Link hover |
| `--color-error` | `#DC2626` | Form validation (reserve; not in brand sheet) |
| `--color-success` | `#16A34A` | Confirmations (reserve) |

### 3.3 Color usage rules

- **Do:** Use white (`--color-background`) for ~70% of page area; orange for actions and emphasis only.
- **Do:** Use `--color-surface` for header and banded sections (hero secondary areas, footer top strip).
- **Don't:** Place orange body text on white for paragraphs (links and labels only).
- **Don't:** Enable `prefers-color-scheme: dark` inversion for this marketing site.

### 3.4 Gradients (optional accents)

Use sparingly on hero overlays or section dividers:

```css
--gradient-brand: linear-gradient(135deg, #F67011 0%, #E9631C 100%);
--gradient-surface: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
```

### 3.5 Tailwind / CSS implementation

```css
/* src/app/globals.css — canonical token block */
:root {
  --color-primary: #F67011;
  --color-primary-hover: #FF8C00;
  --color-secondary: #E9631C;
  --color-accent-gold: #C9A227;
  --color-background: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-text: #020003;
  --color-text-muted: #7F7F7F;
  --color-border: #C8C8C8;
  --color-black: #000000;
  --color-white: #FFFFFF;
}

@theme inline {
  --color-primary: var(--color-primary);
  --color-primary-hover: var(--color-primary-hover);
  --color-secondary: var(--color-secondary);
  --color-accent-gold: var(--color-accent-gold);
  --color-background: var(--color-background);
  --color-surface: var(--color-surface);
  --color-text: var(--color-text);
  --color-text-muted: var(--color-text-muted);
  --color-border: var(--color-border);
  --font-sans: Arial, Helvetica, sans-serif;
}
```

---

## 4. Typography

### 4.1 Font families

| Context | Family | Fallback |
| ------- | ------ | -------- |
| Marketing pages (default) | **Arial** | Helvetica, sans-serif |
| Optional marketing accent | **Roboto** | Arial, sans-serif |
| Code / mono (if needed) | Geist Mono | monospace |

Body default is already set in `globals.css`: `font-family: Arial, Helvetica, sans-serif`.

### 4.2 Type scale (from style guide)

| Role | Size | Weight | Line height | Letter spacing | Tailwind utility |
| ---- | ---- | ------ | ----------- | -------------- | ---------------- |
| Title | 20px | 500 (Medium) | 1.3 | 0 | `text-xl font-medium` |
| Subtitle | 14px | 700 (Bold) | 1.4 | 0.02em | `text-sm font-bold` |
| Body | 14px | 400 (Regular) | 1.6 | 0 | `text-sm` |
| Button | 14px | 500 (Medium) | 1 | 0.06em | `text-sm font-medium tracking-wide` |
| Caption | 12px | 400 (Regular) | 1.5 | 0.02em | `text-xs` |
| Small / underline | 10px | 400 (Regular) | 1.4 | 0.04em | `text-[10px]` |

### 4.3 Marketing display scale (web extensions)

For hero and section headings beyond the mobile style guide:

| Level | Size (desktop) | Size (mobile) | Weight |
| ----- | -------------- | ------------- | ------ |
| Display | 48px | 32px | 700 |
| H1 | 36px | 28px | 700 |
| H2 | 28px | 22px | 600 |
| H3 | 22px | 18px | 600 |
| H4 | 18px | 16px | 500 |

### 4.4 Text styles

- **Nav links:** 12–13px, medium, uppercase, `--color-text`.
- **CTA button:** 14px, medium, uppercase, white on primary.
- **Section eyebrow:** 12px, bold, uppercase, `--color-primary` or `--color-accent-gold`.
- **Card label:** 12px caption, `--color-text-muted`.
- **Card value:** 14px body, `--color-text`, right-aligned in key-value rows.

---

## 5. Spacing & layout

### 5.1 Spacing scale (4px base)

| Token | Value | Typical use |
| ----- | ----- | ----------- |
| `--space-1` | 4px | Tight icon gaps |
| `--space-2` | 8px | Inline padding |
| `--space-3` | 12px | Compact component padding |
| `--space-4` | 16px | Card padding, form gaps |
| `--space-5` | 20px | Button horizontal padding |
| `--space-6` | 24px | Section inner padding |
| `--space-8` | 32px | Between components |
| `--space-10` | 40px | Section vertical rhythm |
| `--space-12` | 48px | Large section gaps |
| `--space-16` | 64px | Hero vertical padding |
| `--space-20` | 80px | Major section breaks |

### 5.2 Layout grid

| Breakpoint | Min width | Container max | Side padding |
| ---------- | --------- | ------------- | ------------ |
| `sm` | 640px | 100% | 16px |
| `md` | 768px | 100% | 24px |
| `lg` | 1024px | 1200px | 32px |
| `xl` | 1280px | 1280px | 40px |
| `2xl` | 1536px | 1400px | 48px |

- Content max width: **1280px** centered (`mx-auto`).
- Section vertical padding: **64px** desktop · **40px** mobile.

### 5.3 Border radius

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--radius-sm` | 6px | Inputs, small chips |
| `--radius-md` | 12px | Cards, tabs |
| `--radius-lg` | 16px | Large cards, modals |
| `--radius-full` | 9999px | Pill buttons, CTA |

### 5.4 Shadows

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--shadow-sm` | `0 1px 2px rgba(2, 0, 3, 0.06)` | Subtle lift |
| `--shadow-md` | `0 4px 12px rgba(2, 0, 3, 0.08)` | Cards at rest |
| `--shadow-lg` | `0 8px 24px rgba(2, 0, 3, 0.12)` | Cards on hover, dropdowns |
| `--shadow-cta` | `0 4px 14px rgba(246, 112, 17, 0.35)` | Primary button emphasis |

---

## 6. Components

### 6.1 Header / navigation

Reference: `navreference.png`

#### Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Logo + tagline]     HOME  APPLICATIONS  …  ABOUT US          [CONTACT US →] │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Property | Value |
| -------- | ----- |
| Position | `sticky` top `0`, `z-50` |
| Background | `--color-surface` (`#F5F5F5`) |
| Height | 72px desktop · 64px mobile |
| Border bottom | 1px solid `--color-border` (optional, subtle) |
| Inner layout | Flex, space-between, align center, container max-width |

#### Nav links (canonical order)

1. HOME → `/`
2. APPLICATIONS → `/applications`
3. PROJECTS → `/projects`
4. MANUFACTURING FACILITIES → `/manufacturing-facilities`
5. VIDEOS → `/videos`
6. CASE STUDY → `/case-study`
7. EXHIBITIONS → `/exhibitions`
8. ABOUT US → `/about-us`

#### Nav link styles

| State | Color | Other |
| ----- | ----- | ----- |
| Default | `--color-text` | Uppercase, 12–13px, medium |
| Hover | `--color-primary` | Underline slides in (see §7) |
| Active / current route | `--color-primary` | 2px bottom border or underline |
| Focus | `--color-primary` | `outline: 2px solid var(--color-primary); outline-offset: 2px` |

#### CTA — Contact Us

| Property | Value |
| -------- | ----- |
| Label | `CONTACT US` + right arrow `→` |
| Variant | Primary pill button |
| Background | `--color-primary` |
| Text | White, uppercase, 14px medium |
| Padding | `12px 24px` |
| Border radius | `--radius-full` |
| Link target | `/contact` or `#contact` |

#### Mobile navigation

- Breakpoint: below `lg` (1024px).
- Hamburger icon right; logo left.
- Full-height slide-in panel from right, `--color-background`, links stacked with 48px tap targets.
- CTA pinned to bottom of drawer as full-width primary button.

---

### 6.2 Buttons

Reference: `designreference.png`

#### Variants

| Variant | Background | Border | Text | Use |
| ------- | ---------- | ------ | ---- | --- |
| **Primary** | `--color-primary` | none | white | Main actions (Submit, Contact Us, Learn more) |
| **Primary hover** | `--color-primary-hover` | none | white | Hover/focus state |
| **Secondary** | white | 2px `--color-primary` | `--color-primary` | Alternate actions |
| **Secondary hover** | `--color-surface` | 2px `--color-primary-hover` | `--color-primary-hover` | Hover |
| **Tertiary** | `--color-black` | none | white | Rare emphasis (style guide “third button”) |
| **Ghost** | transparent | none | `--color-primary` | Text-adjacent actions |

#### Shared specs

| Property | Value |
| -------- | ----- |
| Font | 14px / 500 / uppercase / `tracking-wide` |
| Border radius | `--radius-full` (pill) |
| Min height | 44px (touch target) |
| Padding | `12px 28px` (default) · `10px 20px` (compact) |
| Disabled | 50% opacity, `pointer-events: none` |
| Icon gap | 8px between label and arrow/icon |

#### Button with arrow (CTA pattern)

```
[  CONTACT US  →  ]
```

Arrow animates 4px right on hover (see §7.3).

---

### 6.3 Tabs

| State | Background | Border | Text |
| ----- | ---------- | ------ | ---- |
| **Active (primary)** | `--color-secondary` or `--color-primary` | none | white |
| **Inactive** | white / transparent | 1px `--color-primary` | `--color-primary` |

| Property | Value |
| -------- | ----- |
| Border radius | `--radius-md` (12px) |
| Padding | `10px 20px` |
| Font | 14px bold subtitle style |
| Gap between tabs | 8px |

Panel content cross-fades on tab change (see §7.4).

---

### 6.4 Cards

Reference: style guide card modules (750 MB / auto renew examples).

#### Default card

| Property | Value |
| -------- | ----- |
| Background | `--color-background` (white) |
| Border | 1px solid `--color-border` **or** `--shadow-md` only |
| Border radius | `--radius-md` (12px) |
| Padding | 20px (mobile) · 24px (desktop) |
| Hover | `--shadow-lg`, `translateY(-2px)` |

#### Card anatomy

```
┌──────────────────────────────────────┐
│  Title / metric (bold)          [⌄]  │  ← optional chevron for accordion
│  ─────────────────────────────────── │
│  Label (muted)          Value (text) │
│  Label (muted)          Value (text) │
│  ─────────────────────────────────── │
│  [optional toggle / actions]         │
│                    [ Submit ]          │
└──────────────────────────────────────┘
```

- **Metric heading:** Title or H3 scale, bold.
- **Key-value rows:** Flex, space-between; label `--color-text-muted`, value `--color-text`.
- **Accordion:** Chevron rotates 180° when expanded; content height animates (see §7.5).

#### Project / capability card (marketing)

- Optional top image (16:9), white body, orange “View project” ghost or secondary button.
- Entire card clickable with hover lift.

---

### 6.5 Form inputs

| Element | Style |
| ------- | ----- |
| Label | Caption 12px, `--color-text-muted`, above field, 4px margin bottom |
| Input | White bg, 1px `--color-border`, `--radius-sm`, padding `12px 16px`, 14px body |
| Placeholder | `--color-text-muted` at 70% opacity |
| Focus | Border `--color-primary`, ring `0 0 0 3px rgba(246, 112, 17, 0.2)` |
| Error | Border `#DC2626`, error caption below |

Textarea: min-height 120px, vertical resize allowed.  
Select: same border/radius as input; custom chevron optional.

---

### 6.6 Toggle switch

As shown in style guide (“auto renew”):

| State | Track | Thumb |
| ----- | ----- | ----- |
| Off | `--color-border` / light gray | white circle |
| On | `--color-primary` | white circle, translate right |

- Size: 44×24px track, 20px thumb.
- Transition: 200ms ease on thumb slide and track color.

---

### 6.7 Footer

- Background: `--color-text` (`#020003`) or white with top border — prefer **dark footer** for contrast on marketing pages.
- Text: white / `--color-text-muted` on dark.
- Links: white, hover `--color-primary`.
- Accent strip optional: 4px top border `--color-primary`.

---

### 6.8 Section patterns

| Pattern | Background | Notes |
| ------- | ---------- | ----- |
| Default | white | Standard content |
| Band | `--color-surface` | Alternating sections |
| Hero | white or subtle `--gradient-surface` | Large display type, primary CTA |
| CTA band | `--color-primary` | White text, inverse secondary button (white outline) |

---

### 6.9 Imagery & media

- **Asset root:** `public/images/` (and legacy `public/sigmasum_resource/` where applicable).
- **Always use web-root paths:** `/images/...`, never relative `./`.
- **Border radius on photos:** `--radius-md` for inline; full bleed allowed in heroes.
- **Overlay:** Dark gradient `rgba(2,0,3,0.5)` on hero images for text legibility.

---

## 7. Motion & animation

Animations should feel **precise and industrial** — quick, ease-out, no bouncy overshoot unless noted.

### 7.1 Global motion tokens

| Token | Value |
| ----- | ----- |
| `--duration-fast` | 150ms |
| `--duration-normal` | 250ms |
| `--duration-slow` | 400ms |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |

**Reduced motion:** Wrap all non-essential animation in:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 7.2 Page load — staggered reveal

Apply to hero and section blocks on first paint:

| Element | Animation | Delay |
| ------- | --------- | ----- |
| Hero headline | Fade up `opacity 0→1`, `translateY(16px→0)` | 0ms |
| Hero subcopy | Same | 80ms |
| Hero CTA | Same | 160ms |
| Section headings | Fade up | 0ms per section (Intersection Observer) |

Duration: `--duration-slow`, easing: `--ease-out`.  
Trigger section animations when **20%** of section enters viewport (once).

### 7.3 Navigation interactions

| Interaction | Behavior |
| ----------- | -------- |
| **Link hover** | Color → `--color-primary` over `--duration-fast`; pseudo-element underline scales `scaleX(0→1)` from left |
| **Link active** | Underline persistent, color primary |
| **CTA hover** | Background → `--color-primary-hover`, `scale(1.02)`, `--shadow-cta` |
| **CTA arrow** | `translateX(0→4px)` on hover |
| **Header scroll** | After 80px scroll: add `--shadow-sm`, optional height shrink 72px→64px over 200ms |
| **Logo gears** | On logo hover: slow 8s linear infinite rotation on gear icon only (`transform: rotate`); pause under reduced motion |

### 7.4 Button feedback

| State | Effect |
| ----- | ------ |
| Hover | Background shift, slight scale `1.02` |
| Active | `scale(0.98)` |
| Focus-visible | 2px outline `--color-primary`, offset 2px |
| Primary shimmer (optional) | `:hover` — linear gradient sweep across button over 600ms, low opacity white overlay |

### 7.5 Cards & accordions

| Interaction | Behavior |
| ----------- | -------- |
| Card hover | `translateY(-2px)`, shadow `--shadow-sm` → `--shadow-lg`, `--duration-normal` |
| Accordion expand | `grid-template-rows: 0fr → 1fr` or height transition 250ms; chevron `rotate(0→180deg)` |
| Image zoom | Inner image `scale(1→1.05)` on card hover, overflow hidden on container |

### 7.6 Tabs & panels

- Tab switch: active pill background cross-fade 200ms.
- Panel: `opacity 0→1` + `translateY(8px→0)` over `--duration-normal` when tab changes.

### 7.7 Scroll-linked effects

- **Parallax (subtle):** Hero background image moves at 0.5× scroll speed; disable on mobile and reduced motion.
- **Progress indicator (optional):** 3px top bar in `--color-primary`, width = scroll %.

### 7.8 Micro-interactions

| Element | Animation |
| ------- | --------- |
| Form input focus | Border color transition + ring fade in 150ms |
| Toggle | Thumb slide 200ms `--ease-in-out` |
| Toast / alert | Slide in from top-right, fade out after 4s |
| Skeleton loader | Shimmer gradient across `--color-surface` for loading states |

### 7.9 Implementation notes (Tailwind + CSS)

Prefer Tailwind utilities where possible; use CSS keyframes in `globals.css` for reusable animations:

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-fade-up {
  animation: fade-up var(--duration-slow) var(--ease-out) both;
}

.nav-link::after {
  content: '';
  display: block;
  height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-fast) var(--ease-out);
}

.nav-link:hover::after,
.nav-link[aria-current='page']::after {
  transform: scaleX(1);
}
```

For React, use `IntersectionObserver` (or a light library) for scroll-triggered `animate-fade-up` classes.

---

## 8. Iconography

- **Style:** Line icons, 1.5–2px stroke, rounded caps.
- **Sizes:** 16px inline · 20px buttons · 24px nav mobile · 32px feature blocks.
- **Color:** Inherit text color; primary actions use white on orange or `--color-primary` on white.
- **Chevrons:** Accordion and “read more” — rotate on state change (§7.5).
- **Arrow (CTA):** Unicode `→` or SVG, 16px, aligns with button cap height.

---

## 9. Accessibility checklist

| Requirement | Implementation |
| ----------- | -------------- |
| Contrast | Body text ≥ 4.5:1 on white; large text ≥ 3:1 |
| Focus | Visible on all interactive elements; never `outline: none` without replacement |
| Touch targets | Minimum 44×44px |
| Motion | Honor `prefers-reduced-motion` |
| Nav | `aria-current="page"` on active link; mobile menu `aria-expanded` |
| Images | Meaningful `alt` text; decorative images `alt=""` |
| Forms | Labels associated with inputs; errors announced via `aria-invalid` + `aria-describedby` |

---

## 10. Z-index scale

| Layer | Value |
| ----- | ----- |
| Base | 0 |
| Dropdown | 10 |
| Sticky header | 50 |
| Mobile drawer | 60 |
| Modal overlay | 70 |
| Toast | 80 |

---

## 11. Component → token quick reference

| Component | Background | Text | Border | Radius | Shadow |
| --------- | ---------- | ---- | ------ | ------ | ------ |
| Page | `--color-background` | `--color-text` | — | — | — |
| Header | `--color-surface` | `--color-text` | bottom optional | — | on scroll `--shadow-sm` |
| Primary button | `--color-primary` | white | — | full | `--shadow-cta` |
| Secondary button | white | `--color-primary` | 2px primary | full | — |
| Card | white | `--color-text` | `--color-border` | md | md → lg hover |
| Input | white | `--color-text` | `--color-border` | sm | focus ring |
| Active tab | `--color-primary` | white | — | md | — |
| Footer (dark) | `--color-text` | white | top 4px primary | — | — |

---

## 12. File & implementation map

| Concern | Location |
| ------- | -------- |
| CSS variables & keyframes | `src/app/globals.css` |
| Layout shell + header | `src/app/layout.tsx`, `src/components/` (as created) |
| Page content | `src/app/**/page.tsx` |
| Images | `public/images/` |
| Design references | `.claude/docs/reference/` |

When implementing any UI, **read this file and `context_sigmsun_raw.md` first**, then match components to the patterns above. Do not introduce colors, fonts, or motion outside this system without updating this document.

---

## 13. Changelog

| Version | Date | Notes |
| ------- | ---- | ----- |
| 1.0 | Jul 2026 | Initial system from context doc, nav reference, and style guide |
