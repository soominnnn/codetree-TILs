const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();
let result = '';

for(let i = 1; i <= input; i++) {
    if(i % 2 === 0) {
        continue;
    }
    
    if(String(i)[String(i).length - 1] === "5") {
        continue;
    }

    if(i % 3 === 0 && i % 9 !== 0) {
        continue;
    }

    result += i + ' ';
}

console.log(result);