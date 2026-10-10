import { Buffer } from "buffer";

const buffer1 = Buffer.from([97, 98, 99, 100]);
const buffer2 = Buffer.alloc(4);
const buffer3 = Buffer.allocUnsafe(4);
const buffer4 = Buffer.allocUnsafeSlow(4);

console.log(buffer1.toString()); // Output: abcd
console.log(buffer2); // Output: <Buffer 00 00 00 00>
console.log(buffer3); // Output: <Buffer ...> (uninitialized memory, may contain random data)
console.log(buffer4); // Output: <Buffer ...> (uninitialized memory, may contain random data)
