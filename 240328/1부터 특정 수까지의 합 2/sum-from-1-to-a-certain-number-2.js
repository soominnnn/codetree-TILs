const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function plusSum(n) {
    if(n === 1) {
        return 1;
    }

    return plusSum(n-1) + n;
}

console.log(plusSum(+input));