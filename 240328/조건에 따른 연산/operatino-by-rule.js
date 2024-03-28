const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = +input;
let count = 0;

while(true) {
    count += 1;
    
    if(result % 2 === 0) {
        result = result * 3 + 1;
    } else {
        result = result * 2 + 2;
    }

    if(result >= 1000) {
        return console.log(count);
    }
}