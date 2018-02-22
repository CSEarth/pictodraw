const webpack = require('webpack');
const path = require('path');

const entry = [
  './react-component/app.js'
];
const output = {
  path: path.join(__dirname, '/build'),
  filename: 'bundle.js',
};

module.exports = {
  entry,
  output,
  devServer: {
    contentBase: path.join(__dirname),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include:[
          path.join(__dirname, "/react-component")
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:[ 'es2015', 'react' ]
        }
      }
    ]
  },
};
