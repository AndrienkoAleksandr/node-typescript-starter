const path = require('path')
const nodeExternals = require('webpack-node-externals');

const tsRule = {
  test: /\.ts$/,
  use: [
    {
      loader: 'ts-loader',
    }
  ],
  exclude: /node_modules/
}

const config = [
  {
    entry: {
      client: './src/client/index.ts',
    },
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'client-bundle.js',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        tsRule
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
  },
  {
    entry: {
      server: './src/node/index.ts'
    },
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server-bundle.js',
    },
    module: {
      rules: [
        tsRule
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
  }
]

module.exports = config
