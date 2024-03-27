const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
const plus = a + b;
const minus = a - b;
const result = (plus / minus).toFixed(2);

console.log(result);