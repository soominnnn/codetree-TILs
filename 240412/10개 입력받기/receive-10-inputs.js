const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const index = input.indexOf('0') !== -1 ? input.indexOf('0') : input.length - 1;
const array = input.filter((_, idx) => idx < index);
const sum = array.reduce((a, b) => Number(a) + Number(b), 0);
const average = (sum / array.length).toFixed(1);

console.log(sum, average);