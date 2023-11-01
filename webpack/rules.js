const { CONFIG_PATHS } = require('./paths.config')
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  JS_JSX_RULE: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: isDevelopment ? ['react-refresh/babel'] : [],
      },
    },
  },
  TS_TSX_RULE: {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
  },
  CSS_SCSS_RULE: {
    test: /\.(css|scss)$/,
    include: [CONFIG_PATHS.src],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: isDevelopment,
        },
      },
      {
        loader: 'sass-loader',
        options: { sourceMap: isDevelopment },
      },
    ],
  },
}
