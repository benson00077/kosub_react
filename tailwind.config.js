/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'dusk-pattern': "url('../src/asset/dusk.jpg')",
        'dusk-gradient':
          'linear-gradient(to bottom, rgba(54,59,89,1) 0%, rgba(122,108,131,1) 50%, rgba(253,206,151,255) 100%)',
        'dawn-gradient':
          'linear-gradient(to bottom, rgba(63,76,93,255) 0%, rgba(160,166,172,255) 50%, rgba(234,186,129,255) 100%)',
        'texture-pattern':
          "url('https://www.transparenttextures.com/patterns/brushed-alum.png'), linear-gradient(45deg,#3f429f,#03c3ff 50%,#fd0)",
      },
    },
  },
  plugins: [],
}
