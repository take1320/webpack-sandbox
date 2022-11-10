const { VueLoaderPlugin } = require("vue-loader");

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
        test: /\.css$/,
        use: [
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "vue-style-loader実行後",
            },
          },
          {
            loader: "vue-style-loader",
          },
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "css-loader実行後",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "css-loader実行前",
            },
          },
        ],
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
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
        test: /\.vue$/,
        use: [
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "vue-loader実行後",
            },
          },
          {
            loader: "vue-loader",
          },
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "vue-loader実行前",
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        use: [
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "ts-loader実行後",
            },
          },
          {
            loader: "ts-loader",
            options: {
              // SEE: https://v3.ja.vuejs.org/guide/typescript-support.html#%E6%8E%A8%E5%A5%A8%E3%81%95%E3%82%8C%E3%82%8B%E6%A7%8B%E6%88%90
              appendTsSuffixTo: [/\.vue$/],
            },
          },
          {
            loader: `${__dirname}/debug-loader.js`,
            options: {
              message: "ts-loader実行前",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".vue"],
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    // mode:productionの場合はminimizeが実行される。結果を見やすくするためにfalseに変更
    minimize: false,
  },
  // IE向けにES5設定(babel-loaderも見てくれる)
  target: ["web", "es5"],
};
