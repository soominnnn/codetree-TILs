const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const result = (input + '\n').repeat(2);

console.log(result);