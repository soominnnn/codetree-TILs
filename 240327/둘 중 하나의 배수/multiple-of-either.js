const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();

console.log(input % 3 === 0 || input % 5 === 0 ? 1 : 0);