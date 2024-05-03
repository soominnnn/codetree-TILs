const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

if(input[0].length > input[1].lnegth) {
    return console.log(input[0], input[0].length);
}
if(input[0].length === input[1].length) {
    return console.log('same');
}
return console.log(input[1], input[1].length);