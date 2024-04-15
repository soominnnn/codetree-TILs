const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = [];

for(let i = 1; i <= +input; i++) {
    result.push(i % 2 === 0 || i % 3 === 0 ? 1 : 0);
}

console.log(result.join(' '));