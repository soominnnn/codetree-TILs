const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const result = Math.max(...input);

console.log(result);