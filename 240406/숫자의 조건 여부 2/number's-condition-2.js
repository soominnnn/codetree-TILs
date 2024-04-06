const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(+input === 5) {
    return console.log("A");
}

if(+input % 2 === 0) {
    return console.log("B");
}