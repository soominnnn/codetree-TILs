const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = input.shift();
const array = input[0].split(" ");
const ascArray = array.sort((a, b) => Number(a) - Number(b));
const descArray = ascArray.map(el => el).reverse().join(" ");

console.log(ascArray.join(" "));
console.log(descArray);