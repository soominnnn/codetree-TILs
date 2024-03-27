const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const a = +input.shift();
const array = input[0].split(" ");
let result = '';

for(let i = 0; i < array.length; i++) {
    result += a > +array[i] ? `1\n` : `0\n`;
}

console.log(result);