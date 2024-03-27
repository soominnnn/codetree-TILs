const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").sort((a, b) => Number(a) - Number(b));

console.log(+input[1]);