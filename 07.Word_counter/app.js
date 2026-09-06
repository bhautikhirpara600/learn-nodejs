import fs from "node:fs/promises";

const filePath = process.argv[2];
const data = await fs.readFile(filePath, "utf-8");
const wordsArray = data.split(/\W/).filter((word) => word);

const wordCounter = {};
wordsArray.forEach((word) => {
  if (word in wordCounter) {
    wordCounter[word] += 1;
  } else {
    wordCounter[word] = 1;
  }
});

console.log(wordCounter);
