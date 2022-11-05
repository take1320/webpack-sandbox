import { hello } from "./hello";

export const main = async () => {
  console.log("start!");
  await hello();
  console.log("end!");
};
main();
