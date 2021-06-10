module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sync': 'Syncopate',
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
