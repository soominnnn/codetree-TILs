const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const aScore = input[0].split(" ");
const bScore = input[1].split(" ");

if(+aScore[0] > +bScore[0] && +aScore[1] > +bScore[1]) {
    return console.log(1);
}
return console.log(0);