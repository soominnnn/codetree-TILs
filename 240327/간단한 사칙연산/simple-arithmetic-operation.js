const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
const plus = a + b;
const minus = a - b;
const share = Math.floor(a / b);
const remainder = a % b;

console.log(plus);
console.log(minus);
console.log(share);
console.log(remainder);