const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const stringLength = input.map(el => el.length);
const result = Math.max(...stringLength) - Math.min(...stringLength);

console.log(result);