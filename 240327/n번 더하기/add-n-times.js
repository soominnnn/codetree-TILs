const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let result = '';

for(let i = 1; i <= +input[1]; i++) {
    result += +input[0] + (+input[1] * i) + '\n';
}

console.log(result);