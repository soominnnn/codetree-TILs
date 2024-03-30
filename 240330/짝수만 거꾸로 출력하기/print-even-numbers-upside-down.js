const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const result = input.filter(el => el % 2 === 0).sort((a, b) => Number(a) - Number(b));

console.log(result.join(" "));