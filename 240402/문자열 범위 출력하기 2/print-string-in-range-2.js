const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input.pop();
const result = input[0].split("").slice(input[0].length - n, input[0].length).reverse();
console.log(result.join(""))