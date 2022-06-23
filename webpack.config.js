const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  // devServer: {
  //   host: "localhost",
  //   hot: true,
  //   static: {
  //     directory: path.join(__dirname, "bundle"),
  //     publicPath: "/",
  //   },
  //   compress: false,
  //   port: 8080,
  //   proxy: {
  //     "/": {
  //       target: "http://localhost:4000/",
  //       secure: false,
  //     },
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./index.html",
    }),
  ],
  devServer: {
    static: {
      publicPath: "/bundle",
      directory: path.join(__dirname, "client"),
    },
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
};
