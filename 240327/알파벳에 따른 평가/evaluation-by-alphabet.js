const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

switch(input) {
    case 'S': {
        return console.log("Superior");
    }
    case 'A': {
        return console.log("Excellent");
    }
    case 'B': {
        return console.log("Good");
    }
    case 'C': {
        return console.log("Usually");
    }
    case 'D': {
        return console.log("Effort");
    }
    default: {
        return console.log("Failure");
    }
}