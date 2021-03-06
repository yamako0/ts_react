const path = require('path')

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
    publicPath: '/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.css?$/, loader: "css-loader" },
      { test: /\.(jpg|png|svg)?$/, loader: "file-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname + "/build"),
    inline: true,
    // hot: true, // package.jsonのオプションじゃないとダメらしい
    // noInfo: true,
    publicPath: '/',
    port: 25000,
    host: "0.0.0.0",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  watchOptions: {
    poll: 1000
  }
};
