const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let count = 0;

function sequence(n) {
    if(n === 1) {
        return count;
    }

    count += 1;

    if(n % 2 === 0) {
        return sequence(n / 2);
    } else {
        return sequence(n * 3 + 1)
    }
}

console.log(sequence(+input));