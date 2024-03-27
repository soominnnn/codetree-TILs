const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(+input >= 1.0) {
    return console.log("High");
}
else if(+input >= 0.5) {
    return console.log("Middle");
}
return console.log("Low");