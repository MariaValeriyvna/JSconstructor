const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
      port: 3000
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './src/index.html'
      })
   ],
   module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
         test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.woff2$|\.ttf$|\.svg$/, 
         loader: "file-loader",
         options: {
            name: '[path][name].[ext]',
         },
       },
      ],
    },
}