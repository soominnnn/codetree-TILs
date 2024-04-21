const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = 1;

for(let i = 1; i <= 10; i++) {
    if(result >= +input) {
        return console.log(i - 1);
    }
    result *= i;
}

console.log("10");