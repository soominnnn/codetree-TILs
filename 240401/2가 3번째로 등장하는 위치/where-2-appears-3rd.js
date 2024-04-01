const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const array = input[0].split(" ");
let count = 0;

for(let i = 0; i <= array.length; i++) {
    if(count === 3) {
        return console.log(i);
    }

    if(+array[i] === 2) {
        count += 1;
    }   
}