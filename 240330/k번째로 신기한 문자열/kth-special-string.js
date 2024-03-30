const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const requirement = input.shift().split(" ");
const array = input.filter(el => el.startsWith(requirement[2])).sort();

console.log(array[+requirement[1] - 1]);