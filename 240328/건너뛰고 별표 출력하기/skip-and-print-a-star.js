const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 1; i < +input * 2; i++) {
    if(i > +input) {
        result += '*'.repeat(i - 2 * (i - input)) + '\n\n';
    } else {
        result += '*'.repeat(i) + '\n\n';
    }
}

console.log(result);