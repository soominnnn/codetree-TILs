const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const a = Number(input[0]) + 87;
const b = Number(input[1]) % 10;

console.log(a);
console.log(b);