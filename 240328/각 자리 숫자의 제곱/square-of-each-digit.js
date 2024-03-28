const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function squareNumber(n) {
    if(n < 10) {
        return n ** 2;
    }
    return squareNumber(Math.floor(n / 10)) + (n % 10) ** 2;
}

console.log(squareNumber(+input));