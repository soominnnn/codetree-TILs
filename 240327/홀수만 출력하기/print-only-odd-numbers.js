const fs = require("fs");
let result = '';
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => {
    if(el % 3 === 0 && el % 2 === 1) {
        return result += el + '\n';
    }
});

console.log(result);