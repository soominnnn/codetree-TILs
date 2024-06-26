const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const index = input.indexOf('0') !== -1 ? input.indexOf('0') : input.length;
const array = input.filter((el, idx) => el % 2 === 0 && idx < index);
const sum = array.reduce((a, b) => Number(a) + Number(b), 0);

console.log(array.length, sum);