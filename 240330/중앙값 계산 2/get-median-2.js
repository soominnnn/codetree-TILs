const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let result = '';

input.shift();

const array = input[0].split(" ");

for(let i = 0; i <= array.length; i += 2) {
    const arr = array.map(el => el).splice(0, i + 1).sort((a, b) => Number(a) - Number(b));

    result += arr[Math.floor(arr.length / 2)] + " ";
}

console.log(result);