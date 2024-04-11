const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.shift();

const array = input[0].split(' ').sort((a, b) => Number(b) - Number(a));
const result = array[0] + ' ' + array[1];

console.log(result);