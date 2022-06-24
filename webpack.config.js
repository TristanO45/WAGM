const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  devServer: {
    host: "localhost",
    hot: true,
    // static: {
    //   directory: path.join(__dirname, "build"),
    //   publicPath: "/",
    // },
    // compress: false,
    // port: 8080,
    proxy: {
      "*": {
        target: "http://localhost:4000/",
        secure: false,
      },
    },
  },
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
      {
        test: /\.scss/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  // devServer: {
  //   static: {
  //     publicPath: "/bundle",
  //     directory: path.join(__dirname, "client"),
  //   },
  //   proxy: {
  //     "/api": "http://localhost:4000",
  //   },
  // },
};
