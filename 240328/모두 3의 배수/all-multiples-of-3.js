const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < input.length; i++) {
    if(+input[i] % 3 !== 0) {
        return console.log(0);
    }
}

return console.log(1);