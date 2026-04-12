# Design System Specification: The Sovereign Architect

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Sovereign Architect."** 

In the high-stakes world of global grant management, precision is not a feature—it is a requirement. This system moves away from the "cluttered dashboard" trope and toward a high-end editorial experience. We treat data as a prestigious asset. By utilizing intentional asymmetry, expansive breathing room, and a sophisticated layering of surfaces, we create a platform that feels autonomous, intelligent, and authoritative. 

The goal is to shift the user’s perception from "processing data" to "overseeing a global mission." We achieve this through an editorial approach to layout, where high-contrast typography scales and the absence of traditional structural lines create a sense of infinite, organized space.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
We do not define space with boxes; we define it with light and depth.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off the UI. Containers and sections must be defined solely through background color shifts. For example, a `surface-container-low` component should sit directly on a `surface` background. 

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of premium materials.
*   **Base:** `surface` (#fcf8fa) — The foundation of the application.
*   **The Inset:** `surface-container-low` (#f6f3f5) — Used for the primary navigation sidebar and secondary content areas.
*   **The Focus:** `surface-container-lowest` (#ffffff) — Reserved for the "Primary Work Surface" (e.g., the grant application details or data tables). This creates a "sheet of paper" effect that draws the eye.
*   **The Highlight:** `surface-container-highest` (#e4e2e4) — Used for interactive elements like hover states or active selection backgrounds.

### The Glass & Gradient Rule
To add "soul" to the precision, main CTAs and global stats cards should utilize subtle linear gradients:
*   **Primary Action Gradient:** From `primary_container` (#131b2e) to `on_primary_fixed_variant` (#3f465c).
*   **Glassmorphism:** Floating modals or dropdown menus must use a semi-transparent `surface_container_lowest` with a `backdrop-blur` of 12px-20px. This ensures the global context of the platform is never lost.

---

## 3. Typography: Editorial Authority
We pair **Manrope** (Display/Headline) with **Inter** (Body/Label) to balance character with clinical precision.

*   **Display & Headlines (Manrope):** These are the "Editorial Voice." Use `display-lg` (3.5rem) for high-level global metrics and `headline-md` (1.75rem) for page titles. The wide tracking and geometric curves of Manrope signal modern authority.
*   **Title & Body (Inter):** These are the "Functional Voice." `body-md` (0.875rem) is the workhorse for grant data. The high x-height of Inter ensures that even dense tables remain legible during long-form reviews.
*   **Labels (Inter):** Use `label-sm` (0.6875rem) in all-caps with +5% letter spacing for metadata headers (e.g., "GRANT ID" or "STATUS"). This mimics the look of high-end financial reports.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "web-standard." We use **Ambient Shadows** and **Tonal Stacking**.

*   **The Layering Principle:** Depth is achieved by placing a `surface-container-lowest` card on a `surface-container-low` background. This creates a natural 2dp lift without a single pixel of shadow.
*   **Ambient Shadows:** When a card must float (e.g., a critical "Go/No-Go" summary), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(19, 27, 46, 0.06)`. Note the tint: we use a low-opacity version of our `on_primary_fixed` (#131b2e) color rather than black.
*   **The "Ghost Border" Fallback:** If a boundary is strictly required for accessibility, use the `outline_variant` (#c6c6cd) at 15% opacity. It should be felt, not seen.

---

## 5. Components: Precision Primitives

### Cards & Lists
*   **Standard:** No dividers. Use `1.5rem` to `2rem` of vertical white space to separate list items.
*   **Hierarchy:** Information is grouped by background shifts. An active list item moves from `surface` to `surface_container_high`.

### Buttons (The "Call to Action")
*   **Primary:** Solid `primary_container` (#131b2e) with `on_primary` (#ffffff) text. Use the `DEFAULT` roundedness (0.25rem) for a sharp, architectural feel.
*   **Secondary:** Ghost-style. No background, `outline` text, and a `surface_container_highest` background only on hover.

### Status Badges (The "Go" Indicators)
Status is binary and critical.
*   **Go:** `tertiary_container` (#002113) background with `on_tertiary_container` (#009668) text.
*   **In Progress:** `secondary_fixed` (#d8e2ff) background with `on_secondary_fixed_variant` (#004395) text.
*   **No-Go:** `error_container` (#ffdad6) background with `on_error_container` (#93000a) text.

### Input Fields
Avoid the "boxed" look. Use a `surface_container_low` background with a bottom-only `outline` (at 20% opacity). On focus, transition the background to `surface_container_lowest` and sharpen the bottom border to `secondary`.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace data density. Professionals prefer seeing 20 rows of clear data over 5 rows with "pretty" padding.
*   **Do** use `9999px` (full) roundedness exclusively for status chips and avatars to distinguish them from structural elements.
*   **Do** use the Sidebar-Toggle. When collapsed, the sidebar should show only high-fidelity icons; when expanded, it should use `title-sm` typography for navigation labels.

### Don’t:
*   **Don't** use lines to separate table rows. Use alternating row colors (Zebra striping) with `surface` and `surface_container_low` for better eye-tracking.
*   **Don't** use pure black (#000000) for text. Use `on_surface` (#1b1b1d) to maintain a premium, ink-on-paper feel.
*   **Don't** add decorative illustrations. The data is the illustration. Use minimalist icons only to provide functional affordance.