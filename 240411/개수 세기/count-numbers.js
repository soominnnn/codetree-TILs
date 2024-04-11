const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const number = input.shift().split(" ")[1];
const array = input[0].split(' ');
const result = array.filter(el => +el === +number).length;

console.log(result);