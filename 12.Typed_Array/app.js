// Typed Arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. They are used to handle binary data in a more efficient way than regular JavaScript arrays.

// Typed Arrays are built on top of ArrayBuffer, which is a generic, fixed-length binary data buffer. Each Typed Array type corresponds to a specific data type and provides a view into the underlying ArrayBuffer.

// Int8Array
// Int16Array
// Int32Array
// BigInt64Array

// Uint8Array
// Uint8ClampedArray
// Uint16Array
// Uint32Array
// BigUint64Array

// Float32Array
// Float64Array

// const buffer = new ArrayBuffer(4); // Create an ArrayBuffer of 4 bytes
// const typedArray = new Int8Array(buffer); // Create a typed array of 4 signed 8-bit integers
// console.log(typedArray);

// const typedArray = new Int8Array(4); // Create a typed array of 4 signed 8-bit integers
// typedArray[0] = 42;
// typedArray[1] = 0x2a; // hexadecimal representation of 42
// typedArray[2] = 0o52; // octal representation of 42
// typedArray[3] = 0b00101010; // binary representation of 42
// console.log(typedArray); // Output: Int8Array(4) [ 42, 42, 42, 42 ]

const typedArray = new Int8Array([36, 0x5b, 0o75, 0b00111010]); // Create a typed array with initial values
console.log(typedArray); // Output: Int8Array(4) [ 36, 91, 61, 58 ]

