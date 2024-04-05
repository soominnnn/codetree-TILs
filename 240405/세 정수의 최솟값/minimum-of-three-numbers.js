const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const result = Math.min(...input);

console.log(result);