const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(+input % 2 === 0 && +input % 5 === 0) {
    return console.log("true");
}

if(+input % 2 === 1 && +input % 3 === 0) {
    return console.log("true")
}
return console.log("false");