/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ['./client/components/*.tsx', './public/index.html'],
  theme: {
      colors: {
        white: '#FFFFFF',
        grey: '#D9D9D9',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
  },
  plugins: [],
})
