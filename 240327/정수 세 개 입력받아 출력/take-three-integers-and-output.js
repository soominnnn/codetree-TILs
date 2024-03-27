const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const firstLine = input[0].split(" ");

console.log(firstLine[0], firstLine[1], Number(input[1]));