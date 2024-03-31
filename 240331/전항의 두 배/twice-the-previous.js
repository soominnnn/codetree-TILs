const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const COUNT = 10;
const result = [];

function sequence(n1, n2, count) {
    if(count === 2) {
        return;
    }

    const n3 = n2 + 2 * n1;

    result.push(n3);

    return sequence(n2, n3, count - 1);
}

sequence(+input[0], +input[1], COUNT);
console.log(input.join(" ") + " " + result.join(" "));