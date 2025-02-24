import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      "custom-skyblue":"#71CED0",
      "custom-gray":"#4C4C4C",
      "custom-red":'#D01314',
      "custom-green":"#00C11F",
      "custom-light-gray":"#232224",
      "custom-black":"#0F0D10"
      },
      boxShadow:{
        "button-shadow":"0px 4px 24.6px 0px #71CED061"
      }
    },
  },
  plugins: [],
} satisfies Config;
