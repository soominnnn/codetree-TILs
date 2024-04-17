const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.shift();

const array = [...new Set(input[0].split(' '))];
const result = Math.max(...array);

console.log(result);