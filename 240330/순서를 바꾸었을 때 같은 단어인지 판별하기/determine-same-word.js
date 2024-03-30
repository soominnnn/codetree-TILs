const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const word1 = input[0].split("").sort().join("");
const word2 = input[1].split("").sort().join("");

console.log(word1 === word2 ? "Yes" : "No");