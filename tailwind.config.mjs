/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#f0f0f5",
        muted: "#8B95A8",
        accent: "#2DD4A8",
        surface: "#0B1120",
        soft: "#141C2C",
        "card-border": "#1E2A3C",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "Cambria", "serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -24px rgba(0, 0, 0, 0.6)",
        glow: "0 0 40px -10px rgba(45, 212, 168, 0.3)",
      },
    },
  },
  plugins: [],
};
