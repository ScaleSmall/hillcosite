#!/usr/bin/env node

/**
 * Verify WCAG AA Contrast Ratios
 * Ensures all color combinations meet accessibility standards
 */

// Convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate relative luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrast(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

// Brand colors
const colors = {
  white: '#FFFFFF',
  azure: '#197E90',
  azureDark: '#163C43',
  coral: '#FBE7CC',
  regentGray: '#84949C',
  gray50: '#F8FAFC',
  gray100: '#F1F5F9',
  gray300: '#CBD5E1',
  gray500: '#64748B',
  gray600: '#475569',
  gray700: '#334155',
  gray800: '#1E293B',
  gray900: '#0F172A'
};

// Test combinations
const tests = [
  { bg: 'white', fg: 'gray600', minRatio: 4.5, purpose: 'Body text' },
  { bg: 'white', fg: 'gray700', minRatio: 4.5, purpose: 'Headings' },
  { bg: 'white', fg: 'gray900', minRatio: 4.5, purpose: 'Primary headings' },
  { bg: 'white', fg: 'azure', minRatio: 4.5, purpose: 'Links & CTAs' },
  { bg: 'coral', fg: 'gray700', minRatio: 4.5, purpose: 'Text on coral sections' },
  { bg: 'coral', fg: 'gray900', minRatio: 4.5, purpose: 'Headings on coral' },
  { bg: 'azureDark', fg: 'white', minRatio: 4.5, purpose: 'White text on dark azure' },
  { bg: 'azure', fg: 'white', minRatio: 4.5, purpose: 'Button text' },
  { bg: 'gray100', fg: 'gray700', minRatio: 4.5, purpose: 'Text on light backgrounds' },
];

console.log('\n🎨 WCAG Contrast Verification\n');
console.log('=' .repeat(70));

let allPass = true;

tests.forEach(test => {
  const bgColor = colors[test.bg];
  const fgColor = colors[test.fg];
  const ratio = getContrast(bgColor, fgColor);
  const passes = ratio >= test.minRatio;

  const status = passes ? '✅' : '❌';
  const level = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'FAIL';

  console.log(`${status} ${test.purpose}`);
  console.log(`   ${test.bg} (#${bgColor}) / ${test.fg} (#${fgColor})`);
  console.log(`   Ratio: ${ratio.toFixed(2)}:1 - ${level}`);
  console.log('');

  if (!passes) {
    allPass = false;
  }
});

console.log('=' .repeat(70));

if (allPass) {
  console.log('✅ All color combinations pass WCAG AA standards\n');
  process.exit(0);
} else {
  console.log('❌ Some color combinations fail WCAG AA standards\n');
  process.exit(1);
}
