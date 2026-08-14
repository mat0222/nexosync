/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nexoblue: "#0b79d0",
        nexogreen: "#3bbf7a",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Outfit", "Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
