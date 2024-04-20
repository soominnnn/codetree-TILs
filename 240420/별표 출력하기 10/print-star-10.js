const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 0; i < +input * 2; i++) {
    if(i % 2 === 1) {
        result += '* '.repeat(+input - (i - 1) / 2) + '\n';
        continue;
    }
    result += '* '.repeat(1 + (i / 2)) + '\n';
}

console.log(result);