const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
      minimizer: [new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        include: /.*?/,
      })],
    },
  },
};
