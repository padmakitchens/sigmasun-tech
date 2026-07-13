 **Read this file first.** This document captures project history, goals, design system, architecture, and workflow for AI assistants (Claude) and future development sessions.
## 1. Project Overview

| Field                    | Value                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Project**              | Revamp of [sigmasuntechnologies.com](https://sigmasuntechnologies.com/)                                 |
| **Repo**                 | `sigmasun` — Next.js website                                                                            |
| **Goal**                 | Replace the existing WordPress site with a modern, fast, maintainable company website                   |
| **Developer experience** | Beginner with Next.js, TypeScript, and React — explain changes clearly, prefer simple incremental steps |
### Company (source content)

**Sigmasun Technologies** — Pune, India. Designs, manufactures, and supplies special-purpose machines. Expertise in mechatronics, automation, vision inspection, embedded systems, plastic injection molding, metal castings, electrical panels, and consultancy.

**Contact**
- Address: Survey No.:14, Dhadage Industrial Estate, Nanded Phata, Sinhagad Road, Pune 411041
- Phone: +91 9405607871

### Tech Stack

| Layer | Choice | Notes |

|---|---|---|

| Framework | **Next.js 16** | App Router (`app/` directory) |

| UI | **React 19** | Functional components only |

| Language | **TypeScript** | Copy patterns from existing files; types are optional for simple components |

| Styling | **Tailwind CSS v4** + `globals.css` | Use CSS variables for brand colors |

| Fonts | Geist (default) + **Arial** for body (style guide) | Roboto preferred for marketing pages |


# Design System 
Orange(hex:#F67011) and white are the primary brand color 

### Color palette
Define and use these CSS variables (in `app/globals.css`):


| Token                 | Role          | Hex     | Usage                                                                     |
| --------------------- | ------------- | ------- | ------------------------------------------------------------------------- |
| --color-primary       | Primary       | #F67011 | Header, primary button, highlights, active state, toggle animation effect |
| --color-primary-hover | Primary hover | #FF8C00 | Button/link, hover                                                        |
| --color-secondary     | Secondary     | #E9631C | Secondary buttons, primary tabs, strong headings                          |
| --color-background    | Background    | #FFFFFF | Page background                                                           |
| --color-surface       | light gray    | #F5F5F5 | Section background, card files                                            |
| --color-text          | Body text     | #020003 | Main text (near-black)                                                    |
| --color-text-muted    | text mid gray | #7F7F7F | Captions, labels, secondary text                                          |
| --color-border        | Border gray   | #C8C8C8 | inputs, dividers, card, borders                                           |
**Do not** use dark-mode auto-inversion for this marketing site unless explicitly requested. Keep a consistent light theme with orange + white. most of the website should be white with orange buttons and elements,


### Typography (style guide)

  **font**-Arial

		| Role | Size | Weight |

| Title | 20px | Medium (500) |

| Subtitle | 14px | Bold (700) |

| Body | 14px | Regular (400) |

| Button | 14px | Medium (500) |

| Caption | 12px | Regular (400) |

| Small / underline | 10px | Regular (400) |




### UI components (style guide patterns)

  

**Buttons**

- **Primary:** orange background, white text, rounded (`rounded-lg` or pill `rounded-full`)

- **Secondary:** white background, orange border, orange text

- **Tertiary:** white text , orange round border white white background

**Tabs**
- **Active tab** : orange background , white text
- **inactive tab**: orange text , orange border and white/transparent background

**Cards**

- White background, subtle border or shadow, rounded corners

- Labels left, values right where applicable

**Inputs**
- Border gray outline, rounded corners, label above in muted gray

## 4. Assets & Images

  

**All project images live in:**

  

```

public/sigmasum_resource/

```

  

**Always reference assets from the web root** (not relative `./` paths):

```
public/images

```


# Site Structure & Navigation

### Navbar links (canonical URLs)

