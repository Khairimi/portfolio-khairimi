import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F17",
          900: "#0B0F17",
          800: "#111723",
          700: "#182030",
          600: "#232D40",
          500: "#34405A",
        },
        emerald: { DEFAULT: "#10B981", soft: "#34D399", deep: "#047857" },
        cyber: { DEFAULT: "#3B82F6", soft: "#60A5FA", deep: "#1D4ED8" },
        gold: { DEFAULT: "#D97706", soft: "#F59E0B" },
        sand: { DEFAULT: "#E7DCC8", muted: "#B9AE9A", dim: "#8A8270" },
      },
      fontFamily: {
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(16,185,129,.6)" },
          "70%": { boxShadow: "0 0 0 8px rgba(16,185,129,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        marquee: "marquee 40s linear infinite",
        pulseDot: "pulseDot 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
