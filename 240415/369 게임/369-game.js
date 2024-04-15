const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = [];

for(let i = 1; i <= +input; i++) {
    if(i % 3 === 0 || String(i).includes('3') || String(i).includes('6') || String(i).includes('9')) {
        result.push(0);
        continue;
    }
    result.push(i);
}

console.log(result.join(' '));