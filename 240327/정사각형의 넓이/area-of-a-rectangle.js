const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);
const area = n ** 2;

console.log(area < 5 ? `${area}\ntiny` : area);