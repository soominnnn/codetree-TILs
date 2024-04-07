const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [middleScore, finalScore] = [+input[0], +input[1]];

if(middleScore >= 90 && finalScore >= 95) {
    return console.log("100000");
}

if(middleScore >= 90 && finalScore >= 90) {
    return console.log("50000");
}
return console.log("0");