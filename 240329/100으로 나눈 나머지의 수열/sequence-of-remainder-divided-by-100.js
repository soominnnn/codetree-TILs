const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function sequence(n) {
    if(n === 2) {
        return 2;
    }

    return sequence(n - 1) ** 2;
}

console.log(sequence(+input) % 100);