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
        test: /\.*$/,
        loader: `${__dirname}/debug-loader.js`,
        options: {
          message: "END",
          hideSource: true,
        },
      },
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
              // 対象のブラウザを指定するとブラウザの対応に合わせ変換してくれる
              targets: {
                // chrome: "100",
                ie: "11",
              },
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
      {
        test: /\.*$/,
        loader: `${__dirname}/debug-loader.js`,
        options: {
          message: "START!",
          hideSource: true,
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
};
