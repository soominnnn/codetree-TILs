const fs = require("fs");
let result = '';
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();
input.map(el => {
    if(el % 2 === 1 && el % 3 === 0) {
        return result += el + '\n';
    }
});
console.log(result);