import { sleep } from "./sleep";

// 雰囲気だけの型
export type IHello = () => Promise<void>;

/** とりあえずhello */
export const hello:IHello = async (): Promise<void> => {
  console.log("🍣 > hello!");

  // ３秒間をおいてから返事
  await sleep(3000);

  console.log("🍺 > hello!!");
};
