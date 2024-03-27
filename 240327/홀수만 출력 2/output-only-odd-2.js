const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let result = '';

for(let i = +input[0]; i >= +input[1]; i--) {
    result += i % 2 !== 0 ? i + ' ' : '';
}

console.log(result);