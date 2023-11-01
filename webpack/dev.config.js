const path = require('path')
const { htmlPlugin, reactRefreshPlugin } = require('./plugins')
const { JS_JSX_RULE, TS_TSX_RULE, CSS_SCSS_RULE } = require('./rules')
const { CONFIG_PATHS } = require('./paths.config')

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [JS_JSX_RULE, TS_TSX_RULE, CSS_SCSS_RULE],
  },
  plugins: [htmlPlugin, reactRefreshPlugin],
  devServer: {
    static: CONFIG_PATHS.dist,
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
}
