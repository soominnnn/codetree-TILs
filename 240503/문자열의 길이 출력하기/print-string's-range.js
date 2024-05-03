const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const result = input.length - 1;

console.log(result);