const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle
    clean: true, // Clean dist folder before each build
  },
  mode: 'development', // Use 'production' for optimized builds
  devServer: {
    static: './dist',
    port: 8080, // Dev server port
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Load CSS files
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile modern JavaScript
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader', // Load HTML templates
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i, // Match common image formats
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]', // Output image path and name format
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Use the custom HTML template
    }),
  ],
  resolve: {
    alias: {
      images: path.resolve(__dirname, './images/'),
    },
  },
};
