const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let array = [];

if(input.includes("999")) {
    const index = input.indexOf("999");
    array = input.slice(0, index);
}

if(input.includes("-999")) {
    const index = input.indexOf("-999");
    array = input.slice(0, index);
}

console.log(Math.max(...array), Math.min(...array));