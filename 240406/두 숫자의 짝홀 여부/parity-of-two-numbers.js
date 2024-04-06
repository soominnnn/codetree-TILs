const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = [+input[0], +input[1]];
let result = '';

if(a % 2 === 0) {
    result += "even\n"; 
} else {
    result += "odd\n";
}

if(b % 2 === 0) {
    result += "even";
} else {
    result += "odd";
}

console.log(result);