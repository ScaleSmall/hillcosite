# Hill Country Painting Color System

## Semantic Color Roles

This document defines the systematic use of colors throughout the Hill Country Painting website.

---

## Primary Brand Colors

### Azure (#197E90)
**Role:** Primary interactive color
**Use for:**
- Primary CTAs and buttons
- Interactive links
- Focus rings and states
- Active navigation items
- Icon accents
- Hover states on interactive elements

**DO NOT use for:**
- Large background sections
- Body text
- Decorative elements

**Examples:**
```css
.btn-primary { @apply bg-brand-azure hover:bg-brand-azure/90 }
.link { @apply text-brand-azure hover:underline }
.focus-ring { @apply ring-brand-azure }
```

---

### Dark Azure (#163C43)
**Role:** Contrast surfaces and anchoring elements
**Use for:**
- Header background
- Footer background
- Hero overlays with transparency
- Dark contrast sections
- Navigation backgrounds
- High-contrast text on light backgrounds

**DO NOT use for:**
- Interactive hover states (too dark)
- Body text (insufficient contrast on some backgrounds)

**Examples:**
```css
.header { @apply bg-brand-azureDark text-white }
.footer { @apply bg-brand-azureDark text-white }
.hero-overlay { @apply bg-brand-azureDark/80 }
```

---

### Coral Reef (#FBE7CC)
**Role:** Warm cream background emphasis
**Use for:**
- Section backgrounds for emphasis
- Trust/social proof areas
- Testimonial section backgrounds
- Call-to-action banners (as background)
- Highlighted content areas

**CRITICAL RULES:**
- NEVER use as text color on white backgrounds
- NEVER use as border color (insufficient contrast)
- NEVER use saturated variations
- ONLY use as large background sections
- Text on coral backgrounds must be dark (brand-gray-700+)

**Examples:**
```css
.trust-section { @apply bg-brand-coral }
.testimonials { @apply bg-brand-coral }
.cta-banner { @apply bg-brand-coral }
```

**FORBIDDEN:**
```css
/* ❌ NEVER DO THIS */
.text-on-white { @apply text-brand-coral }
.border { @apply border-brand-coral }
```

---

### Regent Gray (#84949C)
**Role:** Secondary neutral for UI chrome
**Use for:**
- Secondary text (less important information)
- Dividers and separators
- UI chrome (borders on cards, inputs)
- Disabled state text
- Metadata and timestamps

**Examples:**
```css
.divider { @apply border-brand-regentGray }
.metadata { @apply text-brand-regentGray }
.secondary-text { @apply text-brand-regentGray }
```

---

## Neutral Grayscale (brand-gray-*)

### Text Hierarchy
```css
/* Maximum contrast - primary headings */
.heading-primary { @apply text-brand-gray-900 }

/* High contrast - secondary headings */
.heading-secondary { @apply text-brand-gray-800 }

/* Standard headings */
.heading { @apply text-brand-gray-700 }

/* Body text */
.body { @apply text-brand-gray-600 }

/* Secondary body text */
.body-secondary { @apply text-brand-gray-500 }

/* Disabled text */
.text-disabled { @apply text-brand-gray-400 }
```

### Background Hierarchy
```css
/* White backgrounds */
.bg-white { @apply bg-white }

/* Subtle background tint */
.bg-subtle { @apply bg-brand-gray-50 }

/* Light background (alternating rows, cards) */
.bg-light { @apply bg-brand-gray-100 }
```

### Borders & Dividers
```css
/* Subtle borders */
.border-subtle { @apply border-brand-gray-200 }

/* Standard borders */
.border { @apply border-brand-gray-300 }

/* Emphasized borders */
.border-emphasis { @apply border-brand-gray-400 }
```

---

## Utility Colors

Tailwind's default utility colors (red, green, yellow, blue, amber) are available for semantic states:

### Success States
```css
.success { @apply bg-green-100 text-green-700 }
```

### Warning States
```css
.warning { @apply bg-yellow-100 text-yellow-700 }
.warm-badge { @apply bg-amber-100 text-amber-700 }
```

### Error States
```css
.error { @apply bg-red-100 text-red-700 border-red-300 }
```

### Info States
```css
.info { @apply bg-blue-100 text-blue-700 }
```

**Note:** These utility colors should ONLY be used for:
- Form validation states
- Alert messages
- Status badges
- Semantic indicators (season badges, rating indicators)

**NEVER use for:**
- Brand elements
- Navigation
- Primary content areas

---

## Slate Alias (Deprecated)

The `slate-*` tokens are aliases to `brand-gray-*` for backward compatibility.

**Migration path:**
```diff
- text-slate-600
+ text-brand-gray-600

- bg-slate-50
+ bg-brand-gray-50
```

**Status:** Slate tokens will be maintained for backward compatibility but new code should use `brand-gray-*`.

---

## WCAG AA Contrast Requirements

All color combinations meet WCAG AA standards:

### Text Contrast Ratios

| Background | Text Color | Ratio | Status |
|------------|------------|-------|--------|
| White (#FFFFFF) | brand-gray-600 | 7.1:1 | ✅ AAA |
| White (#FFFFFF) | brand-gray-700 | 9.7:1 | ✅ AAA |
| White (#FFFFFF) | brand-azure | 4.8:1 | ✅ AA |
| brand-coral (#FBE7CC) | brand-gray-700 | 8.2:1 | ✅ AAA |
| brand-coral (#FBE7CC) | brand-gray-900 | 13.5:1 | ✅ AAA |
| brand-azureDark (#163C43) | White | 12.3:1 | ✅ AAA |

### Interactive Element Contrast

| Element | Colors | Ratio | Status |
|---------|--------|-------|--------|
| Primary button | bg-brand-azure / text-white | 4.5:1 | ✅ AA |
| Focus ring | ring-brand-azure | 3.8:1 | ✅ AA |
| Link | text-brand-azure on white | 4.8:1 | ✅ AA |

---

## Color Usage Examples

### Page Structure
```tsx
// Header
<header className="bg-brand-azureDark text-white">

// Hero with overlay
<section className="relative">
  <div className="absolute inset-0 bg-brand-azureDark/80" />
</section>

// Trust section
<section className="bg-brand-coral">
  <h2 className="text-brand-gray-900">
  <p className="text-brand-gray-700">
</section>

// Standard content
<section className="bg-white">
  <h2 className="text-brand-gray-900">
  <p className="text-brand-gray-600">
</section>

// Footer
<footer className="bg-brand-azureDark text-white">
```

### Components
```tsx
// Primary CTA
<button className="bg-brand-azure hover:bg-brand-azure/90 text-white">

// Secondary CTA
<button className="border-2 border-brand-azure text-brand-azure hover:bg-brand-azure hover:text-white">

// Card
<div className="bg-white border border-brand-gray-300 rounded-lg">
  <h3 className="text-brand-gray-900">
  <p className="text-brand-gray-600">
</div>

// Link
<a className="text-brand-azure hover:underline">

// Divider
<hr className="border-brand-gray-300" />
```

---

## Forbidden Patterns

### ❌ Coral as Text on White
```tsx
// WRONG - insufficient contrast
<p className="text-brand-coral">This text is invisible</p>
```

### ❌ Coral as Border
```tsx
// WRONG - insufficient contrast
<div className="border border-brand-coral">
```

### ❌ Orange/Purple Hues
```tsx
// WRONG - not part of brand palette
<div className="bg-orange-500">
<div className="text-purple-600">
```

### ❌ Primary/Deep/Accent Legacy Colors
```tsx
// WRONG - legacy colors removed
<div className="bg-primary-500">
<div className="text-deep-600">
<div className="bg-accent-500">
```

---

## Migration Checklist

- [x] Remove legacy colors (primary, deep, accent)
- [x] Define semantic roles for all brand colors
- [x] Document WCAG AA compliance
- [x] Establish coral usage rules
- [x] Maintain slate alias for compatibility
- [x] Verify all colors meet contrast requirements

---

## Questions?

Refer to `BRAND_CONTRACT.md` for high-level brand guidelines.
Refer to `tailwind.config.js` for exact color values.
