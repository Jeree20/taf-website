import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#8B1A1A",
          dark:    "#6B1212",
          deep:    "#3D0A0A",
          light:   "#A52020",
        },
        sky: {
          taf:     "#3AABE0",
          dark:    "#2487B8",
          pale:    "#E8F6FF",
        },
        gold: {
          taf:     "#F5C518",
          dark:    "#D4A40F",
          pale:    "#FEF9E7",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark:    "#F0EAE0",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "xs":      ["0.75rem",    { lineHeight: "1.125rem" }],
        "sm":      ["0.875rem",   { lineHeight: "1.375rem" }],
        "base":    ["1rem",       { lineHeight: "1.625rem" }],
        "lg":      ["1.125rem",   { lineHeight: "1.75rem" }],
        "xl":      ["1.375rem",   { lineHeight: "2rem" }],
        "2xl":     ["1.75rem",    { lineHeight: "2.375rem" }],
        "3xl":     ["2.25rem",    { lineHeight: "2.75rem" }],
        "4xl":     ["3rem",       { lineHeight: "3.5rem" }],
        "5xl":     ["3.75rem",    { lineHeight: "4.25rem" }],
        "6xl":     ["4.5rem",     { lineHeight: "5rem" }],
      },
      letterSpacing: {
        "tighter": "-0.02em",
        "tight":   "-0.01em",
        "normal":  "0em",
        "wide":    "0.025em",
        "wider":   "0.05em",
        "widest":  "0.1em",
      },
      animation: {
        "fade-up":    "fadeUp 0.65s ease forwards",
        "float":      "float 4.5s ease-in-out infinite",
        "count-up":   "countUp 0.5s ease forwards",
        "slide-in":   "slideIn 0.8s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle, rgba(245,197,24,0.07) 1px, transparent 1px)",
        "dot-pattern-dark":
          "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
        "dot-md": "30px 30px",
      },
    },
  },
  plugins: [],
};

export default config;
