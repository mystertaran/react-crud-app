/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}