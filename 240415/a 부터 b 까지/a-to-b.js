const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const [a, b] = [+input[0], +input[1]];
let result = [];

for(let i = a; i <= b;) {
    result.push(i);
    
    if(i % 2 === 0) {
        i += 3;
    } else {
        i *= 2;
    }
}

console.log(result.join(' '));