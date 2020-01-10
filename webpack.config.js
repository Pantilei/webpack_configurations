module.exports = {
  entry: [
    "./src/index.js" //Which files should I bundle?
  ],
  output: {
    path: __dirname + "/dist", //Where should I output the result?
    publicPath: "/",
    filename: "bundle.js" // What should be the filename?
  },
  devServer: {
    contentBase: "./dist" // Where I shoud serve the files from
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"] // To transpile ES6 code to ES5 except files inside /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["eslint-loader"] // Check for the errors in js files
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
