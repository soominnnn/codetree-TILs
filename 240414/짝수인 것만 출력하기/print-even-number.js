const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.shift();

const result = input[0].split(' ').filter(el => +el % 2 === 0).join(' ');

console.log(result);