// import fs from "node:fs";
import fs from "node:fs/promises";

//async but callback hell
// import fs from "node:fs";

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//sync
// import fs from "node:fs";

// const content = fs.readFileSync("./text.txt", "utf-8");
// console.log(content);

//async await
const content = await fs.readFile("./text.txt", "utf-8");
console.log(content);
