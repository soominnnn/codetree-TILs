const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let result = "";

for(let i = 1; i <= 6; i++) {
    const count = input.filter(el => +el === i).length;

    result += `${i} - ${count}\n`;
}

console.log(result);