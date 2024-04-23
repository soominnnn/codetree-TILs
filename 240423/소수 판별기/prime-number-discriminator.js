const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let count = 0;

for(let i = 2; i <= input; i++) {
    if(input % i === 0 && +input !== i) {
        return console.log('C');
    }
}

return console.log('P');