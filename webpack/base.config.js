const path = require('path')
const { CONFIG_PATHS } = require('./paths.config')

module.exports = {
  entry: path.join(CONFIG_PATHS.src, 'index.tsx'),
  output: {
    filename: 'bundle.[contenthash].js',
    path: CONFIG_PATHS.build,
    clean: true,
    publicPath: '/',
  },
  resolve: {
    alias: { src: CONFIG_PATHS.src },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.join(__dirname, '..'), 'node_modules'],
  },
}
