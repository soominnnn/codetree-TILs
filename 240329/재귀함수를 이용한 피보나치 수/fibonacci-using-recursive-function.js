const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function fibonacci(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(+input));