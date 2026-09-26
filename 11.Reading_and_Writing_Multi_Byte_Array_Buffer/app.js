// cmd for inspect in chrome
// node --inspect-brk app.js

const buffer = new ArrayBuffer(32);

const view = new DataView(buffer);

// view.setInt16(0, 155);

// console.log(view.getInt16(0)); // 155

view.setInt32(0, 0x72e1f3a5, true); // little-endian

console.log(view.getInt32(0, true)); // 1929376453