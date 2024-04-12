const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const even = input.filter((_, idx) => idx % 2 !== 0);
const evenSum = even.reduce((a, b) => Number(a) + Number(b), 0);
const multiplesOfThree = input.filter((_, idx) => idx % 3 === 2);
const multiplesSum = multiplesOfThree.reduce((a, b) => Number(a) + Number(b), 0);
const average = (multiplesSum / multiplesOfThree.length).toFixed(1);

console.log(evenSum, average);