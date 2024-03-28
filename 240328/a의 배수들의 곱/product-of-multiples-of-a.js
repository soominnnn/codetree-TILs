const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let sum = 1;

for(let i = 1; i <= +input[1]; i++) {
    sum *= i % +input[0] === 0 ? i : 1; 
}

console.log(sum);