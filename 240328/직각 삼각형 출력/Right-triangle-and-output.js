const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 1; i <= +input * 2; i += 2) {
    result += '*'.repeat(i) + '\n';
}

console.log(result);