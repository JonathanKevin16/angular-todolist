/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/**/src/app/*.{html,ts}",
    "./projects/**/src/app/**/*.{html,ts}",
    "./projects/**/src/index.html",
    "./projects/**/src/app/**/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
