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
      extend:{
        screens: {
          '-xl' : {max: '1440px'},
          '-lg' : {max: '1025px'},
          '-md' : {max: '768px'},
          '-sm' : {max: '480px'},          
        },
      },

  },
  plugins: [],
})
