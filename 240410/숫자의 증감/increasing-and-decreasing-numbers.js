const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let result = '';

if(input[0] === "A") {
    for(let i = 1; i <= +input[1]; i++) {
        result += i + " ";
    }
}

if(input[0] === "D") {
    for(let i = +input[1]; i >= 1; i--) {
        result += i + " ";
    }
}

console.log(result);