const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if(+input >= 3 && +input <= 5) {
    return console.log("Spring");
}

if(+input >= 6 && +input <= 8) {
    return console.log("Summer");
}

if(+input >= 9 && +input <= 11) {
    return console.log("Fall");
}

if(+input >= 12 || +input <= 2) {
    return console.log("Winter")
}