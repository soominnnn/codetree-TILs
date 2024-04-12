const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const even = input.filter(el => el % 2 === 0);
const evenSum = even.reduce((a, b) => Number(a) + Number(b), 0);
const multiplesOfThree = input.filter(el => el % 3 === 0);
const multiplesSum = multiplesOfThree.reduce((a, b) => Number(a) + Number(b), 0);
const average = Math.floor(multiplesSum / multiplesOfThree.length).toFixed(1);

console.log(evenSum, average);