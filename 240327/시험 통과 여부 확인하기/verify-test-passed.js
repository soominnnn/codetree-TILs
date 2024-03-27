const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();

if(input >= 80) {
    return console.log("pass");
}
return console.log(`${80 - input} more score`);