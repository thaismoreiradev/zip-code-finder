/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '455px'
    },
    extend: {
      fontFamily: {
        'rozha': ['Rozha One', 'serif']
      }
    },
  },
  plugins: [],
}