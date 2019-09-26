const { resolve } = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "main.js",
    path: resolve(__dirname, "dist")
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "GDPR Plugin",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ],

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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
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
