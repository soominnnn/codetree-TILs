const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const [a, b] = [+input[0], +input[1]];
let result = 0;

for(let i = a; i <= b; i++) {
    result += i;
}

console.log(result);