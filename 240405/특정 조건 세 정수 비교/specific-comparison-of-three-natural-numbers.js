const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const minNumber = Math.min(...input);
const indexOneNumberCount = input.filter(el => el === input[0]).length
let result = '';

if(+input[0] === minNumber) {
    result += 1 + " ";
} else {
    result += 0 + " ";
}

if(indexOneNumberCount === 3) {
    result += 1;
} else {
    result += 0;
}

console.log(result);