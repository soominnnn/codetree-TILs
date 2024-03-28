const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

function printNumber(n) {
    if(n === 0) {
        return;
    }

    result += n + ' ';
    printNumber(n - 1);
    result += n + ' '; 
}

printNumber(+input);
console.log(result);