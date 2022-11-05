/** @type import('webpack').Configuration */
module.exports = {
  mode: "production",
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    // mode:productionの場合はminimizeが実行される。結果を見やすくするためにfalseに変更
    minimize: false,
  },
};
