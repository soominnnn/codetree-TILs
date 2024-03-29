const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const array1 = input[0].split(" ").sort((a, b) => Number(a) - Number(b)).join("");
const array2 = input[1].split(" ").sort((a, b) => Number(a) - Number(b)).join("");

console.log(array1 === array2 ? "Yes" : "No");