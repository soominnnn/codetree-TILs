const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();

console.log(input >= 113 ? 1 : 0);