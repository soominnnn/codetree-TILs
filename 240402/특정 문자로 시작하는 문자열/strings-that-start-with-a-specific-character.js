const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const alphabet = input.pop();
const array = input.filter(el => el.startsWith(alphabet));
const average = (array.reduce((a, b) => Number(a) + Number(b.length), 0) / array.length).toFixed(2);

console.log(array.length, average);