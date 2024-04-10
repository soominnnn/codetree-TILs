const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const index = input.indexOf("0");
const result = +input[index - 1] + +input[index - 2] + +input[index - 3];

console.log(result);