const fs = require('fs');
const input = fs.readFileSync(0).toString();
const sentence = '*'.repeat(+input) +'\n';
const result = sentence.repeat(+input);

console.log(result);