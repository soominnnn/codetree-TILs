const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const scoreSum = input.reduce((a, b) => Number(a) + Number(b));
const average = (scoreSum / input.length).toFixed(1);

console.log(average);