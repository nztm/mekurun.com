const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/js/main.js"),
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          {
            loader: "eslint-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
