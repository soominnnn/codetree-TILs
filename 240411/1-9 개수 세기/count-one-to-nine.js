const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

let result = "";
const array = input[0].split(" ");

for(let i = 1; i <= 9; i++) {
    result += array.filter(el => +el === i).length + "\n";
}

console.log(result);