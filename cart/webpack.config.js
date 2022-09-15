const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new WebpackModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/bootstrap'
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}