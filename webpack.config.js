const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3000,
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
// 아래의 것은 맨처음에 했던 것, 동작 잘 되는중!
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   resolve: {
//     extensions: [".tsx", ".ts", "..."],
//   },
//   devServer: {
//     port: 3000,
//     liveReload: true,
//   },
//   output: { filename: "build.js", clean: true },
//   plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
//   module: {
//     rules: [{ test: /\.(js|jsx|ts|tsx)$/, use: "babel-loader" }],
//   },
// };
