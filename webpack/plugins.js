const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CONFIG_PATHS } = require('./paths.config')

module.exports = {
  htmlPlugin: new HtmlWebpackPlugin({
    template: path.join(CONFIG_PATHS.dist, 'index.html'),
    filename: 'index.html',
  }),
  reactRefreshPlugin: new ReactRefreshWebpackPlugin(),
}
