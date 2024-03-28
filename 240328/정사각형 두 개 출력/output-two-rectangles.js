const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 0; i < +input; i++) {
    result += '*'.repeat(+input) + '\n';
}

console.log(result + '\n' + result);