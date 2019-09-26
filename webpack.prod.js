const { resolve } = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("tester-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].js",
    path: resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "GDPR Plugin",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  }
});
