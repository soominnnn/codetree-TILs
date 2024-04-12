const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const index = input.indexOf('0') !== -1 ? input.indexOf('0') : input.length - 1;
const array = input.filter((el, idx) => el % 2 === 0 && idx < index + 1);
const sum = array.reduce((a, b) => Number(a) + Number(b));

console.log(array.length - 1, sum);