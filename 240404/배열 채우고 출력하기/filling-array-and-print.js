const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const result = input.reverse().join("");

console.log(result);