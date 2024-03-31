const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const result = input[0].split(" ").map(el => el ** 2);

console.log(result.join(" "));