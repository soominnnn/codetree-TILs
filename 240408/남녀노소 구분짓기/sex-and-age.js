const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [sex, age] = [+input[0], +input[1]];

if(sex === 0) {
    return console.log(age >= 19 ? "MAN" : "BOY"); 
}
return console.log(age >= 19 ? "WOMAN" : "GIRL");