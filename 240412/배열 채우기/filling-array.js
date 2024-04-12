const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');
let array = new Array(10);

for(let i = 0; i < input.length; i++) {
    if(input[i] === '0') {
        break;
    }
    array[i] = input[i];
}

const result = array.reverse().join(' ').trim();

console.log(result);