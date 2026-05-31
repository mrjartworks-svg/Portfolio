import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#F6F2EB",
          "bg-secondary": "#ECE7DE",
          text: "#1B1B1B",
          "text-secondary": "#5A5A5A",
          accent: "#C98864",
          "accent-muted": "#D4A88A",
        },
        dark: {
          bg: "#111111",
          "bg-secondary": "#1A1A1A",
          text: "#F3F0EA",
          "text-secondary": "#B8B3AA",
          accent: "#C98864",
          "accent-muted": "#8A6B55",
        },
      },
      fontFamily: {
        display: ['"General Sans"', "var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": [
          "clamp(2.625rem, 4.2vw + 1.1rem, 5.5rem)",
          { lineHeight: "0.98", letterSpacing: "-0.032em" },
        ],
        "body-lg": ["1.0625rem", { lineHeight: "1.65" }],
        "nav": ["0.875rem", { lineHeight: "1.4" }],
        "display-xl": ["clamp(2.5rem,5vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "clamp(4rem,10vw,8rem)",
        "section-sm": "clamp(2.5rem,6vw,5rem)",
      },
      transitionDuration: {
        theme: "400ms",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.625rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
