const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
const sum = a + b + c;
const average = sum / input.length;
const minus = sum - average;

console.log(sum);
console.log(average);
console.log(minus);