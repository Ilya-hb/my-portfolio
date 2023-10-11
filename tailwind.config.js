/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat-Regular", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryDark: "#1D1D1F",
        secondaryDark: "#27282A",
        primaryLight: "#BEBEBE",
        secondaryLight: "#EDE4E0",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 16s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-200px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
};
