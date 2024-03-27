const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".");
const result = `${input[1]}-${input[2]}-${Number(input[0])}`;

console.log(result);