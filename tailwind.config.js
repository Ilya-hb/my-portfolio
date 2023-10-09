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
        primaryLight: "#FAF3F0",
        secondaryLight: "#EDE4E0",
      },
    },
  },
  plugins: [],
};
