const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = [+input[0], +input[1]];
let result = '';

if(a < b) {
    result += "1 "; 
} else {
    result += "0 "
}

if(a === b) {
    result += "1";
} else {
    result += "0";
}

console.log(result);