import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ll-bg": "#0B1220",
        "ll-card": "#111827",
        "ll-light": "#F8FAFC",
        "ll-blue": "#2563EB",
        "ll-blue-hover": "#60A5FA",
        "ll-text-secondary": "#CBD5E1",
        "ll-heading": "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
