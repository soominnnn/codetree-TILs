const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function findOne(n) {
    if(n === 1) {
        return 0;
    }
    
    if(n % 2 === 0) {
        return findOne(Math.floor(n / 2)) + 1;
    } else {
        return findOne(Math.floor(n / 3)) + 1;
    }
}

console.log(findOne(+input));