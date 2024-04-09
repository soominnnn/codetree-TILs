const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const result = input.repeat(8);

console.log(result);