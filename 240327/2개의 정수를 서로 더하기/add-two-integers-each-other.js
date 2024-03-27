const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]) + Number(input[1]);
let b = Number(input[1]) + a;

console.log(`${a} ${b}`);