/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#f0f0f5",
        muted: "#9ca3af",
        accent: "hsl(145 66% 58%)",
        surface: "#0a0a0f",
        soft: "#13131a",
        "card-border": "#1e1e2a",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "Cambria", "serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -24px rgba(0, 0, 0, 0.6)",
        glow: "0 0 40px -10px rgba(52, 211, 153, 0.3)",
      },
      animation: {
        "scroll-strip": "scroll-strip 30s linear infinite",
      },
      keyframes: {
        "scroll-strip": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
