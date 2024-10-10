import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      spacing: {
        "18": "4.5rem",
        "128": "32rem",
      },
      fontSize: {
        xxs: ["10px", "12px"],
      },
    },
  },
  safelist: [
    "rotate-[22.5deg]",
    "rotate-[45deg]",
    "rotate-[67.5deg]",
    "rotate-[90deg]",
    "rotate-[112.5deg]",
    "rotate-[135deg]",
    "rotate-[157.5deg]",
    "rotate-[180deg]",
    "rotate-[202.5deg]",
    "rotate-[225deg]",
    "rotate-[247.5deg]",
    "rotate-[270deg]",
    "rotate-[292.5deg]",
    "rotate-[315deg]",
    "rotate-[337.5deg]",
    "rotate-[360deg]",
  ],
  plugins: [],
};
export default config;
