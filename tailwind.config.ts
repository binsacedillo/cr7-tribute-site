import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        museum: {
          black: "#090909",
          charcoal: "#111111",
          panel: "#171512",
          gold: "#D4AF37",
          white: "#F8F8F8",
          gray: "#A0A0A0",
          red: "#8E1B1B",
          green: "#0F6B4F",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      boxShadow: {
        gold: "0 24px 80px rgba(212, 175, 55, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
