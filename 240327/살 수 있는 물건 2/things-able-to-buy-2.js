const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();
const BOOK = 3000;
const MASK = 1000;
const PEN = 500;

if(input >= BOOK) {
    return console.log("book");
}
else if(input >= MASK) {
    return console.log("mask");
}
else if(input >= PEN) {
    return console.log("pen");
}
return console.log("no");