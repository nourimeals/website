const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${__dirname}/src/main.jsx`,
  output: {
    path: `${__dirname}/docs`,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlPlugin({ template: __dirname + '/src/index.html' })
  ],
  module: { 
    rules: [
      {
        test: /\.jsx?$/, loader: ['babel-loader'], exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          } 
        }]
      }
    ]
  }
}

module.exports = config;