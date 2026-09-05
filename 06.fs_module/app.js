// import fs from "node:fs";
import fs from "node:fs/promises";

//async but callback hell
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//sync
// const content = fs.readFileSync("./text.txt", "utf-8");
// console.log(content);

//async await
const content = await fs.readFile("./text.txt", "utf-8");
console.log(content);
