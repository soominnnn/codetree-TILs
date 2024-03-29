const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const index = +input.shift();
const array = input[0].split(" ");
let maxNumber = 0;

function findMaxNumber(n) {
    if(n === 0) {
        if(maxNumber <= +array[0]) {
            return maxNumber = +array[0];
        }
    }

    if(maxNumber <= +array[n]) {
        maxNumber = +array[n];
    }

    return findMaxNumber(n-1);
}

findMaxNumber(+index);
console.log(maxNumber);