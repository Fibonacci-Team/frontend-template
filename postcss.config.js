module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker')({
      sort: true
    }),
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
};
