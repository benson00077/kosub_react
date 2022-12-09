/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dusk-pattern': "url('../src/asset/dusk.jpg')",
      }
    },
  },
  plugins: [],
}
