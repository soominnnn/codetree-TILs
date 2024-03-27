const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();

console.log(input % 3 === 0 ? "YES" : "NO");
console.log(input % 5 === 0 ? "YES" : "NO");