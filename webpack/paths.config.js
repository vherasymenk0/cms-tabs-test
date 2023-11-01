const path = require('path')

module.exports = {
  CONFIG_PATHS: {
    src: path.resolve(__dirname, '..', 'src'),
    dist: path.resolve(__dirname, '..', 'dist'),
    build: path.resolve(__dirname, '..', 'build'),
  }
}