const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const result = input.sort().join("\n");

console.log(result);