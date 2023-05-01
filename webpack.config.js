const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  mode: "production",
  entry: './src/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /coverage/,
          /lib/,
          /dist/
        ],
      },
    ],
  },
};

module.exports = config;
