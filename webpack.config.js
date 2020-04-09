const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'public', 'index.html'),
  filename: './index.html'
})

module.exports = {

  entry: {
    app: path.join(__dirname, 'public', 'index.tsx')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: ["source-map-loader"]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
    ]
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  plugins: [
    htmlPlugin,
  ],

  devServer: {
    open: true,
  },
  
};