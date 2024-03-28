const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

function printStar(n) {
    if(n === 0) {
        return;
    }

    result += '* '.repeat(n) + '\n';
    printStar(n-1);
    result += '* '.repeat(n) + '\n';
}

printStar(+input);
console.log(result);