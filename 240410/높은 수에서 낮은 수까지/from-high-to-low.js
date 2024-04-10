const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let result = "";

if(+input[0] > +input[1]) {
    for(let i = +input[0]; i >= +input[1]; i--) {
        result += i + " ";
    }
} else {
    for(let i = +input[1]; i >= +input[0]; i--) {
        result += i + " ";
    }
}

console.log(result);