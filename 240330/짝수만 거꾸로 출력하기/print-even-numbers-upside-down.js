const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const array = input[0].split(" ");

const result = array.filter(el => el % 2 === 0).reverse();

console.log(result.join(" "));