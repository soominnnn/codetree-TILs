const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let result = [];

for(let i = +input; i <= 100; i++) {
    if(i >= 90) {
        result.push('A');
        continue;
    }
    if(i >= 80) {
        result.push('B');
        continue;
    }
    if(i >= 70) {
        result.push('C');
        continue;
    }
    if(i >= 60) {
        result.push('D');
        continue;
    }
    result.push('F');
}

console.log(result.join(' '));