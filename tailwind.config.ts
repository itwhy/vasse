import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C2A40",
        accent: "#FF0000",
        soft: "#F5F6FA",
        nature: "#789262",
      },
    },
  },
  plugins: [],
};

export default config;
