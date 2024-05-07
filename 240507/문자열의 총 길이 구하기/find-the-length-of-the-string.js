const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const result = input.join('').length;

console.log(result);