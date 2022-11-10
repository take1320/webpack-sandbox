/** @type import('webpack').Configuration */
module.exports = {
  mode: "production",
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: [
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "babel-loader実行後",
            },
          },
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
            },
          },
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "babel-loader実行前",
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        loader: `${__dirname}/debug-loader.js`,
        options: {
          message: "ts-loader実行後",
        },
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.ts$/,
        loader: `${__dirname}/debug-loader.js`,
        options: {
          message: "ts-loader実行前",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  optimization: {
    // mode:productionの場合はminimizeが実行される。結果を見やすくするためにfalseに変更
    minimize: false,
  },
  // IE向けにES5設定(babel-loaderも見てくれる)
  target: ["web", "es5"],
};
