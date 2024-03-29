const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const nk = input[0].split(" ");
const array = input[1].split(" ").sort((a, b) => Number(a) - Number(b));
const result = array[nk[1] - 1];

console.log(result);