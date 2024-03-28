const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let count = 0;

function findOne(n) {
    count += 1;
    
    let remainder = n % 2 === 0 ? Math.floor(n / 2) : Math.floor(n / 3);

    if(remainder === 1) {
        return count;
    }
    return findOne(remainder);
}

console.log(findOne(+input));