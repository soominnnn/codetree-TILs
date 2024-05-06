const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const array = input[0].split('').filter(el => el !== '');
const result = array.filter(el => el === input[1]).length;

console.log(result);