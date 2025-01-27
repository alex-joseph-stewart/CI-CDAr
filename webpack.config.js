const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for your app (main JavaScript file)
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Directory where bundled files will go
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Load CSS and inject styles into the DOM
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {filename: 'images/[name][hash][ext][query]'}
      }
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve files from the 'dist' directory
    port: 3000, // Dev server port
    open: true, // Automatically open the browser when the server starts
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML file
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.png'], // Resolve .js and .jsx extensions
  },
};

