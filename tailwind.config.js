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
      screens: {
        lg: "1024px", // Указываем точку разрыва для больших экранов
      },
    },
  },
  plugins: [],
};
