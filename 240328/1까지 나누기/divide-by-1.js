const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();
let result = +input;

for(let i = 1; i <= +input; i++) {
    result = Math.floor(result / i);

    if(result <= 1) {
        console.log(i);
        break;
    }
}