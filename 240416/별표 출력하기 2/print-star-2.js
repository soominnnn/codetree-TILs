const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = +input; i >= 1; i--) {
    const sentence = '* '.repeat(i) + '\n';
    
    result += sentence;
}

console.log(result);