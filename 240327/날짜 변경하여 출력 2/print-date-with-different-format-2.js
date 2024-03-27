const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
const day = input.split("-");

console.log(`${day[2]}.${day[0]}.${Number(day[1])}`);