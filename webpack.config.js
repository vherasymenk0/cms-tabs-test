const baseConfig = require('./webpack/base.config.js')
const devConfig = require('./webpack/dev.config.js')
const prodConfig = require('./webpack/prod.config.js')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = isDevelopment ? { ...baseConfig, ...devConfig } : { ...baseConfig, ...prodConfig }
