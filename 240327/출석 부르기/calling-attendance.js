const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

switch(+input) {
    case 1: {
        console.log("John");
        break;
    }
    case 2: {
        console.log("Tom");
        break;
    }
    case 3: {
        console.log("Paul");
        break;
    }
    default: {
        console.log("Vacancy");
        break;
    }
}