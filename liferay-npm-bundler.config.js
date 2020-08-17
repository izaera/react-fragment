// Import default DXP preset (the same liferay-npm-scripts uses, refactored for bundler 3)
const defaults = require("liferay-npm-bundler/lib/liferay-npm-bundler.config.js");

module.exports = {
  ...defaults,
  source: "react-src",
  output: "src",
  workdir: "build",
  exports: {
    "sample-fragment": "./sample-collection/sample-fragment/main.js"
  },
  webpack: {
    ...defaults.webpack,
    module: {
      ...defaults.module,
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
