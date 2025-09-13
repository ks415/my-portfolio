import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "zinc-500": "#71717A",
        "zinc-300": "#D4D4D8",
        "zinc-800": "#27272A",
      },
      letterSpacing: {
        tight: "-0.02em",
        wider: "0.02em",
      },
      lineHeight: {
        tight: "1.167",
      },
      maxWidth: {
        "1440": "1440px",
        "1280": "1280px",
        "600": "600px",
        "889": "889px",
        "594": "594px",
        "525": "525.45px",
        "610": "610px",
      },
      width: {
        "525": "525.45px",
        "610": "610px",
        "1018": "1018px",
      },
      height: {
        "572": "572px",
        "476": "476px",
        "398": "397.73px",
      },
      borderRadius: {
        "18": "18.76px",
      },
      gap: {
        "47": "188px",
      },
    },
  },
  plugins: [],
} satisfies Config;
