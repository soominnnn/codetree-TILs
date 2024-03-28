const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const startNum = +input[0];
const endNum = +input[1];
let sum = 0;

for(let i = startNum; i <= endNum; i++) {
    sum += i % 6 === 0 && i % 8 !== 0 ? i : 0;
}

console.log(sum);