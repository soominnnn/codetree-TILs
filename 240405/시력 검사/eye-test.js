const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const VISION = [1.0, 0.5];

if(input[0] >= VISION[0] && input[1] >= VISION[0]) {
    return console.log("High");
}
else if(input[0] >= VISION[1] && input[1] >- VISION[1]) {
    return console.log("Middle");
}
return console.log("Low");