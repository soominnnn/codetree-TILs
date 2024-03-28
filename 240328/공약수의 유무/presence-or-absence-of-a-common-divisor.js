const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

for(let i = +input[0]; i <= +input[1]; i++) {
    if(1920 % i === 0 && 2880 % i === 0) {
        return console.log(1);
    }
}

return console.log(0);