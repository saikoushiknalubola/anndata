
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
          DEFAULT: "#34C759",
          50: "#EFFEF5",
          100: "#D4F7E0",
          200: "#A9F0C2",
          300: "#7EE9A3",
          400: "#53E285",
          500: "#34C759",
          600: "#25A447",
          700: "#1A7D35",
          800: "#0F5623",
          900: "#052E12",
        },
        secondary: {
          DEFAULT: "#4285F4",
          50: "#ECF3FE",
          100: "#D4E4FD",
          200: "#AAC9FB",
          300: "#7FADF9",
          400: "#5592F7",
          500: "#4285F4",
          600: "#1D63E0",
          700: "#154AB0",
          800: "#0E3280",
          900: "#071950",
        },
        leaf: {
          DEFAULT: "#4CAF50",
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
        soil: {
          DEFAULT: "#8B4513",
          50: "#F6EDDF",
          100: "#EEDBC0",
          200: "#DCB781",
          300: "#CA9342",
          400: "#B77A18",
          500: "#8B4513",
          600: "#783D11",
          700: "#65340E",
          800: "#522B0C",
          900: "#40220A",
        },
        saffron: {
          DEFAULT: "#FF9933",
          50: "#FFF1E5",
          100: "#FFE3CC",
          200: "#FFC899",
          300: "#FFAE66",
          400: "#FFA33F",
          500: "#FF9933",
          600: "#FF8000",
          700: "#CC6600",
          800: "#994C00",
          900: "#663300",
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
        earth: "#8B4513",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(10px)"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "shimmer": "shimmer 2s infinite"
      },
      fontFamily: {
        'hindi': ['Tiro Devanagari Hindi', 'serif'],
        'decorative': ['Yatra One', 'cursive'],
        'sans': ['Poppins', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
