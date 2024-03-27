const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
const sum = a + b;
const average = (sum / input.length).toFixed(1);

console.log(`${sum} ${average}`);