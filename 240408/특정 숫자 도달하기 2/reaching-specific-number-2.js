const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = +input; i >= 1; i--) {
    result += i + " ";
}

console.log(result);