/** @type import('webpack').Configuration */
module.exports = {
  mode: "production",
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  // NOTE: polyfillは今回扱わない(ちょっと詰まった)
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    // mode:productionの場合はminimizeが実行される。結果を見やすくするためにfalseに変更
    minimize: false,
  },
  // IE向けにES5設定(babel-loaderも見てくれる)
  target: ["web", "es5"],
};
