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
      "comment-variant": "#535763",
      active: "#ffd76d",
      keyword: "#ff657a",
      identifier: "#c39ac9",
      decl: "#9cd1bb",
      call: "#bad761",
      "bracket-1": "#ff9b5e",
      "bracket-2": "#ffd76d",
      "bracket-3": "#bad761",
      "bracket-4": "#9cd1bb",
      "bracket-5": "#c39ac9",
    },
  },
  plugins: [],
};
export default config;
