const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true, 
    watchFiles: ["src/**/*"], 
  },
  module: {
    rules: [
      // Handle HTML files
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      // Handle CSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Handle image files
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
