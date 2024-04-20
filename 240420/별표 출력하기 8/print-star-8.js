const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 1; i <= +input; i++) {
    if(i % 2 === 1) {
        result += '*' + '\n';
        continue;
    }
    result += '* '.repeat(i) + '\n';    
}

console.log(result);