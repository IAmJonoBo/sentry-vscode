const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: process.env.NODE_ENV || 'production',
  target: 'node',             // since this is a VS Code extension
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  externals: {
    vscode: 'commonjs vscode'  // the vscode-module is created on-the-fly and must be excluded
  }
};
