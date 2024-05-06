const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const firstLine = input[0].split('').filter(el => el !== ' ').join('');
const twiceLine = input[1].split('').filter(el => el !== ' ').join('');
const result = firstLine.concat(twiceLine);

console.log(result);