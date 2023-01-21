module.exports = {
  content: [
    'themes/pedal/layouts/**/*.html',
    './layouts/**/*.html',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
