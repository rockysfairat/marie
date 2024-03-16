/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#2B2A2B",
      brown: "#544541",
      reviews: "#d5d5dd",
      white: "#ffffff",
      greyLight: "#cecdca",
      greyDark: "#bababe",
      biege: "#e1d5c7",
    },
  },
  extend: {
    fontFamily: {
      montserrat: ["Montserrat", "cursive"],
    },
  },
  plugins: [],
};
