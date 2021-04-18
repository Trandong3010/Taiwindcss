const taiwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    taiwindcss('./tailwind.config.js'),
    require('autoprefixer')
  ],
}
