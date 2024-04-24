const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

for(let i = 2; i <= +input - 1; i++) {
    if(+input % i === 0) {
        return console.log('C');
    }
}

return console.log('N');