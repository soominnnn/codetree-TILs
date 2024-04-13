const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const result3 = input.filter(el => el % 3 === 0).length;
const result5 = input.filter(el => el % 5 === 0).length;

console.log(result3, result5);