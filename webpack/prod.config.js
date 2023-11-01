const { htmlPlugin } = require('./plugins')
const { JS_JSX_RULE, TS_TSX_RULE, CSS_SCSS_RULE } = require('./rules')

module.exports = {
  mode: 'production',
  target: 'browserslist',
  module: {
    rules: [JS_JSX_RULE, TS_TSX_RULE, CSS_SCSS_RULE],
  },
  plugins: [htmlPlugin],
}
