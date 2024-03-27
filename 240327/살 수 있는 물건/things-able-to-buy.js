const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const BOOK = 3000;
const MASK = 1000;

if(+input >= BOOK) {
    return console.log("book");
}
return console.log("mask");