const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {
          plugins: [
            "syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties"
          ],
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ]
          ]
        }
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },
      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },
  devServer: {
    open: true
  }
};
