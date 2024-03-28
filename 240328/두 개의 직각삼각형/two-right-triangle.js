const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 0; i < +input; i++) {
    if(i === 0) {
        result += '*'.repeat(input * 2) + '\n';
    } else {
        result += '*'.repeat(+input - i) + ' '.repeat(i * 2) + '*'.repeat(+input - i) + '\n';
    }
}

console.log(result);