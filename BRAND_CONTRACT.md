# Hill Country Painting — Brand Contract (LOCKED)

This document is the authoritative source of truth for all brand usage.
Any deviation must be intentional, reviewed, and approved.

---

## Logo Assets (Authoritative)

### Primary Logo (Light Backgrounds)
**File:** `/public/brand/hill-country-painting-logo-primary.png`

**Usage**
- Light backgrounds only
- White, off-white, or light neutral sections
- Default header placement

**Forbidden**
- Dark backgrounds
- Recoloring or tinting
- Opacity changes
- Shadows or effects
- Stretching or distortion

---

### Reverse Logo (Dark Backgrounds)
**File:** `/public/brand/hill-country-painting-logo-reverse.png`

**Usage**
- Dark backgrounds only
- Hero overlays
- Dark footer or dark navigation states

**Forbidden**
- Light backgrounds
- Recoloring or tinting
- Opacity changes
- Shadows or effects
- Stretching or distortion

---

### Secondary Logo
**File:** `/public/brand/hill-country-painting-logo-secondary.png`

**Usage**
- Small layout constraints
- Mobile navigation
- Tight UI contexts

**Forbidden**
- Primary hero branding
- Replacement for the primary logo
- Decorative use

---

## Brand Behavior Rules (Global)

- Logos must never be recolored.
- Logos must never be stretched.
- Logos must always preserve aspect ratio.
- Logos must never be layered with effects.

---

## Enforcement

Any component, page, or asset usage that violates this contract is considered a brand defect and must be corrected before release.

---

## Brand Guardrails (Enforced)

### Forbidden Tokens
The following CSS class patterns are **strictly forbidden** and will cause builds to fail:

- **`primary-*`** — Legacy palette, replaced by `brand-azure`
- **`deep-*`** — Legacy palette, replaced by `brand-azureDark`
- **`accent-*`** — Legacy palette, replaced by `brand-coral`

### Forbidden Motion Tokens
The following animation patterns are **strictly forbidden**:

- **`hover:scale-*`** — Non-accessible, violates motion safety
- **`group-hover:scale-*`** — Non-accessible, violates motion safety

### Required Tokens
All brand colors must use the official brand palette:

- **`brand-azure`** — Primary brand color (#1F7A8C)
- **`brand-azureDark`** — Dark brand color (#0B3C49)
- **`brand-coral`** — CTA/emphasis color (#E36414)
- **`brand-gray-*`** — Neutral grayscale (50-900)

### Required Fonts
All typography must use the official brand fonts:

- **Montserrat** — Headings and display text
- **Open Sans** — Body text and UI elements

### Enforcement Mechanism
Before every deployment, the build process runs:

```bash
npm run brand:guard
```

This script scans all source files and fails the build if any forbidden tokens are detected. This ensures brand consistency and prevents regression to legacy design patterns.

---

## Verification (Required)

Before any deploy or merge:

- Run: `npm run verify`
- If it fails, DO NOT ship. Fix the violation first.

This project blocks brand drift automatically via:
- `npm run brand:guard` (forbidden tokens)
- `predev` / `prebuild` enforcement

---

## Enforcement (Locked)

Brand guard runs on:

- `npm run dev` (predev)
- `npm run build` (prebuild)
- `npm run verify`

Forbidden in `src/**` (non-guides):

- **legacy tokens:** `primary-*`, `deep-*`, `accent-*`
- **motion:** `hover:scale-*`, `group-hover:scale-*`
- **raw palette prefixes:** `red-*`, `orange-*`, `yellow-*`, `green-*`, `purple-*`, `pink-*`, `blue-*`
- **slate colors** (except transforms): `bg-slate-*`, `text-slate-*`, `border-slate-*`, `from-slate-*`, `to-slate-*`, `ring-slate-*`

Exception scope: only `src/pages/guides/**` is exempt.
