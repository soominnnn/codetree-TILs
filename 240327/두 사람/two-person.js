const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < input.length; i++) {
    const information = input[i].split(" ");
    const age = +information[0];
    const sex = information[1];
    
    if(age >= 19 && sex === 'M') {
        return console.log(1);
    }
}
return console.log(0);