/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f8",
          100: "#d9e2ef",
          200: "#b3c5df",
          300: "#8aa5c9",
          400: "#5f82b0",
          500: "#3d6396",
          600: "#2d4d78",
          700: "#1f3654",
          800: "#15243a",
          900: "#0c1626",
          950: "#070d16",
        },
        amber: {
          brand: "#f59e0b",
          brandDark: "#d97706",
          brandLight: "#fbbf24",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Instrument Sans", "DM Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.7)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(245, 158, 11, 0)",
            transform: "scale(1.04)",
          },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "free-pop": {
          "0%, 100%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.1)" },
          "60%": { transform: "scale(0.96)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "ring-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.55)" },
          "70%": { boxShadow: "0 0 0 12px rgba(245, 158, 11, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(245, 158, 11, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 1.8s ease-in-out infinite",
        "bounce-soft": "bounce-soft 1.6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "free-pop": "free-pop 1.8s ease-in-out infinite",
        "ring-pulse": "ring-pulse 1.8s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
