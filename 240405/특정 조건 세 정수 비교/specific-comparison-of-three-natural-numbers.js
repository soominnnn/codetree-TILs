const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const minNumber = Math.min(...input);
let result = '';

if(+input[0] === minNumber) {
    result += 1 + " ";
} else {
    result += 0 + " ";
}

if(new Set(...input).length === 1) {
    result += 1;
} else {
    result += 0;
}

console.log(result);