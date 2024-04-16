const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = +input; i >= 1; i--) {
    const word = '*'.repeat(i) + ' ';
    const sentence = word.repeat(i) + '\n';

    result += sentence;
}

console.log(result);