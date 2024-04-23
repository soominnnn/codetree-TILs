const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let sum = 0;
let count = 0;
let average = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] >= 0 && input[i] <= 200) {
        sum += +input[i];
        count += 1;
    }
}

average = (sum / count).toFixed(1);
console.log(sum, average);