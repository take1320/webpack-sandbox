import { hello } from "./hello";

export const main = async (): Promise<void> => {
  console.log("start!");
  await hello();
  console.log("end!");
};
main();
