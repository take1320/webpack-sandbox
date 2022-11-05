import { sleep } from "./sleep";

/** とりあえずhello */
export const hello = async () => {
    console.log("🍣 > hello!");

    // ３秒間をおいてから返事
    await sleep(3000);

    console.log("🍺 > hello!!");
};
