module.exports = function (source) {
  const options = this.getOptions();

  // NOTE: ローダーのtestはpathを参照している
  console.log(
    "[debug:message_path] 🚩🚩🚩 message:" +
      options.message +
      ", path:" +
      this.resourcePath +
      ", query:" +
      this.resourceQuery
  );

  if (!options.hideSource) {
    console.log("[debug:source] " + source);
  }

  return source;
};
