const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(input >= 100) {
    return console.log("vapor");
}
else if(input < 0) {
    return console.log("ice");
}
return console.log("water");