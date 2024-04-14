const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const filteredNumber = input.filter(el => +el % 2 === 1 && +el % 3 === 0);
const result = filteredNumber.length !== 0 ? filteredNumber.reduce((a, b) => Number(a) + Number(b)) : 0;

console.log(result);