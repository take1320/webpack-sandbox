import { sleep } from "./sleep";

/** とりあえずhello */
export const hello = async () => {
    // tree-shakingで消えるハズ
    const unusedVar = "hoge";

    console.log("🍣 > hello!");

    // ３秒間をおいてから返事
    await sleep(3000);

    console.log("🍺 > hello!!");
};

export const unusedMethod = async () => {
    console.log("🍣 > unused!");
};
