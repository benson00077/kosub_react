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
        'texture-pattern': "url('https://www.transparenttextures.com/patterns/brushed-alum.png'), linear-gradient(45deg,#3f429f,#03c3ff 50%,#fd0)"
      }
    },
  },
  plugins: [],
}
