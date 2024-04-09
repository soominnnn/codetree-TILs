const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let num = 1;
let result = "";

while(num * 3 <= +input) {
    result += num * 3 + " ";
    num += 1;
}

console.log(result);