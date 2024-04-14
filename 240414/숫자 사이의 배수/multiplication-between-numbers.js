const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const [a, b] = [+input[0], +input[1]];
let sum = 0;
let count = 0;

for(let i = a; i <= b; i++) {
    if(i % 5 === 0 || i % 7 === 0) {
        sum += i;
        count += 1;
    }
}

const average = (sum / count).toFixed(1);

console.log(sum, average);