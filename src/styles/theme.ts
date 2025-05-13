
// Enhanced theme configuration for the application
// This file centralizes our design tokens and visual styles

export const themeColors = {
  // Primary palette
  primary: {
    light: '#FF7F50',  // Coral
    main: '#FF5722',   // Deep Orange
    dark: '#E64A19',   // Deep Orange Dark
    contrast: '#FFFFFF',
  },
  // Secondary palette
  secondary: {
    light: '#4FC3F7',  // Light Blue
    main: '#03A9F4',   // Blue
    dark: '#0288D1',   // Dark Blue
    contrast: '#FFFFFF',
  },
  // Accent colors
  accent: {
    success: '#4CAF50',
    info: '#2196F3',
    warning: '#FFC107',
    error: '#F44336',
    muted: '#9E9E9E',
  },
  // Natural elements inspired colors
  nature: {
    soil: '#8B4513',
    leaf: '#4CAF50',
    sky: '#03A9F4',
    sun: '#FFC107',
    water: '#2196F3',
    clay: '#D7CCC8',
  },
  // Gradient presets
  gradients: {
    primary: 'linear-gradient(45deg, #FF9800, #FF5722)',
    secondary: 'linear-gradient(45deg, #03A9F4, #00BCD4)',
    success: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
    sunset: 'linear-gradient(45deg, #FF9800, #F44336)',
    dawn: 'linear-gradient(45deg, #FFC107, #FF9800)',
    earth: 'linear-gradient(45deg, #795548, #5D4037)',
    forest: 'linear-gradient(45deg, #4CAF50, #1B5E20)',
    ocean: 'linear-gradient(45deg, #03A9F4, #0288D1)',
    vibrant: 'linear-gradient(45deg, #8E24AA, #D81B60)',
  },
  // Glassmorphism settings
  glass: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    blur: '8px',
    shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
  },
};

export const shadows = {
  subtle: '0 2px 10px rgba(0, 0, 0, 0.05)',
  medium: '0 4px 20px rgba(0, 0, 0, 0.1)',
  strong: '0 8px 30px rgba(0, 0, 0, 0.15)',
  soft: '0 4px 14px rgba(0, 0, 0, 0.03)',
  innerGlow: 'inset 0 0 15px rgba(255, 255, 255, 0.35)',
  textGlow: '0 0 8px rgba(255, 255, 255, 0.6)',
  coloredGlow: (color: string) => `0 0 15px ${color}`,
};

export const animations = {
  fadeIn: 'fade-in 0.5s ease-out forwards',
  slideUp: 'slide-up 0.5s ease-out forwards',
  pulse: 'pulse 2.5s infinite',
  float: 'float 6s ease-in-out infinite',
  shimmer: 'shimmer 2s infinite linear',
  ripple: 'ripple 0.6s linear',
  glow: 'glow 1.5s ease-in-out infinite alternate',
};

export const borderRadii = {
  small: '4px',
  medium: '8px',
  large: '12px',
  xl: '16px',
  '2xl': '24px',
  circle: '50%',
  pill: '9999px',
};

// Spacing system
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

// Typography scale
export const typography = {
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.75rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// Z-index system
export const zIndices = {
  base: 0,
  elevated: 1,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modal: 1300,
  popover: 1400,
  tooltip: 1500,
  toast: 1600,
};
