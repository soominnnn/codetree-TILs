const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(+input % 4 === 0) {
    if(+input % 100 === 0 && +input % 400 !== 0) {
        return console.log("false");
    }
    return console.log("true");
}
else {
    return console.log("false");
}