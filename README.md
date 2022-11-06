# webpack sandbox

webpack 動作確認のリポジトリです。

## npm package

step1〜step4 の各ディレクトリに package.json を配置しています。
各ディレクトリでそれぞれ npm パッケージのインストールを行ってください。

## Step1

シンプルな js で webpack の動作を確認します

```sh
npm run start
```

## Step2

babel-loader を使って loader の動作を確認します

```sh
npm run start
```

## Step3

babel-loader に合わせ ts-loader を使って複数の loader が適用される動作を確認します

```sh
npm run start
```

## Step4

更に vue-loader を合わせて利用し、動作を確認します

```sh
npm run build
```

`.step4/dist/index.html` をブラウザで表示すると、生成した Vue コンポーネントの動作を確認できます。
