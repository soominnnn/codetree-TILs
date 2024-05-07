const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const array = ["apple", "banana", "grape", "blueberry", "orange"];
const result = array.filter(el => el[2] === input || el[3] === input);

if(result.length === 0) {
    return console.log('0');
}
return console.log(result.join('\n') + '\n' + result.length);