const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);
const area = n * n;

console.log(n >= 5 ? area : `${area}\ntiny`);