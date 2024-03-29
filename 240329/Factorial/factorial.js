const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function factorial(n) {
    if(n === 0) {
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(+input));