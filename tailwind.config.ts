import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#fff",

      // Monokai theme
      bg: "#282a3a",
      "bg-variant": "#1e1f2b",
      comment: "#696d77",
      active: "#ffd76d",
      keyword: "#ff657a",
      variable: "#9cd1bb",
    },
  },
  plugins: [],
};
export default config;
