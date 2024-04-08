const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let num = 1;
let result = "";

while(num <= +input) {
    result += num + " ";
    num += 1;
}

console.log(result);