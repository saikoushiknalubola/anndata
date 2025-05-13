
// Enhanced theme system with rich visual elements for agriculture app

// Color system with earthy, vibrant palette inspired by nature and farming
export const colors = {
  // Primary colors
  primary: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800', // Primary orange
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
  },
  // Earth tones
  earth: {
    50: '#EFEBE9',
    100: '#D7CCC8',
    200: '#BCAAA4',
    300: '#A1887F',
    400: '#8D6E63',
    500: '#795548', // Primary brown
    600: '#6D4C41',
    700: '#5D4037',
    800: '#4E342E',
    900: '#3E2723',
  },
  // Leaf/plant colors
  leaf: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50', // Primary green
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },
  // Sky/water colors
  sky: {
    50: '#E1F5FE',
    100: '#B3E5FC',
    200: '#81D4FA',
    300: '#4FC3F7',
    400: '#29B6F6',
    500: '#03A9F4', // Primary blue
    600: '#039BE5',
    700: '#0288D1',
    800: '#0277BD',
    900: '#01579B',
  },
  // Harvest colors
  harvest: {
    50: '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC107', // Primary yellow
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
  },
  // Clay/soil colors
  soil: {
    50: '#FBE9E7',
    100: '#FFCCBC',
    200: '#FFAB91',
    300: '#FF8A65',
    400: '#FF7043',
    500: '#FF5722', // Primary terracotta
    600: '#F4511E',
    700: '#E64A19',
    800: '#D84315',
    900: '#BF360C',
  },
  // Special colors for accents and highlights
  saffron: '#FF9933', // Indian saffron color
  turmeric: '#E3B505', // Turmeric golden color
  marigold: '#FFB81C', // Marigold flower color
  jute: '#8B6F47', // Jute fabric color
  monsoon: '#6FAA9C', // Monsoon green
  clay: '#D7CCC8', // Clay pottery
  cream: '#FFF8E1', // Light cream background
  wheat: '#F9A825', // Wheat gold
  millet: '#FFE0B2', // Millet grain color
  water: '#4FC3F7', // Water blue
  spice: '#FF7043', // Warm spice
};

// Gradients for rich visual effects
export const gradients = {
  // Primary gradients
  primary: 'linear-gradient(135deg, #FF9800, #FF5722)',
  earthen: 'linear-gradient(135deg, #795548, #5D4037)',
  leafy: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
  harvest: 'linear-gradient(135deg, #FFC107, #FF9800)',
  sky: 'linear-gradient(135deg, #03A9F4, #0288D1)',
  sunset: 'linear-gradient(135deg, #FF9800, #F44336)',
  soil: 'linear-gradient(135deg, #FF5722, #E64A19)',
  
  // Special effect gradients
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
  dawn: 'linear-gradient(135deg, #FFC107, #FF9800, #FF5722)',
  dusk: 'linear-gradient(135deg, #03A9F4, #0288D1, #01579B)',
  fertile: 'linear-gradient(135deg, #795548, #4CAF50)',
  
  // Seasonal gradients
  summer: 'linear-gradient(135deg, #FF9800, #FFC107)',
  winter: 'linear-gradient(135deg, #ECEFF1, #CFD8DC)',
  spring: 'linear-gradient(135deg, #4CAF50, #8BC34A)',
  autumn: 'linear-gradient(135deg, #FF9800, #F57C00)',
  
  // Festive gradients
  festival: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808)',
  celebration: 'linear-gradient(135deg, #FFC107, #FF5722, #F44336)',
  tricolor: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
  
  // UI specific gradients
  cardGradient: 'linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)',
  glassCard: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))',
  subtleAccent: 'linear-gradient(to right, rgba(255, 152, 0, 0.2), rgba(255, 87, 34, 0.2))',
};

// Shadow system for depth and elevation
export const shadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  soft: '0 5px 15px rgba(0, 0, 0, 0.05)',
  glossy: '0 6px 20px rgba(255, 87, 34, 0.15)',
  highlight: '0 0 15px rgba(255, 152, 0, 0.3)',
  outline: '0 0 0 3px rgba(255, 152, 0, 0.2)',
  elevation: {
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    3: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)',
    4: '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
    5: '0 20px 40px rgba(0, 0, 0, 0.2)'
  },
  focused: '0 0 0 2px rgba(255, 152, 0, 0.6)',
  glow: '0 0 15px rgba(255, 152, 0, 0.5)',
};

// Animation system for rich, cohesive motion
export const animations = {
  // Timing functions
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  
  // Animation durations
  duration: {
    fastest: '100ms',
    faster: '200ms',
    fast: '300ms',
    normal: '400ms',
    slow: '500ms',
    slower: '600ms',
    slowest: '800ms',
  },
  
  // Animation keyframes
  keyframes: {
    fadeIn: 'fade-in 0.5s forwards',
    fadeOut: 'fade-out 0.3s forwards',
    slideUp: 'slide-up 0.5s forwards',
    slideDown: 'slide-down 0.4s forwards',
    slideLeft: 'slide-left 0.4s forwards',
    slideRight: 'slide-right 0.4s forwards',
    scaleIn: 'scale-in 0.3s forwards',
    scaleOut: 'scale-out 0.3s forwards',
    pulse: 'pulse 2s infinite',
    bounce: 'bounce 1s infinite',
    spin: 'spin 1.5s linear infinite',
    float: 'float 6s ease-in-out infinite',
    shimmer: 'shimmer 1.5s infinite linear',
    ripple: 'ripple 0.6s ease-out',
    glow: 'glow 1.5s ease-in-out infinite alternate',
    grow: 'grow 0.3s forwards',
    shrink: 'shrink 0.3s forwards',
  }
};

// Radius system for consistent corner rounding
export const radii = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
  circle: '50%',
};

// Border system
export const borders = {
  none: 'none',
  thin: '1px solid',
  medium: '2px solid',
  thick: '4px solid',
  dashed: '2px dashed',
  dotted: '2px dotted',
  // Gradient borders
  gradient: {
    primary: 'border-image-source: linear-gradient(135deg, #FF9800, #FF5722);',
    earthen: 'border-image-source: linear-gradient(135deg, #795548, #5D4037);',
    leafy: 'border-image-source: linear-gradient(135deg, #4CAF50, #2E7D32);',
  }
};

// Spacing system
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

// Typography system
export const typography = {
  // Font families
  fontFamily: {
    sans: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: '"Tiro Devanagari Hindi", "Georgia", Cambria, "Times New Roman", Times, serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    decorative: '"Yatra One", cursive',
    display: '"Playfair Display", serif',
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },
  
  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// Z-index system for stacking contexts
export const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// Breakpoints for responsive design
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Glass effect configurations
export const glassEffects = {
  light: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  medium: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.22)',
  },
  heavy: {
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  colorful: {
    background: 'rgba(255, 156, 0, 0.15)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 156, 0, 0.2)',
  }
};

// Card presets for quick application
export const cardStyles = {
  default: {
    background: '#FFFFFF',
    borderRadius: radii.xl,
    boxShadow: shadows.md,
    padding: spacing[4],
  },
  glass: {
    background: glassEffects.medium.background,
    backdropFilter: glassEffects.medium.backdropFilter,
    borderRadius: radii.xl,
    boxShadow: shadows.md,
    border: glassEffects.medium.border,
    padding: spacing[4],
  },
  gradient: {
    background: gradients.cardGradient,
    borderRadius: radii.xl,
    boxShadow: shadows.md,
    padding: spacing[4],
  },
  elevation: {
    background: '#FFFFFF',
    borderRadius: radii.xl,
    boxShadow: shadows.elevation[3],
    padding: spacing[4],
  },
  bordered: {
    background: '#FFFFFF',
    borderRadius: radii.xl,
    boxShadow: shadows.sm,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: spacing[4],
  },
  farmStyle: {
    background: gradients.subtleAccent,
    borderRadius: radii.lg,
    boxShadow: shadows.sm,
    border: '1px solid rgba(255, 152, 0, 0.2)',
    padding: spacing[4],
  },
};

// Button presets
export const buttonStyles = {
  primary: {
    background: gradients.primary,
    color: '#FFFFFF',
    borderRadius: radii.md,
    padding: `${spacing[2]} ${spacing[4]}`,
    boxShadow: shadows.sm,
  },
  secondary: {
    background: gradients.sky,
    color: '#FFFFFF',
    borderRadius: radii.md,
    padding: `${spacing[2]} ${spacing[4]}`,
    boxShadow: shadows.sm,
  },
  leaf: {
    background: gradients.leafy,
    color: '#FFFFFF',
    borderRadius: radii.md,
    padding: `${spacing[2]} ${spacing[4]}`,
    boxShadow: shadows.sm,
  },
  outline: {
    background: 'transparent',
    color: colors.primary[500],
    borderRadius: radii.md,
    padding: `${spacing[2]} ${spacing[4]}`,
    border: `2px solid ${colors.primary[500]}`,
  },
  glass: {
    background: glassEffects.medium.background,
    backdropFilter: glassEffects.medium.backdropFilter,
    color: colors.earth[900],
    borderRadius: radii.md,
    padding: `${spacing[2]} ${spacing[4]}`,
    border: glassEffects.medium.border,
    boxShadow: shadows.sm,
  },
  text: {
    background: 'transparent',
    color: colors.primary[500],
    padding: `${spacing[2]} ${spacing[3]}`,
  },
};

// Export a unified theme object
export const theme = {
  colors,
  gradients,
  shadows,
  animations,
  radii,
  borders,
  spacing,
  typography,
  zIndices,
  breakpoints,
  glassEffects,
  cardStyles,
  buttonStyles,
};

export default theme;
