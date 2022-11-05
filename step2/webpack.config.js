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
                  // {
                  //   useBuiltIns: "usage",
                  //   corejs: 3,
                  // },
                ],
              ],
              // 対象のブラウザを指定するとブラウザの対応に合わせ変換してくれる
              targets: {
                chrome: "100",
                // ie: "11",
              },
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
};
