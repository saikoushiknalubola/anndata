
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#34C759", // Main green color
          50: '#EFFEF5',
          100: '#D4F7E0',
          200: '#A9F0C2',
          300: '#7EE9A3',
          400: '#53E285',
          500: "#34C759", // Main green color
          600: '#25A447',
          700: '#1A7D35',
          800: '#0F5623',
          900: '#052E12',
        },
        secondary: {
          DEFAULT: "#4285F4", // Blue
          50: '#ECF3FE',
          100: '#D4E4FD',
          200: '#AAC9FB',
          300: '#7FADF9',
          400: '#5592F7',
          500: "#4285F4", // Blue
          600: '#1D63E0',
          700: '#154AB0',
          800: '#0E3280',
          900: '#071950',
        },
        leaf: {
          DEFAULT: "#4CAF50", // Leaf green
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: "#4CAF50", // Leaf green
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        soil: {
          DEFAULT: "#8B4513", // Soil brown
          50: '#F6EDDF',
          100: '#EEDBC0',
          200: '#DCB781',
          300: '#CA9342',
          400: '#B77A18',
          500: "#8B4513", // Soil brown
          600: '#783D11',
          700: '#65340E',
          800: '#522B0C',
          900: '#40220A',
        },
        saffron: {
          DEFAULT: "#FF9933", // Indian saffron
          50: '#FFF1E5',
          100: '#FFE3CC',
          200: '#FFC899',
          300: '#FFAE66',
          400: '#FFA33F',
          500: "#FF9933", // Indian saffron
          600: '#FF8000',
          700: '#CC6600',
          800: '#994C00',
          900: '#663300',
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        cream: "#FFF8E1",
        wheat: "#F9A825",
        jute: "#8B6F47",
        terracotta: "#E64A19",
        turmeric: "#E3B505",
        marigold: "#FFB81C",
        water: "#4FC3F7",
        monsoon: "#6FAA9C",
        clay: "#D7CCC8",
        spice: "#FF7043",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        hindi: ["Tiro Devanagari Hindi", "serif"],
        decorative: ["Yatra One", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'soft': '0 5px 15px rgba(0, 0, 0, 0.05)',
        'ambient': '0 2px 10px rgba(0, 0, 0, 0.08)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-farm': 'linear-gradient(135deg, #34C759, #138808)',
        'gradient-soil': 'linear-gradient(135deg, #8B4513, #5D4037)',
        'gradient-saffron': 'linear-gradient(135deg, #FF9933, #FF8F00)',
        'gradient-tricolor': 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 0.8 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: 0.3 },
          '80%, 100%': { transform: 'scale(1.7)', opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'ripple': 'ripple 0.6s linear',
        'shimmer': 'shimmer 2s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
