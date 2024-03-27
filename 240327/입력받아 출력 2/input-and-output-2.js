const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
const result = input.replaceAll('-', '');

console.log(result);