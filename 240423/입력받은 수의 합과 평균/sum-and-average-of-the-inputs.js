const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.shift();

const sum = input.reduce((a, b) => Number(a) + Number(b));
const average = (sum / input.length).toFixed(1);

console.log(sum, average);