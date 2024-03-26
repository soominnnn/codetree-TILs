const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input).toFixed(2);

console.log(input);