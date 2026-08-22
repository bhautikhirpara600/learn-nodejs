import { num } from "./math.js";
const meta = import.meta;
const { dirname, filename } = meta;

console.log(num);
console.log(meta);
console.log(filename);
console.log(dirname);
