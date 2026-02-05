/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ========================================
        // SEMANTIC COLOR SYSTEM
        // ========================================

        // PRIMARY BRAND COLORS
        // Use for: interactive elements, links, focus states, primary CTAs
        brand: {
          azure: '#197E90',      // Primary interactive color
          azureDark: '#163C43',  // Headers, footers, contrast surfaces
          coral: 'rgba(251, 231, 204, 0.6)',      // Warm cream - section backgrounds only (60% opacity)
          coralFull: '#FBE7CC',  // Full opacity cream - header/footer only
          regentGray: '#84949C', // Secondary text, dividers, UI chrome

          // Neutral grayscale - text and backgrounds
          gray: {
            50: '#F8FAFC',   // Lightest background
            100: '#F1F5F9',  // Light background
            200: '#E2E8F0',  // Subtle borders
            300: '#CBD5E1',  // Borders, dividers
            400: '#94A3B8',  // Disabled text
            500: '#64748B',  // Secondary text
            600: '#475569',  // Body text
            700: '#334155',  // Headings
            800: '#1E293B',  // Dark headings
            900: '#0F172A'   // Maximum contrast
          }
        },

        // SLATE ALIAS (for backward compatibility)
        // Mirrors brand.gray - gradually migrate to brand-gray-*
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      lineHeight: {
        'body': '1.5',
        'heading': '1.2',
      },
      screens: {
        'xs': '475px',
        // Mobile-first breakpoints optimization
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        'touch': '44px', // Minimum touch target size
      },
      minWidth: {
        'touch': '44px', // Minimum touch target size
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};