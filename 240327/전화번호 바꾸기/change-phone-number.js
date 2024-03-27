const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("-");
const result = `${input[0]}-${input[2]}-${Number(input[1])}`;

console.log(result);