const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const filteredNumber = input.filter((_, index) => index === 2 || index === 4 || index === 9);
const result = filteredNumber.reduce((a, b) => Number(a) + Number(b));

console.log(result);