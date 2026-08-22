const fs = require('fs');

const text = fs.readFileSync('./user.txt', 'utf-8');

console.log(text.toString());