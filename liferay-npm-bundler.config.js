module.exports = {
  "create-jar": false,
  source: "react-src",
  output: "src",
  workdir: "build",
  exports: {
    "sample-fragment": "./sample-collection/sample-fragment/main.js"
  },
  imports: {
    "frontend-js-react-web": {
      react: "*"
    }
  },
  webpack: {
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          ]
        }
      ]
    }
  }
};
