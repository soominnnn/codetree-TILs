const fs = require("fs");
let input = fs.readFileSync(0).toString();

console.log((Number(input) + 1.5).toFixed(2));