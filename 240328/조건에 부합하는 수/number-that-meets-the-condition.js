const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 1; i <= +input; i++) {
    if(i % 2 === 0 && i % 4 !== 0) continue;
    if(Math.floor(i / 8) % 2 === 0) continue;
    if((i % 7) < 4) continue;

    result += i + ' ';
}

console.log(result);