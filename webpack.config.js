const path = require('path');

module.exports = {
  mode: 'production',
  entry: './build/strings/strings.js',
  output: {
    path: path.resolve('lib'),
    filename: 'colors.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
