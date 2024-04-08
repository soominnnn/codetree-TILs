const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const a = input[0].split(" ");
const b = input[1].split(" ");

if(a[0] === b[0]) {
    return console.log(a[1] > b[1] ? "A" : "B");
}
return console.log(a[0] > b[0] ? "A" : "B");