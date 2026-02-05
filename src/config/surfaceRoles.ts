/**
 * SURFACE ROLE SYSTEM
 *
 * This file documents the intentional surface hierarchy for Hill Country Painting.
 * All surfaces use ONLY existing brand tokens - no new colors are introduced.
 *
 * SURFACE ROLES:
 *
 * 1. BASE CANVAS (bg-white)
 *    - Primary content areas
 *    - Main sections with rich content
 *    - Default surface for most content
 *
 * 2. WARM SURFACE (bg-brand-coral)
 *    - Cream color (#FBE7CC)
 *    - Used to add warmth and visual interest
 *    - Ideal for testimonials, trust sections, featured content
 *    - Creates soft contrast with white
 *    - Should appear at least once per page for brand warmth
 *
 * 3. NEUTRAL SURFACE (bg-brand-gray-50 or bg-brand-gray-100)
 *    - Subtle separation between sections
 *    - Alternates with white for visual rhythm
 *    - Secondary background for less emphasized content
 *
 * 4. EMPHASIS SURFACE (bg-brand-azureDark with text-white)
 *    - Dark Azure (#163C43)
 *    - Strong visual emphasis for CTAs or important sections
 *    - Use sparingly for maximum impact
 *    - Always pair with white text for contrast
 *
 * USAGE GUIDELINES:
 *
 * - Every page should use at least ONE brand surface (coral or azureDark)
 * - Avoid pages with only white + gray surfaces
 * - Hero sections typically use: white, gray-50, or gradient overlay on images
 * - Content sections alternate between white and gray-50
 * - Warm surface (coral) for trust elements: testimonials, stats, social proof
 * - Emphasis surface (azureDark) for strong CTAs or special callouts
 *
 * GRADIENTS (when needed):
 *
 * - Hero overlays: from-black/30 via-black/20 to-black/40 (on images)
 * - Subtle backgrounds: from-brand-gray-50 to-white
 * - DO NOT use non-brand colors (blue, purple, orange, etc.) in gradients
 *
 * EXISTING TOKENS ONLY:
 * - brand-azure (#197E90)
 * - brand-azureDark (#163C43)
 * - brand-regentGray (#84949C)
 * - brand-coral (#FBE7CC) ← WARM SURFACE
 * - brand-gray-50, 100, 200, 300, 400, 500, 600, 700, 800, 900
 * - white, black (standard)
 */

export const SURFACE_ROLES = {
  BASE_CANVAS: 'bg-white',
  WARM_SURFACE: 'bg-brand-coral',
  NEUTRAL_SURFACE: 'bg-brand-gray-50',
  NEUTRAL_SURFACE_ALT: 'bg-brand-gray-100',
  EMPHASIS_SURFACE: 'bg-brand-azureDark',
  HERO_GRADIENT: 'from-brand-gray-50 to-white',
  IMAGE_OVERLAY: 'from-black/30 via-black/20 to-black/40',
} as const;
