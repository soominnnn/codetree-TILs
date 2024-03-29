const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");
const result = input.sort().join("");

console.log(result);