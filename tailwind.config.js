/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        orange: "#F17554",
        green: "#46EBAE",
        dark: "#181818",
        "black-light": "#3C3C3C",
      },
      rotate: {
        25: "25deg",
      },
    },
  },
  plugins: [],
};
