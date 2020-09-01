module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      presets: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}
