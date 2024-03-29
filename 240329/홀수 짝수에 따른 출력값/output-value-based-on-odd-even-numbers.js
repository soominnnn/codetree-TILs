const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function plusSum(n) {
    if(n === 0) {
        return 0;
    }
    
    if(n % 2 === 0) {
        if(n === 2) {
            return 2;
        }
        return n + plusSum(n - 2);
    } else {
        if(n === 1) {
            return 1;
        }
        return n + plusSum(n - 2);
    }
}

console.log(plusSum(+input));