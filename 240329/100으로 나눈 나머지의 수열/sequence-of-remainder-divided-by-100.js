const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function sequence(n) {
    if(n === 1) {
        return 2;
    }

    if(n === 2) {
        return 4;
    }

    return (sequence(n - 1) * sequence(n - 2)) % 100;
}

console.log(sequence(+input));