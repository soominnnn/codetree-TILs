const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").filter(el => el % 2 === 0).length;

console.log(input);