const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(input >= 90) {
    return console.log("A");
}
else if(input >= 80) {
    return console.log("B");
}
else if(input >= 70) {
    return console.log("C");
}
else if(input >= 60) {
    return console.log("D");
}
return console.log("F");