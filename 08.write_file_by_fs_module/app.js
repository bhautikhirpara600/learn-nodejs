import fs from "node:fs/promises";

// const filePath = "C:\\Users\\bhirp\\OneDrive\\Desktop\\file-03.txt";
const filePath = "C:\\Users\\bhirp\\OneDrive\\Desktop\\my-image.webp";
const imagePath = "./bhautik-office.png";

// const dataBuffer = await fs.readFile("./file-1.txt");
// console.log(dataBuffer);
// fs.appendFile(filePath, dataBuffer);

const imageBuffer = await fs.readFile(imagePath);
console.log(imageBuffer);
fs.writeFile(filePath, imageBuffer);
