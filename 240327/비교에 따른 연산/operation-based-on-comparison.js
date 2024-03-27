const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const a = +input[0];
const b = +input[1];

if(a > b) {
    return console.log(a * b);
}
return console.log(Math.floor(b / a));