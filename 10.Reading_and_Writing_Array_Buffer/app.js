const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

// setInt8 is used to set a signed 8-bit integer at the specified byte offset
view.setInt8(0, 42);
view.setInt8(1, 0x2a);

// setUint8 is used to set an unsigned 8-bit integer at the specified byte offset
view.setint8(2, 7);
view.setUint8(3, -7); // -7 will be converted to 249 (0xF9) since it's unsigned

console.log(view.getInt8(0)); // 42
console.log(view.getInt8(1)); // 42
console.log(view.getInt8(2)); // 7
console.log(view.getUint8(3)); // 249

// cmd for inspect in chrome
// node --inspect-brk app.js
