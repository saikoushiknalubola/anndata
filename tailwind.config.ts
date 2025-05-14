
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Enhanced rural Indian-inspired color palette
        'saffron': {
          DEFAULT: '#FF5722',      // Vibrant saffron
          '50': '#FFF3E0',
          '100': '#FFE0B2',
          '200': '#FFCC80',
          '300': '#FFB74D',
          '400': '#FFA726',
          '500': '#FF9800',
          '600': '#FB8C00',
          '700': '#F57C00',
          '800': '#EF6C00',
          '900': '#E65100',
        },
        'terracotta': {
          DEFAULT: '#C36A2D',   // Clay terracotta
          '50': '#F9E4D4',
          '100': '#F3CBA9',
          '200': '#EDB27F',
          '300': '#E79955',
          '400': '#E07F2A',
          '500': '#C36A2D',
          '600': '#A5592D',
          '700': '#87482D',
          '800': '#69372D',
          '900': '#4B262D',
        },
        'marigold': {
          DEFAULT: '#F2B825',     // Marigold yellow
          '50': '#FFFBE0',
          '100': '#FFF7B2',
          '200': '#FFF384',
          '300': '#FFEF56',
          '400': '#F9E828',
          '500': '#F2B825',
          '600': '#D99A1D',
          '700': '#BF7D15',
          '800': '#A6600D',
          '900': '#8C4405',
        },
        'jute': {
          DEFAULT: '#8B6F47',         // Jute brown
          '50': '#F5EFE4',
          '100': '#EBDFCA',
          '200': '#D7BF9B',
          '300': '#C3A06C',
          '400': '#AF803D',
          '500': '#8B6F47',
          '600': '#765E3F',
          '700': '#624D37',
          '800': '#4D3C2F',
          '900': '#392B27',
        },
        'monsoon': {
          DEFAULT: '#6FAA9C',      // Monsoon green
          '50': '#E0F2EE',
          '100': '#C1E5DE',
          '200': '#A3D9CE',
          '300': '#85CCBE',
          '400': '#67BFAE',
          '500': '#6FAA9C',
          '600': '#5D9187',
          '700': '#4B7872',
          '800': '#395F5D',
          '900': '#274648',
        },
        'turmeric': {
          DEFAULT: '#E3B505',     // Turmeric gold
          '50': '#FFF9E0',
          '100': '#FFF3B2',
          '200': '#FFED84',
          '300': '#FFE756',
          '400': '#FFE128',
          '500': '#E3B505',
          '600': '#C29704',
          '700': '#A17A03',
          '800': '#815C02',
          '900': '#613E01',
        },
        'earth': {
          DEFAULT: '#5D4037',        // Rich soil brown
          '50': '#EFEBE9',
          '100': '#D7CCC8',
          '200': '#BCAAA4',
          '300': '#A1887F',
          '400': '#8D6E63',
          '500': '#795548',
          '600': '#6D4C41',
          '700': '#5D4037',
          '800': '#4E342E',
          '900': '#3E2723',
        },
        'leaf': {
          DEFAULT: '#2E7D32',         // Fresh leaf green
          '50': '#E8F5E9',
          '100': '#C8E6C9',
          '200': '#A5D6A7',
          '300': '#81C784',
          '400': '#66BB6A',
          '500': '#4CAF50',
          '600': '#43A047',
          '700': '#2E7D32',
          '800': '#1B5E20',
          '900': '#0B3E0B',
        },
        'cream': {
          DEFAULT: '#FFF8E1',        // Light cream background
          '50': '#FFFFF2',
          '100': '#FFFDE5',
          '200': '#FFF8D6',
          '300': '#FFF3C7',
          '400': '#FFEEB8',
          '500': '#FFE9A9',
          '600': '#FFDA8C',
          '700': '#FFCC6F',
          '800': '#FFBD52',
          '900': '#FFAE35',
        },
        'soil': {
          DEFAULT: '#3E2723',         // Deep soil
          '50': '#EBE2DF',
          '100': '#D7C5C0',
          '200': '#C0A9A2',
          '300': '#A98D84',
          '400': '#927066',
          '500': '#7B5248',
          '600': '#674440',
          '700': '#53342F',
          '800': '#3F2329',
          '900': '#2B1223',
        },
        'clay': {
          DEFAULT: '#D7CCC8',         // Clay pottery
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#F5F0EE',
          '500': '#E2DAD8',
          '600': '#C2B2AD',
          '700': '#A38B83',
          '800': '#84645A',
          '900': '#5F483F',
        },
        'spice': {
          DEFAULT: '#FF7043',        // Warm spice red
          '50': '#FFF3E0',
          '100': '#FFE0B2',
          '200': '#FFCC80',
          '300': '#FFB74D',
          '400': '#FFA726',
          '500': '#FF9800',
          '600': '#FB8C00',
          '700': '#F57C00',
          '800': '#EF6C00',
          '900': '#E65100',
        },
        'wheat': {
          DEFAULT: '#F9A825',        // Wheat gold
          '50': '#FFFDE7',
          '100': '#FFF9C4',
          '200': '#FFF59D',
          '300': '#FFF176',
          '400': '#FFEE58',
          '500': '#FFEB3B',
          '600': '#FDD835',
          '700': '#FBC02D',
          '800': '#F9A825',
          '900': '#F57F17',
        },
        'millet': {
          DEFAULT: '#FFE0B2',       // Millet grain color
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFEFDB',
          '500': '#FFDEAE',
          '600': '#FFBC6B',
          '700': '#FF9A29',
          '800': '#E67800',
          '900': '#A45500',
        },
        'water': {
          DEFAULT: '#4FC3F7',        // Water blue
          '50': '#E1F5FE',
          '100': '#B3E5FC',
          '200': '#81D4FA',
          '300': '#4FC3F7',
          '400': '#29B6F6',
          '500': '#03A9F4',
          '600': '#039BE5',
          '700': '#0288D1',
          '800': '#0277BD',
          '900': '#01579B',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'ripple': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' }
        },
        'swing': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.4s ease-out',
        'ripple': 'ripple 1.5s ease-out infinite',
        'swing': 'swing 3s ease-in-out infinite'
      },
      fontFamily: {
        'hindi': ['Tiro Devanagari Hindi', 'serif'],
        'decorative': ['Yatra One', 'cursive'],
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'paisley-pattern': "url('/lovable-uploads/paisley-pattern.png')",
        'warli-art': "url('/lovable-uploads/warli-art.png')",
        'village-texture': "url('/lovable-uploads/village-texture.png')",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
