const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const array = input[0].split(" ");
const minNumber = Math.min(...array);
const minNUmberCount = array.filter(el => +el === minNumber).length;

console.log(minNumber, minNUmberCount);