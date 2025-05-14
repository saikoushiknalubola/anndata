
// Theme configuration for the application
// Contains colors, shadows, animations and other theme-related constants

// Main colors used throughout the application
export const colors = {
  primary: {
    DEFAULT: '#34C759', // Main green color
    50: '#EFFEF5',
    100: '#D4F7E0',
    200: '#A9F0C2',
    300: '#7EE9A3',
    400: '#53E285',
    500: '#34C759', // Main green color
    600: '#25A447',
    700: '#1A7D35',
    800: '#0F5623',
    900: '#052E12',
  },
  secondary: {
    DEFAULT: '#4285F4', // Blue
    50: '#ECF3FE',
    100: '#D4E4FD',
    200: '#AAC9FB',
    300: '#7FADF9',
    400: '#5592F7',
    500: '#4285F4', // Blue
    600: '#1D63E0',
    700: '#154AB0',
    800: '#0E3280',
    900: '#071950',
  },
  leaf: {
    DEFAULT: '#4CAF50', // Leaf green
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50', // Leaf green
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },
  soil: {
    DEFAULT: '#8B4513', // Soil brown
    50: '#F6EDDF',
    100: '#EEDBC0',
    200: '#DCB781',
    300: '#CA9342',
    400: '#B77A18',
    500: '#8B4513', // Soil brown
    600: '#783D11',
    700: '#65340E',
    800: '#522B0C',
    900: '#40220A',
  },
  saffron: {
    DEFAULT: '#FF9933', // Indian saffron
    50: '#FFF1E5',
    100: '#FFE3CC',
    200: '#FFC899',
    300: '#FFAE66',
    400: '#FFA33F',
    500: '#FF9933', // Indian saffron
    600: '#FF8000',
    700: '#CC6600',
    800: '#994C00',
    900: '#663300',
  },
  // Additional colors
  cream: '#FFF8E1',
  wheat: '#F9A825',
  jute: '#8B6F47',
  terracotta: '#E64A19',
  turmeric: '#E3B505',
  marigold: '#FFB81C',
  water: '#4FC3F7',
  monsoon: '#6FAA9C',
  clay: '#D7CCC8',
  spice: '#FF7043',
};

// Gradients used throughout the application
export const gradients = {
  primary: 'linear-gradient(135deg, #34C759, #138808)',
  secondary: 'linear-gradient(135deg, #4285F4, #0288D1)',
  soil: 'linear-gradient(135deg, #8B4513, #5D4037)',
  saffron: 'linear-gradient(135deg, #FF9933, #FF8F00)',
  leaf: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
  tricolor: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
  farm: 'linear-gradient(135deg, #34C759, #138808)',
  earth: 'linear-gradient(135deg, #8B4513, #5D4037)',
  sky: 'linear-gradient(135deg, #03A9F4, #01579B)',
  sunrise: 'linear-gradient(to top, #ff9a9e, #fad0c4)',
  sunset: 'linear-gradient(to top, #a18cd1, #fbc2eb)',
  harvest: 'linear-gradient(to right, #F9A825, #FF8F00)',
};

// Shadows used in the application
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  soft: '0 5px 15px rgba(0, 0, 0, 0.05)',
  ambient: '0 2px 10px rgba(0, 0, 0, 0.08)',
};

// Animations used in the application
export const animations = {
  // Timing functions
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  
  // Durations
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  
  // Keyframe animations
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 }
  },
  slideIn: {
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 }
  },
  pulse: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 }
  }
};

// Export theme as the default
const theme = {
  colors,
  gradients,
  shadows,
  animations
};

export default theme;
