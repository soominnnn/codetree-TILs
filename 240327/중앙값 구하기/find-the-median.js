const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").sort();

console.log(+input[1]);