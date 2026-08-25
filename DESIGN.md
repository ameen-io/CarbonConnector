---
name: "Integration Discovery"
description: "A light operational workspace skeleton for integration discovery."
colors:
  ink: "#15213b"
  muted: "#64708a"
  line: "#dce2eb"
  soft-line: "#edf0f5"
  surface: "#ffffff"
  canvas: "#f7f8fb"
  accent: "#315fe8"
  accent-soft: "#eef2ff"
  disabled-text: "#8b95a9"
  dashed-line: "#bfc8d9"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.5
  heading:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body-large:
    fontSize: "1.05rem"
  body-small:
    fontSize: "0.92rem"
  metadata:
    fontSize: "0.86rem"
  utility:
    fontSize: "0.82rem"
  status:
    fontSize: "0.78rem"
  display-compact:
    fontSize: "2.3rem"
rounded:
  container: "14px"
  control: "9px"
  icon-tile: "12px"
  brand-mark: "7px"
  micro: "1px"
components:
  disabled-action-button:
    backgroundColor: "#e8ebf1"
    textColor: "#8b95a9"
    rounded: "9px"
    padding: "10px 16px"
  workflow-container:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.container}"
  empty-workspace:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.container}"
---

# Design System: Integration Discovery

## Overview

**Creative North Star: "Light Technical Workspace"**

The current interface is a light, operational web workspace. It uses a cool canvas, dark ink typography, fine dividers, and a single cobalt accent to separate structural content from the one visual emphasis. The shell is deliberately sparse: a compact top bar, a large heading, an empty state, and framed workflow content make the first screen readable without visual decoration or simulated results.

**Key Characteristics:**

- A wide, centered desktop frame that reduces to a single-column stack on narrow screens.
- Flat white surfaces defined by borders and dividers rather than shadows.
- Cobalt appears in the document icon and numbered workflow markers; the rest of the interface remains ink and muted neutral.

**The Evidence-First Rule.** Preserve the quiet empty-state treatment and restrained visual hierarchy; this built skeleton does not use charts, metrics, or result-like visualizations.

## Colors

### Primary

- **Cobalt accent:** Used for the document icon and circular workflow numbers, with its soft companion as their background.

### Neutral

- **Ink:** The primary text and brand-mark color.
- **Muted text:** Supporting copy, status text, version text, and footer metadata.
- **Canvas:** The page background behind all content sections.
- **Surface:** White empty-state and workflow containers.
- **Structural line:** Solid section, container, and grid dividers; the softer line token is defined for lighter structural use.

**The One-Accent Rule.** Reserve the accent pair for small informative markers and icons, not for full-surface decoration.

## Typography

**Display Font:** System sans-serif stack.

**Body Font:** The same system sans-serif stack.

**Character:** Typography is compact and utilitarian, with bold, tightly tracked headings and comfortably spaced supporting text.

### Hierarchy

- **Display:** The page title uses the display role and balances across lines.
- **Section heading:** Section titles use the heading role.
- **Item title:** Workflow item titles use a one-rem, tightly tracked bold treatment.
- **Body:** Default text uses the body role; supporting workflow copy is reduced to 0.92rem and deliverable metadata to 0.86rem.
- **Utility label:** Version and status text use 0.82rem and 0.78rem respectively.

**The Tight-Heading Rule.** Keep display, section, brand, and item headings visibly tighter than body copy through the existing negative letter spacing.

## Layout

The shared top bar, main content, and footer use a centered container capped at 1120px with 24px side gutters on larger screens. The top bar is 76px high; main content begins with 72px of top padding and uses large vertical intervals between the heading, empty state, workflow, and deliverables.

The desktop workflow and deliverables use three equal columns. At 760px and below, the section heading, workspace heading, and footer become block layouts, and both grids become a single vertical list. The content gutters reduce to 16px. At 480px and below, the top bar is 64px high, the version label is hidden, and the empty state becomes more compact.

**The Framed-Grid Rule.** Use full-width framed groups for related operational items; make their column separators become horizontal separators when the layout stacks.

## Elevation & Depth

The implementation uses no shadows. Depth comes from the pale canvas behind white surfaces, solid structural borders, and the dashed outline around the empty state.

**The Flat-Surface Rule.** Keep resting surfaces flat; use tonal contrast and hairline borders to show grouping.

## Shapes

Primary content containers share a gently rounded 14px corner. The empty state uses a dashed border, while the workflow frame uses a solid border with internal dividers. Small controls are more compactly rounded: the disabled action button uses 9px corners, the document-icon tile uses 12px corners, and the compact brand mark uses 7px corners.

Circular step markers are the only fully round recurring shape. The brand mark is a small dark rounded square containing three white vertical bars.

## Components

### Navigation

The top bar is a single horizontal row with the brand mark and label on the left and a muted version label on the right. It uses a lower divider and no filled background distinct from the canvas.

### Buttons

- **Character:** The only button shown is an unavailable action, presented as a muted filled control.
- **Disabled action:** Uses the documented disabled-action-button token and a not-allowed cursor. No enabled, hover, active, or focus styling is implemented in this skeleton.

### Cards / Containers

- **Empty workspace:** A white, dashed-outline panel with centered document icon, title, and constrained supporting copy.
- **Workflow container:** A white, solid-outline three-column group with 14px outer corners and internal dividers.
- **Deliverable list:** A border-led grid with no enclosing card background; each item is separated by horizontal rules and, on desktop, selected vertical rules.

### Status Markers

- **Workflow number:** Small circular accent-soft marker with cobalt bold numerals.
- **Status text:** Muted, small inline text beneath each workflow description.

## Do's and Don'ts

### Do:

- **Do** use the centered container and the existing 24px desktop / 16px compact side-gutter pattern.
- **Do** communicate grouping through white surfaces, thin borders, and dividers rather than elevation.
- **Do** keep empty and unavailable states visibly muted, including the disabled action treatment.
- **Do** retain the three-column-to-one-column responsive change for equivalent grouped content.

### Don't:

- **Don't** introduce shadows as a default grouping mechanism.
- **Don't** use the cobalt accent as a large background or a second primary text color.
- **Don't** represent unimplemented work with fabricated results, data visualizations, or active-looking controls.
