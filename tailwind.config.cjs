/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'xs2': '400px',
      'xs3': '500px',
    },
    extend: {
      fontFamily: {
        'rozha': ['Rozha One', 'serif']
      }
    },
  },
  plugins: [],
}