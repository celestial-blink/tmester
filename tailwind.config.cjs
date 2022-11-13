/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "_color-dark": "#2A2E3C",
        "_color-dark-slate": "#424757",
        "_color-dark-theme": "#0A3C55",
        "_color-light-slate": "#EBF1F3",
        "_color-cyan": "#2AC1DC"
      }
    }
  },

  plugins: [],
}
