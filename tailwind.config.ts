import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'geo': ["Noto Sans Georgian", 'sans-serif']
    },
    colors: {
      'main-color': '#151C50',
      'sub-color': '#5F6D91',
      "white": "#FFFFFF",
      primary: {
        "50":"#eff6ff",
        "100":"#dbeafe",
        "200":"#bfdbfe",
        "300":"#93c5fd",
        "400":"#60a5fa",
        "500":"#3b82f6",
        "600":"#2563eb",
        "700":"#1d4ed8",
        "800":"#1e40af",
        "900":"#1e3a8a",
        "950":"#172554",
        "btn": "#2463EB"
      }
    },
    height: {
      '100': '50rem'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;