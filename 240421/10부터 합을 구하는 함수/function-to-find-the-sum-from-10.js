const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = 0;

for(let i = 10; i <= +input; i++) {
    result += i;
}

console.log(result);