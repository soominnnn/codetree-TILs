const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const result = input.reverse().join('\n');

console.log(result);