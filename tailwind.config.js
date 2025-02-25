import { heroui } from "@heroui/theme";
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
module.exports = withUt({
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
});
