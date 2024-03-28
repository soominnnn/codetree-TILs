const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

function printNumberAsc(number) {
    if(number === 0) {
        return;
    }

    printNumberAsc(number - 1);
    result += number + ' ';
}

function printNumberDesc(number) {
    if(number === 0) {
        return;
    }

    result += number + ' ';
    printNumberDesc(number - 1);
}

printNumberAsc(input);
result += '\n';
printNumberDesc(input);
console.log(result);