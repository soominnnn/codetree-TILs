const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let sum = 0
let result = 0;

for(let i = 0; i < input.length; i++) {
    if(+input[i] >= 30 || +input[i] < 20) {
        result = (sum / i).toFixed(2);
        console.log(result);
        break;
    }

    sum += +input[i];
}