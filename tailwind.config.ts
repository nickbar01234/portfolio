import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      // Monokai theme
      bg: "#282a3a",
      "bg-variant": "#1e1f2b",
      "bg-highlight": "#161821",
      text: "#eaf2f1",
      comment: "#696d77",
      active: "#ffd76d",
      keyword: "#ff657a",
      variable: "#9cd1bb",
    },
  },
  plugins: [],
};
export default config;
