const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const result = input.reduce((a, b) => Number(a) + Number(b), 0);

console.log(result);