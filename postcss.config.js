// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');
// const tailwindConfig = require('./tailwind.config.js');

// module.exports = {
//   plugins: [tailwindcss(tailwindConfig), autoprefixer],
// };


const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss
  ],
};