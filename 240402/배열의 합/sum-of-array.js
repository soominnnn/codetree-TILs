const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const result = [];

for(let i = 0; i < +input.length; i++) {
    const sum = input[i].split(" ").reduce((a, b) => Number(a) + Number(b), 0);

    result.push(sum);
}

console.log(result.join("\n"));