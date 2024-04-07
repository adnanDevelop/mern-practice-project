/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    colors: {
      blue: "#020332",
      purple: {
        500: "#646cff",
      },
      sky: {
        300: "#9ECEE7",
        500: "#2AABE1",
        900: "#146C94",
      },
      white: "#fff",
      dark: "#242424",
      "bg-color": "#f4f3ff",
      helper: "#99b9ff",
      black: "#000",
    },
  },
  plugins: [],
};
