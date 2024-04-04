const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const specificNumber = input.filter(el => el >= 250);
let result = [0, 0];

if(specificNumber.length >= 1) {
    const index = input.indexOf(specificNumber[0]);

    for(let i = 0; i < index; i++) {
        result[0] += +input[i];
    }
    
    result[1] = (result[0] / index).toFixed(1);
} else {
    result[0] = input.reduce((a, b) => Number(a) + Number(b));
    result[1] = (result[0] / input.length).toFixed(1);
}

console.log(result.join(" "));