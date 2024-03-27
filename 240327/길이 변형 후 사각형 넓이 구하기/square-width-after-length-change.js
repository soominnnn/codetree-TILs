const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
const width = a + 8;
const height = b * 3;
const area = width * height;

console.log(width);
console.log(height);
console.log(area);