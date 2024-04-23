const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const [a, b, c] = [+input[0], +input[1], +input[2]];
let isInC = false;

for(let i = a; i <= b; i++) {
    if(i % c === 0) {
        isInC = true;
    }
}

console.log(!isInC ? 'YES' : 'NO');