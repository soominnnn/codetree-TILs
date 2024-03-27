const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
const share = Math.floor(a / b);
const remainder = a % b;

console.log(`${share}...${remainder}`);