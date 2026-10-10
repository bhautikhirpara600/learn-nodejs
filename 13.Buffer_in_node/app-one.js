import { Buffer, constants } from "buffer";

const nodeBuffer1 = Buffer.alloc(4); //slow but initialized memory
const nodeBuffer2 = Buffer.allocUnsafe(4); //fast but uninitialized memory

const arrayBuffer1 = nodeBuffer1.buffer; // underlying ArrayBuffer for nodeBuffer1
const arrayBuffer2 = nodeBuffer2.buffer; // underlying ArrayBuffer for nodeBuffer2

console.log(nodeBuffer1.byteLength); // Output: 4
console.log(nodeBuffer2.byteLength); // Output: 4

console.log("------------------------------------------------------");

console.log(arrayBuffer1.byteLength);
console.log(arrayBuffer2.byteLength);

console.log(constants.MAX_LENGTH);