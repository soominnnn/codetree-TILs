const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(+input >= 10 && +input <= 20) {
    return console.log("yes");
}
return console.log("no");