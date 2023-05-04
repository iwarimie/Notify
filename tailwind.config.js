/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "tableBg": "url('/src/assets/tableBg.png')"
      }
    },
  },
  plugins: [],
}