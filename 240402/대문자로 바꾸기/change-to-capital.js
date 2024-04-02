const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const result = input.map(el => el.toUpperCase());

console.log(result.join("\n"));