const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node", // set webpack bundle for nodeJS

  entry: ["./src/index.js"],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()], // for server code, exclude anything in node_modules bc node can import at runtime
};

module.exports = merge(baseConfig, config);
