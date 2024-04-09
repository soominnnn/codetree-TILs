const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = "";
let num = +input;

while(num >= 1) {
    result += num + " ";
    num -= 1;
}

console.log(result);