const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const number = input[0] * input[1] * input[2];

function sum(n) {
    if(n < 10) {
        return n;
    }
    return sum(Math.floor(n / 10)) + sum(n % 10);
}

console.log(sum(number));